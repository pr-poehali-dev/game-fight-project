import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				rajdhani: ['Rajdhani', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neon: {
					cyan: '#00f5ff',
					magenta: '#ff00ff',
					yellow: '#ffff00',
					green: '#39ff14',
				},
				cyber: {
					dark: '#050510',
					darker: '#020208',
					card: '#0a0a1a',
					border: '#1a1a3e',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)', clipPath: 'none' },
					'20%': { transform: 'translate(-3px, 3px)', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)' },
					'40%': { transform: 'translate(3px, -3px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' },
					'60%': { transform: 'translate(-2px, 1px)', clipPath: 'polygon(0 10%, 100% 10%, 100% 30%, 0 30%)' },
					'80%': { transform: 'translate(2px, -1px)', clipPath: 'none' },
				},
				'scanline': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 5px #00f5ff, 0 0 20px #00f5ff' },
					'50%': { opacity: '0.7', boxShadow: '0 0 2px #00f5ff, 0 0 8px #00f5ff' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'counter': {
					from: { opacity: '0', transform: 'scale(0.5)' },
					to: { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 3s infinite',
				'scanline': 'scanline 8s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'counter': 'counter 0.5s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
