import { useState } from 'react';
import Icon from '@/components/ui/icon';
import CityBackground from '@/components/CityBackground';

const HERO_BG = 'https://cdn.poehali.dev/projects/03783633-de5c-47b4-8998-4469c45e58cc/files/cb955d80-0505-41c7-aafa-206b76caf638.jpg';

const topGames = [
  {
    rank: 1,
    title: 'Cyberpunk 2077',
    genre: 'RPG / Open World',
    score: 9.4,
    players: '24М',
    trailer: 'https://www.youtube.com/embed/qIcTM8WXFjk',
    tag: 'ГОРЯЧЕЕ',
    tagColor: 'neon-text-magenta',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
    gif: 'https://media.tenor.com/q1zy7isN0CAAAAAM/cyberpunk2077-cyberpunk.gif',
  },
  {
    rank: 2,
    title: 'Elden Ring',
    genre: 'Action RPG',
    score: 9.7,
    players: '18М',
    trailer: 'https://www.youtube.com/embed/E3Huy2cdih0',
    tag: 'ТОП',
    tagColor: 'rank-gold',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop',
    gif: 'https://media.tenor.com/O9NvpCqGFloAAAAM/elden-ring-game.gif',
  },
  {
    rank: 3,
    title: 'GTA VI',
    genre: 'Action / Open World',
    score: 9.9,
    players: '???',
    trailer: 'https://www.youtube.com/embed/QdBZExpgErs',
    tag: 'ОЖИДАНИЕ',
    tagColor: 'neon-text-cyan',
    cover: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop',
    gif: 'https://media.tenor.com/OXFHCBQes8UAAAAM/gta6-gta.gif',
  },
  {
    rank: 4,
    title: 'Alan Wake 2',
    genre: 'Survival Horror',
    score: 9.1,
    players: '5М',
    trailer: 'https://www.youtube.com/embed/tNwXVFhkiM4',
    tag: 'НОВИНКА',
    tagColor: 'neon-text-yellow',
    cover: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop',
    gif: 'https://media.tenor.com/MuDHbDJNqnoAAAAM/alan-wake2-alan-wake.gif',
  },
  {
    rank: 5,
    title: 'Baldur\'s Gate 3',
    genre: 'RPG / Strategy',
    score: 9.8,
    players: '10М',
    trailer: 'https://www.youtube.com/embed/nGHgGHFNbCY',
    tag: 'ЛЕГЕНДА',
    tagColor: 'rank-bronze',
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
    gif: 'https://media.tenor.com/IY8_3namjZAAAAAM/baldurs-gate3-bg3.gif',
  },
];

const getRankClass = (rank: number) => {
  if (rank === 1) return 'rank-gold';
  if (rank === 2) return 'rank-silver';
  if (rank === 3) return 'rank-bronze';
  return 'neon-text-cyan';
};

