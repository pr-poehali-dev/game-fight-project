import { useEffect, useRef } from 'react';

export default function CityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Buildings config
    const buildingCount = 40;
    type Building = {
      x: number; w: number; h: number;
      color: string; windows: { x: number; y: number; on: boolean; flicker: number }[];
      layer: number;
    };

    const colors = ['#00f5ff', '#ff00ff', '#7700ff', '#00aaff'];

    const makeBuildings = (): Building[] =>
      Array.from({ length: buildingCount }, (_, i) => {
        const layer = i < 10 ? 0 : i < 25 ? 1 : 2;
        const w = 30 + Math.random() * 80;
        const h = 80 + Math.random() * 280;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const windows: Building['windows'] = [];
        const cols = Math.floor(w / 14);
        const rows = Math.floor(h / 18);
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            windows.push({
              x: c * 14 + 6,
              y: r * 18 + 8,
              on: Math.random() > 0.4,
              flicker: Math.random() * 200,
            });
          }
        }
        return { x: i * (canvas.width / buildingCount) * 1.2, w, h, color, windows, layer };
      });

    const buildings = makeBuildings();

    const draw = (t: number) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, '#000008');
      sky.addColorStop(0.5, '#04001a');
      sky.addColorStop(1, '#0a0020');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // Stars
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      for (let s = 0; s < 80; s++) {
        const sx = ((s * 137.5 + t * 0.005) % W);
        const sy = (s * 47) % (H * 0.5);
        const alpha = 0.3 + 0.4 * Math.sin(t * 0.001 + s);
        ctx.globalAlpha = alpha;
        ctx.fillRect(sx, sy, 1, 1);
      }
      ctx.globalAlpha = 1;

      // Moon / neon orb
      const grd = ctx.createRadialGradient(W * 0.75, 60, 2, W * 0.75, 60, 50);
      grd.addColorStop(0, 'rgba(255,0,255,0.5)');
      grd.addColorStop(0.4, 'rgba(180,0,255,0.15)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Reflection on ground
      const ref = ctx.createLinearGradient(0, H * 0.75, 0, H);
      ref.addColorStop(0, 'rgba(0,245,255,0.03)');
      ref.addColorStop(1, 'rgba(0,245,255,0)');
      ctx.fillStyle = ref;
      ctx.fillRect(0, H * 0.75, W, H * 0.25);

      // Ground glow line
      ctx.strokeStyle = '#00f5ff';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.15;
      ctx.beginPath();
      ctx.moveTo(0, H * 0.82);
      ctx.lineTo(W, H * 0.82);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Draw layers back to front
      for (let layer = 0; layer <= 2; layer++) {
        const speed = [0.08, 0.18, 0.35][layer];
        const alpha = [0.35, 0.6, 1][layer];
        const baseY = H * [0.82, 0.78, 0.72][layer];

        ctx.globalAlpha = alpha;

        buildings
          .filter(b => b.layer === layer)
          .forEach(b => {
            const bx = ((b.x - offset * speed) % (W * 1.5) + W * 1.5) % (W * 1.5) - 60;
            const by = baseY - b.h;

            // Building body
            ctx.fillStyle = '#060614';
            ctx.fillRect(bx, by, b.w, b.h);

            // Neon outline glow
            ctx.shadowColor = b.color;
            ctx.shadowBlur = 8;
            ctx.strokeStyle = b.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = alpha * 0.6;
            ctx.strokeRect(bx, by, b.w, b.h);
            ctx.globalAlpha = alpha;
            ctx.shadowBlur = 0;

            // Rooftop antenna
            const antennaH = 12 + Math.random() * 8;
            ctx.strokeStyle = b.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = alpha * 0.7;
            ctx.beginPath();
            ctx.moveTo(bx + b.w / 2, by);
            ctx.lineTo(bx + b.w / 2, by - antennaH);
            ctx.stroke();
            // Blinking light on top
            const blink = Math.sin(t * 0.002 + b.x) > 0.3;
            if (blink) {
              ctx.fillStyle = b.color;
              ctx.shadowColor = b.color;
              ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.arc(bx + b.w / 2, by - antennaH, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
            ctx.globalAlpha = alpha;

            // Windows
            b.windows.forEach(win => {
              if (!win.on) return;
              const flicker = Math.sin(t * 0.003 + win.flicker) > -0.8;
              if (!flicker) return;
              const wx = bx + win.x;
              const wy = by + win.y;
              const winAlpha = 0.5 + 0.4 * Math.sin(t * 0.001 + win.flicker);
              ctx.globalAlpha = alpha * winAlpha;
              ctx.fillStyle = b.color;
              ctx.shadowColor = b.color;
              ctx.shadowBlur = 4;
              ctx.fillRect(wx, wy, 6, 8);
              ctx.shadowBlur = 0;
              ctx.globalAlpha = alpha;
            });
          });
      }

      ctx.globalAlpha = 1;

      // Rain streaks
      ctx.strokeStyle = 'rgba(0,245,255,0.12)';
      ctx.lineWidth = 0.5;
      for (let r = 0; r < 60; r++) {
        const rx = ((r * 173 + t * 0.3) % W);
        const ry = ((r * 89 + t * 0.8) % H);
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 2, ry + 15);
        ctx.stroke();
      }

      // Ground neon reflections of rain
      ctx.strokeStyle = 'rgba(255,0,255,0.06)';
      for (let r = 0; r < 30; r++) {
        const rx = ((r * 211 + t * 0.2) % W);
        const ry = H * 0.82 + ((r * 31 + t * 0.5) % (H * 0.18));
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx + 1, ry + 8);
        ctx.stroke();
      }

      offset += 0.5;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
