Assets used in tochiResources web technology apps.

## Install
1. Download tochiResources assets pack from [here](https://github.com/@tochiresources/assets-web/releases/latest).
2. Unzip in your root folder.

Also install with `npm` if you wish to use the API:

```js
npm i @tochiresources/assets-web
```
```js
const assetsWeb = require('@tochiresources/assets-web');
```

## Assets
- css
- fonts
- logo

## CSS
Insert directly in your HTML document before a specific `<link>` tag inside the `<head>` tag via JavaScript `(Browsers only)` **(recommended)**:
> Inserts before the first `<link>` tag that has a `href` value of `css/style.css`
```js
assetsWeb.CSS.Insert('css/style.css');
```

Import directly in your HTML document as the last element in the `<head>` tag via JavaScript `(Browsers only)`:
```js
assetsWeb.CSS.Add();
```

Import directly via .css file:
```css
@import url(./common.css);
```

Import directly via HTML document:
```html
<link rel="stylesheet" href="css/common.css">
```

## Fonts
Fonts are included when importing the css.

### Default
`'Montserrat', sans-serif`

Use in your .css file:
```css
.element {
    font-family: 'Montserrat', sans-serif;
}
```

## Logo
### Default
<img src="https://github.com/tochiResources/assets-web/assets/34287213/857f1d7c-5c84-4b8e-bc98-76f7ae406be2" alt="tochiResources logo" width="150px">

Import directly via HTML document **(recommended)**:
```html
<img class="tr-logo" src="logo/SVG/logo.svg" alt="tochiResources logo" />
```

CSS
```css
.tr-logo {
    width: 100px;
}
```

### Icon
<img src="https://github.com/tochiResources/assets-web/assets/34287213/1b124b5f-8a70-40c0-b423-9fd4a8d128e1" alt="tochiResources logo" width="70px">

Import directly via HTML document as an icon in the `<head>` tag:
```html
<link rel="icon" href="logo/favicon/favicon.ico" />
<link rel="apple-touch-icon" href="logo/favicon/apple-touch-icon.png" />
```

Import directly via HTML document as `<img>`:
```html
<img class="tr-icon" src="logo/SVG/icon_bg.svg" alt="tochiResources icon" />
```

CSS
```css
.tr-icon {
    width: 25px;
}
```

### Favicon
Import directly via HTML document:
```html
<img class="tr-icon" src="logo/SVG/icon.svg" alt="tochiResources icon" />
```

CSS
```css
.tr-icon {
    width: 25px;
}
```

# Notes
The urls are offline for now and therefore needs to be checked/adjusted to your project folder structure
