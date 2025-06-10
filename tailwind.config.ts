import type { Config } from "tailwindcss"

export default {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,jsx,tsx,mdx}',
    './src/components/**/*.{js,jsx,tsx,mdx}',
    './src/templates/**/*.{js,jsx,tsx,mdx}',
    './src/app/**/*.{js,jsx,tsx,mdx}',
  ],
  theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px',
			},
		},
  	extend: {
  		borderRadius: {
				lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
  		},
			fontFamily: {
				barlow: ['Barlow', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
      },

			fontSize: {
        // Headings - Barlow
        'heading-hgg': ['54px', { lineHeight: '54px', fontWeight: '600' }],
        'heading-hg': ['40px', { lineHeight: '40px', fontWeight: '600' }],
        'heading-xll': ['36px', { lineHeight: '46px', fontWeight: '600' }],
        // 'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
        // 'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
        // 'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '30px', fontWeight: '600' }],
        'heading-xs': ['16px', { lineHeight: '26px', fontWeight: '500' }],

        // Body - Heebo
        'body-lg': ['20px', { lineHeight: '30px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-mdd': ['16px', { lineHeight: '26px', fontWeight: '500' }],
        // 'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400' }],
        // 'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400' }],

				// Body Tag
				// 'body-tag': ['12px', { lineHeight: '100%', fontWeight: '400' }],

        // Action - Inter
        // 'action-md': ['16px', { lineHeight: 'normal', fontWeight: '500' }],
        // 'action-sm': ['14px', { lineHeight: 'normal', fontWeight: '500' }],
      },
			
  		colors: {
				background: '#F5F8FA',
				shape01: '#FFFFFF',
				shape02: '#DCE2E5',
				blueLow: '#DDE9F0',
				textComplement: '#333333',
				textTitle: '#123952',
				text: '#617480',
				brandOrange: '#F25D27',
				green: '#51B853',
				brandBlue: '#115D8C',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

