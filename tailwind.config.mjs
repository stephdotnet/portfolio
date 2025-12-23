/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-links': 'oklch(var(--p))',
                        '--tw-prose-code': 'oklch(var(--p))',
                        'blockquote': {
                            borderLeftColor: 'oklch(var(--p))',
                        },
                        'a': {
                            color: 'oklch(var(--p))',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        'code': {
                            color: 'oklch(var(--p))',
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                creasteph: {
                    "primary": "#5a9e2f",
                    "primary-content": "#ffffff",
                    "secondary": "#4a8a25",
                    "secondary-content": "#ffffff",
                    "accent": "#5a9e2f",
                    "neutral": "#2a2e37",
                    "base-100": "#ffffff",
                    "base-200": "#f8f9fa",
                    "base-300": "#e9ecef",
                    "base-content": "#2a2e37",
                    "info": "#3abff8",
                    "success": "#5a9e2f",
                    "warning": "#f97316",
                    "error": "#f87272",
                },
            },
            {
                "creasteph-dark": {
                    "primary": "#6db33f",
                    "primary-content": "#ffffff",
                    "secondary": "#5a9e2f",
                    "secondary-content": "#ffffff",
                    "accent": "#6db33f",
                    "neutral": "#1f2937",
                    "base-100": "#1a1a2e",
                    "base-200": "#16213e",
                    "base-300": "#0f3460",
                    "base-content": "#e5e7eb",
                    "info": "#3abff8",
                    "success": "#6db33f",
                    "warning": "#f97316",
                    "error": "#f87272",
                },
            },
        ],
    },
};
