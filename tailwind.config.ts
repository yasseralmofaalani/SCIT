import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // IBM Carbon colors - Extended Palette
        'ibm-blue-100': 'var(--ibm-blue-100)',
        'ibm-blue-90': 'var(--ibm-blue-90)',
        'ibm-blue-80': 'var(--ibm-blue-80)',
        'ibm-blue-70': 'var(--ibm-blue-70)',
        'ibm-blue-60': 'var(--ibm-blue-60)',
        'ibm-blue-50': 'var(--ibm-blue-50)',
        'ibm-blue-40': 'var(--ibm-blue-40)',
        'ibm-blue-30': 'var(--ibm-blue-30)',
        'ibm-blue-20': 'var(--ibm-blue-20)',
        'ibm-blue-10': 'var(--ibm-blue-10)',

        'ibm-gray-100': 'var(--ibm-gray-100)',
        'ibm-gray-90': 'var(--ibm-gray-90)',
        'ibm-gray-80': 'var(--ibm-gray-80)',
        'ibm-gray-70': 'var(--ibm-gray-70)',
        'ibm-gray-60': 'var(--ibm-gray-60)',
        'ibm-gray-50': 'var(--ibm-gray-50)',
        'ibm-gray-40': 'var(--ibm-gray-40)',
        'ibm-gray-30': 'var(--ibm-gray-30)',
        'ibm-gray-20': 'var(--ibm-gray-20)',
        'ibm-gray-10': 'var(--ibm-gray-10)',

        'ibm-white': 'var(--ibm-white)',
        'ibm-black': 'var(--ibm-black)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
        'sans': ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': '400',
        'normal': '500',
        'medium': '600',
        'semibold': '700',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
