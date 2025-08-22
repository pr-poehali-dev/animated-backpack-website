import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FF3333',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#000000',
					foreground: '#FFFFFF'
				},
				brutal: {
					DEFAULT: '#FF0000',
					orange: '#FF6600',
					yellow: '#FFFF00',
					green: '#00FF00',
					blue: '#0099FF',
					purple: '#9900FF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F5F5F5',
					foreground: '#000000'
				},
				accent: {
					DEFAULT: '#FF6B35',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'slide-in': {
					from: { transform: 'translateX(-100%)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-up': {
					from: { transform: 'translateY(50px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px #FF3333' },
					'50%': { boxShadow: '0 0 20px #FF3333, 0 0 30px #FF3333' }
				},
				'brutal-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.2)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'chaos-move': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(20px, -30px) rotate(90deg)' },
					'50%': { transform: 'translate(-10px, 20px) rotate(180deg)' },
					'75%': { transform: 'translate(-20px, -10px) rotate(270deg)' },
					'100%': { transform: 'translate(0, 0) rotate(360deg)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'bg-scale': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'morph': {
					'0%': { borderRadius: '20% 80% 40% 60%' },
					'25%': { borderRadius: '60% 40% 80% 20%' },
					'50%': { borderRadius: '40% 60% 20% 80%' },
					'75%': { borderRadius: '80% 20% 60% 40%' },
					'100%': { borderRadius: '20% 80% 40% 60%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'slide-in': 'slide-in 0.8s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bg-scale': 'bg-scale 20s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'brutal-spin': 'brutal-spin 4s linear infinite',
				'chaos-move': 'chaos-move 6s ease-in-out infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;