export default function Index() {
  const [activeSection, setActiveSection] = useState<'ratings' | 'about'>('ratings');
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [gifOpen, setGifOpen] = useState(false);
  const [activeGif, setActiveGif] = useState<{ title: string; gif: string } | null>(null);

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 400);
  };

  return (
    <div className="min-h-screen bg-cyber-dark scanlines" style={{ background: '#050510' }}>
      
      {/* HERO */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <CityBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 via-transparent to-[#050510]" />
        
        {/* Animated corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#00f5ff] opacity-60" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ff00ff] opacity-60" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ff00ff] opacity-60" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#00f5ff] opacity-60" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse-neon"
            style={{
              background: i % 2 === 0 ? '#00f5ff' : '#ff00ff',
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4">
          <div className="mb-4 inline-block">
            <span
              className="text-xs font-orbitron tracking-[0.4em] text-[#00f5ff] border border-[#00f5ff]/30 px-4 py-1"
              style={{ textShadow: '0 0 10px #00f5ff' }}
            >
              NEXUS GAMES PORTAL
            </span>
          </div>
          
          <h1
            className={`text-6xl md:text-8xl font-orbitron font-black mb-6 leading-tight ${glitchActive ? 'animate-glitch' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={triggerGlitch}
          >
            <span className="neon-text-cyan">ИГРОВОЙ</span>
            <br />
            <span className="neon-text-magenta">ПОРТАЛ</span>
          </h1>

          <p className="text-[#00f5ff]/70 font-rajdhani text-xl md:text-2xl tracking-widest mb-10 font-light">
            РЕЙТИНГИ · ТРЕЙЛЕРЫ · НОВОСТИ
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="neon-glow-btn text-sm"
              onClick={() => setActiveSection('ratings')}
            >
              Рейтинги
            </button>
            <button
              className="neon-glow-btn-magenta text-sm"
              onClick={() => setActiveSection('about')}
            >
              О сайте
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#00f5ff]/40 text-xs font-orbitron tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00f5ff]/60 to-transparent" />
        </div>
      </section>

      {/* NAV TABS */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#00f5ff]/20" style={{ background: 'rgba(5,5,16,0.95)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-0">
          <span className="font-orbitron text-[#00f5ff] text-sm tracking-widest mr-auto py-4">NEXUS</span>
          <button
            onClick={() => setActiveSection('ratings')}
            className={`px-6 py-4 font-orbitron text-xs tracking-widest border-b-2 transition-all ${
              activeSection === 'ratings'
                ? 'border-[#00f5ff] text-[#00f5ff]'
                : 'border-transparent text-white/40 hover:text-white/70'
            }`}
          >
            РЕЙТИНГИ
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`px-6 py-4 font-orbitron text-xs tracking-widest border-b-2 transition-all ${
              activeSection === 'about'
                ? 'border-[#ff00ff] text-[#ff00ff]'
                : 'border-transparent text-white/40 hover:text-white/70'
            }`}
          >
            О САЙТЕ
          </button>
        </div>
      </nav>

      {/* RATINGS SECTION */}
      {activeSection === 'ratings' && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="text-[#00f5ff]/50 font-orbitron text-xs tracking-[0.3em] mb-2">// ТОП ИГРЫ</div>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
                РЕЙТИНГ <span className="neon-text-cyan">2025</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 text-[#00f5ff]/40 font-orbitron text-xs">
              <div className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
              LIVE UPDATE
            </div>
          </div>

          <div className="grid gap-4">
            {topGames.map((game, idx) => (
              <div
                key={game.rank}
                className="cyber-card rounded-sm p-5 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
                  {/* Rank */}
                  <div className={`font-orbitron font-black text-5xl md:text-6xl w-16 text-center shrink-0 ${getRankClass(game.rank)}`}>
                    {String(game.rank).padStart(2, '0')}
                  </div>

                  {/* Cover */}
                  <div className="hidden md:block shrink-0 w-28 h-16 overflow-hidden rounded-sm border border-[#00f5ff]/20">
                    <img src={game.cover} alt={game.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-orbitron text-white text-lg font-bold truncate">{game.title}</h3>
                      <span className={`text-xs font-orbitron tracking-wider ${game.tagColor}`}>[{game.tag}]</span>
                    </div>
                    <div className="text-[#00f5ff]/50 font-rajdhani text-sm tracking-wider">{game.genre}</div>
                  </div>

                  {/* Score */}
                  <div className="text-center shrink-0">
                    <div className="font-orbitron text-3xl font-black neon-text-cyan">{game.score}</div>
                    <div className="text-[#00f5ff]/40 text-xs font-orbitron">ОЦЕНКА</div>
                  </div>

                  {/* Players */}
                  <div className="text-center shrink-0 hidden lg:block">
                    <div className="font-orbitron text-xl font-bold text-[#ff00ff]" style={{ textShadow: '0 0 10px #ff00ff' }}>{game.players}</div>
                    <div className="text-[#ff00ff]/40 text-xs font-orbitron">ИГРОКОВ</div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 shrink-0 flex-wrap">
                    <button
                      className="neon-glow-btn flex items-center gap-2"
                      onClick={() => setActiveTrailer(activeTrailer === game.trailer ? null : game.trailer)}
                    >
                      <Icon name={activeTrailer === game.trailer ? 'X' : 'Play'} size={12} />
                      {activeTrailer === game.trailer ? 'Закрыть' : 'Трейлер'}
                    </button>
                    <button
                      className="neon-glow-btn-magenta flex items-center gap-2"
                      onClick={() => setActiveGif({ title: game.title, gif: game.gif })}
                    >
                      <Icon name="Clapperboard" size={12} />
                      GIF
                    </button>
                  </div>
                </div>

                {/* Embedded Trailer */}
                {activeTrailer === game.trailer && (
                  <div className="mt-5 relative pt-[56.25%] overflow-hidden rounded-sm border border-[#00f5ff]/30 animate-fade-in-up">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={game.trailer + '?autoplay=1&rel=0'}
                      title={game.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'ИГР В БАЗЕ', value: '2,847', color: '#00f5ff' },
              { label: 'ПОЛЬЗОВАТЕЛЕЙ', value: '142К', color: '#ff00ff' },
              { label: 'РЕЦЕНЗИЙ', value: '18.4К', color: '#ffff00' },
              { label: 'ЖАНРОВ', value: '48', color: '#39ff14' },
            ].map((stat) => (
              <div key={stat.label} className="cyber-card rounded-sm p-5 text-center">
                <div
                  className="font-orbitron text-3xl font-black mb-1"
                  style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}` }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 font-orbitron text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GAME GIF MODAL */}
      {activeGif && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.88)' }}
          onClick={() => setActiveGif(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4 cyber-card rounded-sm p-1 animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#00f5ff]/20">
              <span className="font-orbitron text-xs text-[#00f5ff] tracking-widest">{activeGif.title.toUpperCase()} // GAMEPLAY</span>
              <button className="text-white/40 hover:text-[#ff00ff] transition-colors" onClick={() => setActiveGif(null)}>
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={activeGif.gif}
                alt={activeGif.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#00f5ff]/20" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#050510] to-transparent" />
            </div>
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="font-rajdhani text-white/40 text-sm tracking-wider">{activeGif.title.toUpperCase()} — LIVE ACTION</span>
            </div>
          </div>
        </div>
      )}

      {/* GIF MODAL */}
      {gifOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.88)' }}
          onClick={() => setGifOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full mx-4 cyber-card rounded-sm p-1 animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#00f5ff]/20">
              <span className="font-orbitron text-xs text-[#00f5ff] tracking-widest">CS2 // GAMEPLAY</span>
              <button
                className="text-white/40 hover:text-[#ff00ff] transition-colors"
                onClick={() => setGifOpen(false)}
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://media.tenor.com/YxnBi8UQDBQAAAAM/cs2-counter-strike.gif"
                alt="CS2 Gameplay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#00f5ff]/20" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#050510] to-transparent" />
            </div>
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="font-rajdhani text-white/40 text-sm tracking-wider">COUNTER-STRIKE 2 — LIVE ACTION</span>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT SECTION */}
      {activeSection === 'about' && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <div className="text-[#ff00ff]/50 font-orbitron text-xs tracking-[0.3em] mb-2">// ИНФОРМАЦИЯ</div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
              О <span className="neon-text-magenta">САЙТЕ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="cyber-card-magenta rounded-sm p-8">
              <div className="w-12 h-12 border border-[#ff00ff]/50 rounded-sm flex items-center justify-center mb-6"
                style={{ boxShadow: '0 0 15px rgba(255,0,255,0.3)' }}>
                <Icon name="Zap" size={20} className="text-[#ff00ff]" />
              </div>
              <h3 className="font-orbitron text-xl text-white mb-4">НАША МИССИЯ</h3>
              <p className="font-rajdhani text-white/60 text-lg leading-relaxed">
                NEXUS GAMES — это пространство для геймеров нового поколения. Мы собираем, анализируем 
                и представляем лучшие игры вселенной в одном месте. Никакого шума — только сигнал.
              </p>
            </div>

            <div className="cyber-card rounded-sm p-8">
              <div className="w-12 h-12 border border-[#00f5ff]/50 rounded-sm flex items-center justify-center mb-6"
                style={{ boxShadow: '0 0 15px rgba(0,245,255,0.3)' }}>
                <Icon name="Star" size={20} className="text-[#00f5ff]" />
              </div>
              <h3 className="font-orbitron text-xl text-white mb-4">ЧТО МЫ ДЕЛАЕМ</h3>
              <p className="font-rajdhani text-white/60 text-lg leading-relaxed">
                Объективные рейтинги на основе данных миллионов игроков. Встроенные трейлеры, 
                обзоры и статистика. Всё, что нужно — прямо здесь.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: 'Trophy', title: 'РЕЙТИНГИ', desc: 'Реальные оценки от сообщества игроков по всему миру', color: '#ffd700' },
              { icon: 'Play', title: 'ТРЕЙЛЕРЫ', desc: 'Встроенные видео прямо на странице без переходов', color: '#00f5ff' },
              { icon: 'Globe', title: 'ВСЕ ЖАНРЫ', desc: 'От инди до ААА-блокбастеров — полная база игр', color: '#ff00ff' },
            ].map((feat) => (
              <div key={feat.title} className="cyber-card rounded-sm p-6 group">
                <div className="mb-4 flex items-center gap-3">
                  <Icon name={feat.icon as 'Trophy'} size={20} style={{ color: feat.color, filter: `drop-shadow(0 0 8px ${feat.color})` }} />
                  <span className="font-orbitron text-sm tracking-widest" style={{ color: feat.color }}>{feat.title}</span>
                </div>
                <p className="font-rajdhani text-white/50 text-base leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Team / Contact block */}
          <div className="cyber-card-magenta rounded-sm p-8 text-center">
            <div className="text-[#ff00ff]/40 font-orbitron text-xs tracking-[0.4em] mb-4">// КОНТАКТ</div>
            <h3 className="font-orbitron text-2xl text-white mb-4">
              СТАНЬ ЧАСТЬЮ <span className="neon-text-magenta">NEXUS</span>
            </h3>
            <p className="font-rajdhani text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Пиши рецензии, предлагай игры, участвуй в сообществе. Портал живёт людьми.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="neon-glow-btn-magenta">
                Присоединиться
              </button>
              <button className="neon-glow-btn">
                Написать нам
              </button>
              <button
                className="neon-glow-btn flex items-center gap-2"
                style={{ borderColor: '#39ff14', color: '#39ff14', textShadow: '0 0 8px #39ff14', boxShadow: '0 0 12px rgba(57,255,20,0.3)' }}
                onClick={() => setGifOpen(true)}
              >
                <Icon name="Gamepad2" size={12} />
                CS2 в действии
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[#00f5ff]/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <span className="font-orbitron text-[#00f5ff]/40 text-xs tracking-[0.3em]">NEXUS GAMES © 2025</span>
          <div className="flex gap-6">
            {['Рейтинги', 'О сайте', 'Контакты'].map(link => (
              <button
                key={link}
                className="font-rajdhani text-white/30 hover:text-[#00f5ff] text-sm tracking-wide transition-colors"
                onClick={() => link === 'Рейтинги' ? setActiveSection('ratings') : setActiveSection('about')}
              >
                {link}
              </button>
            ))}
          </div>
          <span className="font-orbitron text-[#ff00ff]/30 text-xs tracking-widest">v2.0.77</span>
        </div>
      </footer>
    </div>
  );
}