<img src="https://github.com/addincw/html-template-gradfull/blob/master/dist/assets/banner.png" width="100%" />

# Gradfull Html Template

![Static Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Static Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Gradfull (Fully Gradient) is html template with a beautiful gradient color theme, modern, attractive but still looks professional. Aimed at company profile websites, landing pages, and also personal portfolio websites, but not limited to.

Using a mobile first, responsive design approach, and the [7-1 pattern Architecture](https://sass-guidelin.es/#architecture). This makes the template easy to maintain and readable. Based on Bootstrap 5, bundler tools using Webpack 5.

## Table of Contents

1. About
2. Table of Contents
3. Structure Folder
4. Quick Start

   4.1 Using Prebuild Files

   4.2 Build from Source Files

5. License

## Structure Folder

```
|- src // development folders, if need some customization
    |- assets
    |- js
    |- scss
        |- abstracts/
        |- base/
        |- components/
        |- layout/
        |- pages/
        |- styles.scss // entry point for other scss file
    |- index.html // template file
|- dist/ // prebuild files from src folder
```

## Quick Start

### Using Prebuild Files

Suitable for you who want to directly use the template without the need for customization. Use prebuild files under `dist` folder, the template is ready to use.

### Build from Source Files

If you are familiar with Webpack, this method is more powerful. You can customize the template and then build it.
It required to have installed nodejs (min. 16.19.1). Then:

1. `npm run install`
2. do any customization under folder `src`
3. when in development, try to run `npm run start` to see the changed

When development done, do

1. `npm run build`
2. use files under `dist` folder

## License

Copyright (c) 2023 Project Cendekia

Gradfull is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products. But you always need to state that Project Cendekia is the original author of this template
