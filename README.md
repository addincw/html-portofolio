# portofolio-template 2.0.0

FREE HTML5 portofolio template, build with bootstrap framework version 5, file and assets bundler manage by webpack 5.

## Stacks

1. [SASS / SCSS](https://sass-guidelin.es/#about-sass)
2. [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) (jquery, popper, and any dependency)
3. Boottrap Icons
4. Webpack 5

## Structure Projects

```
|- src // development folders, if need some customization
    |- assets
    |- js
    |- scss /** adopting 7-1 patterns */
        |- abstracts/
        |- base/
        |- components/
        |- layout/
        |- pages/
        |- styles.scss // entry point for other scss file
    |- index.html // template file
|- dist/ // generate file from src folder
```

## How to Use

There 2 type to use this template,

1. Use builded files under `dist` folder
2. Or if you need some customization, you can edit template under folder `src` then, build your own `dist` folder.

### Template Customization

If you need some customization, need to have installed nodejs (min. 16.19.1)

1. `npm run install`
2. do any customization under folder `src`
3. when in development, try to run `npm run start`
4. do `npm run build` if your development is done
5. use files under `dist` folder.
