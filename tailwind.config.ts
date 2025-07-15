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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spinYForward: {
			'0%': { transform: 'scale(1) rotateY(0deg)' },
			'100%': { transform: 'scale(1.2) rotateY(360deg)' },
		  },
		  spinYBackward: {
			'0%': { transform: 'scale(1.2)' },
			'100%': { transform: 'scale(1)' },
		  },
		  floatTopCurve: {
			'0%': { transform: 'translate(0, 0) rotate(0deg)' },
			'100%': { transform: 'translate(80px, -40px) rotate(10deg)' }
		  },
		  floatTopReturn: {
			'0%': { transform: 'translate(80px, -40px) rotate(10deg)' },
			'100%': { transform: 'translate(0, 0) rotate(0deg)' }
		  },
		  floatBottomCurve: {
			'0%': { transform: 'translate(0, 0) rotate(0deg)' },
			'100%': { transform: 'translate(-80px, 40px) rotate(-10deg)' }
		  },
		  floatBottomReturn: {
			'0%': { transform: 'translate(-80px, 40px) rotate(-10deg)' },
			'100%': { transform: 'translate(0, 0) rotate(0deg)' }
		  },
		},
		animation: {
		  spinYForward: 'spinYForward 0.7s ease-in-out forwards',
		  spinYBackward: 'spinYBackward 1s ease-in-out forwards',
		  floatTopCurve: 'floatTopCurve 0.6s ease-out forwards',
		  floatTopReturn: 'floatTopReturn 0.6s ease-in forwards',
		  floatBottomCurve: 'floatBottomCurve 0.6s ease-out forwards',
		  floatBottomReturn: 'floatBottomReturn 0.6s ease-in forwards',
		},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
