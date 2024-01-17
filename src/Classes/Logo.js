class Logo {
    /**
     * Get the logo in `HTMLImageElement` format
     *
     * @static
     * @param {string} [className="tr-logo"]
     * @param {string} [id=""]
     * @param {boolean} [transparent=true]
     * @return {HTMLImageElement} 
     * @memberof Logo
     */
    static imgEl(className = "tr-logo", id = "", transparent = true) {
        const name = transparent ? "logo" : "logo_bg";
        const img = document.createElement('img');
        img.id = id;
        img.className = className;
        img.src = `logo/SVG/${name}.svg`;
        img.alt = "tochiResources logo";
        return img;
    }

    /**
     * Get the logo in HTML `string` format
     *
     * @static
     * @param {string} [className="tr-logo"]
     * @param {string} [id=""]
     * @param {boolean} [react=false]
     * @param {boolean} [transparent=true]
     * @return {string} 
     * @memberof Logo
     */
    static imgStr(className = "tr-logo", id = "", react = false, transparent = true) {
        const name = transparent ? "logo" : "logo_bg";
        if (react) return `<img className="${className}" id="${id}" src="logo/SVG/${name}.svg" alt="tochiResources logo" />`;
        else return `<img class="${className}" id="${id}" src="logo/SVG/${name}.svg" alt="tochiResources logo" />`;
    }

    /**
     * Get the icon in `HTMLImageElement` format
     *
     * @static
     * @param {string} [className="tr-icon"]
     * @param {string} [id=""]
     * @param {boolean} [transparent=false]
     * @return {HTMLImageElement} 
     * @memberof Logo
     */
    static imgIconEl(className = "tr-icon", id = "", transparent = false) {
        const name = transparent ? "icon" : "icon_bg";
        const img = document.createElement('img');
        img.id = id;
        img.className = className;
        img.src = `logo/SVG/${name}.svg`;
        img.alt = "tochiResources icon";
        return img;
    }

    /**
     * Get the icon in HTML `string` format
     *
     * @static
     * @param {string} [className="tr-icon"]
     * @param {string} [id=""]
     * @param {boolean} [react=false]
     * @param {boolean} [transparent=true]
     * @return {string} 
     * @memberof Logo
     */
    static imgIconStr(className = "tr-icon", id = "", react = false, transparent = false) {
        const name = transparent ? "icon" : "icon_bg";
        if (react) return `<img className="${className}" id="${id}" src="logo/SVG/${name}.svg" alt="tochiResources icon" />`;
        else return `<img class="${className}" id="${id}" src="logo/SVG/${name}.svg" alt="tochiResources icon" />`;
    }

    /**
     * Inserts a tochiResources logo or icon `<img>` tag before a specified element in the HTML document 
     *
     * @static
     * @param {Element | string} before The Element or the id of the element
     * @param {string} [type='logo'] Type of logo to insert eg. `logo` or `icon`
     * @return {*} 
     * @memberof CSS
     */
    static insert(before, type = 'logo', id = "") {
        if (!before) throw new Error("'before' is inavlid");
        if (type !== 'logo' && type !== 'icon') throw new Error(`'${type}' is unsupported`);
        if (typeof before !== 'string' && typeof before != Element) throw new Error(`Typeof '${typeof before}' is unsupported`);

        const css = document.createElement('link');
        css.rel = 'stylesheet';

        if (typeof before == Element) { document.head.insertBefore(type == 'logo' ? imgEl("tr-logo", id) : imgIconEl("tr-icon", id), before); return; }
        else {
            const el = document.getElementById(before);
            if (!el) throw new Error(`Cannot find element with the id '${before}'`);
            document.head.insertBefore(type == 'logo' ? imgEl("tr-logo", id) : imgIconEl("tr-icon", id), el); return;
        }
    }
}

module.exports = Logo;