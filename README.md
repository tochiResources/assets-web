Assets used in tochiResources web technology apps.

## Install
1. Download tochiResources assets from the [latest releases](https://github.com/tochiResources/assets-web/releases/latest).
2. Unzip in your root folder.

**Download the code manually instead to use the API** until https://github.com/tochiResources/assets-web/issues/1 is fixed and then read the instructions below to `require` it from `node_modules` like a normal package:

1. Download this repo.
2. Unpack zip somewhere on your PC.
3. Open the directory or `index.js` in VS Code or cmd.
4. Open the Terminal in VS Code (skip this if using cmd).
5. Write `npm link`.
6. You can now install the package with `npm link @tochiresources/assets-web` and require it:

```js
const assetsWeb = require('@tochiresources/assets-web');
```

## Assets
- css
- logo
- cursors
- fonts
- sfx

## Colors
These are the main colors:
- ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`
- ![#4388CD](https://placehold.co/15x15/4388CD/4388CD.png) `#4388CD`
- ![#2A2C2D](https://placehold.co/15x15/2A2C2D/2A2C2D.png) `#2A2C2D`
- ![#131313](https://placehold.co/15x15/131313/131313.png) `#131313`

## CSS
`(Browsers only)` Insert directly in your HTML document before a specific `<link>` tag inside the `<head>` tag via JavaScript **(recommended)**:
> Inserts before the first `<link>` tag that has a `href` value of `css/style.css`
```js
assetsWeb.CSS.insert("css/style.css");
```

`(Browsers only)` Import directly in your HTML document as the last element in the `<head>` tag via JavaScript:
```js
assetsWeb.CSS.add();
```

Import directly via .css file:
```css
@import url("common.css");
```

Import directly via HTML document:
```html
<link rel="stylesheet" href="css/common.css">
```

### `:root` variables
	--main-color: #4388CD;
	--accent-color: #6495C6;
	--secondary-color: #8B8B8B;

	--element0-color: #fff;
	--element1-color: #1f2021;
	--element2-color: #253136;
	--element3-color: #272E31;
	--element4-color: #393E41;
	--element5-color: #3D484C;

	--button-bg-color: #2A2C2D;

	--notification-standard-color: rgb(82, 112, 124);
	--notification-standard-border-color: rgb(123, 194, 222);

	--notification-success-color: rgb(82, 124, 82);
	--notification-success-border-color: rgb(123, 222, 123);

	--notification-warning-color: rgb(124, 82, 82);
	--notification-warning-border-color: rgb(222, 123, 123);

	--bg1-color: #131313;
	--bg2-color: #1B1B1B;
	--footer-color: rgba(19, 19, 19, 1);

	--text-color: #fff;
	--text-header-color: var(--main-color);
	--text-accent-color: #8B8B8B;
	--text-link-color: #91BEEA;
	--text-link-visited-color: #4B75A7;
	--text-link-hover-color: var(--main-color);
	--text-link-active-color: ##54A4F5;

## Fonts
Fonts are included when importing the css.

### Default
```css
'Montserrat', sans-serif
```

Use in your .css file:
```css
.element {
    font-family: 'Montserrat', sans-serif;
}
```

## Logo
### Default
<img src="https://github.com/tochiResources/assets-web/assets/34287213/857f1d7c-5c84-4b8e-bc98-76f7ae406be2" alt="tochiResources logo" width="150px">

Import directly via HTML document as `<img>` **(recommended)**:
```html
<img class="tr-logo" src="logo/SVG/logo.svg" alt="tochiResources logo" />
```

`(Browsers only)` Insert directly in your HTML document before a specific `Element` via JavaScript:
```js
assetsWeb.Logo.insert(element);
// or
assetsWeb.Logo.insert("element-id");
```

CSS
```css
.tr-logo {
    width: 100px;
}
```

### Icon
<img src="https://github.com/tochiResources/assets-web/assets/34287213/1b124b5f-8a70-40c0-b423-9fd4a8d128e1" alt="tochiResources logo" width="70px">

`(Browsers only)` Insert directly in your HTML document before a specific `Element` via JavaScript:
```js
assetsWeb.Logo.insert(element, "icon");
// or
assetsWeb.Logo.insert("element-id", "icon");
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
Import directly via HTML document as an icon in the `<head>` tag:
```html
<link rel="icon" href="logo/favicon/favicon.ico" />
<link rel="apple-touch-icon" href="logo/favicon/apple-touch-icon.png" />
```

## Cursors
API docs can be found [here](https://www.npmjs.com/package/@tochiresources/cursors).
![tochiResources cursros overview](https://github.com/tochiResources/cursors/assets/34287213/a4bd4efa-a946-4f0b-8764-f85f6cf4e3fb)

## SFX
Audio should work in NodeJs as well thanks to [sound-play](https://www.npmjs.com/package/sound-play).
```js
assetsWeb.SFX.click_1();
assetsWeb.SFX.error_1();
assetsWeb.SFX.msg();
assetsWeb.SFX.success();
```


## Notes
The urls are offline for now and therefore may need to be checked/adjusted to your project folder structure.
