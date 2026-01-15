/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                navy: '#0F172A',
                gold: '#C5A059',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}
