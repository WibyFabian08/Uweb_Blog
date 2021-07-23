<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
</style>

// cara setup tailwind si react
1. npm - i autoprefixer
2. npm i postcss-cli
3. npm i tailwindcss (package-lock.json - fsevent - os - add "win32")
4. package.json
    - tambah di scripts: 
        "watch:css": "postcss --watch tailwindcss/style.css -o src/assets/css/style.css"
5. npx tailwindcss init --full
6. folder tailwindcss
    - style.css
        - @tailwind base;
        - @tailwind components;
        - @tailwind utilities;
7. file postcss.config.js (root)
    - const tailwindcss = require('tailwindcss');

    - module.exports = {
        plugins: [
            tailwindcss('./tailwind.config.js),
            require('autoprefixer')
        ]
    }
8. app import css
    - ./assets/css/style.css

9. npm run watch:css