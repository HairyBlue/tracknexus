/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '280px',
            md: '556px',
            lg: '976px',
        },
        extend: {
            boxShadow: {
                lg: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            },
        },
    },
    plugins: [],
};
