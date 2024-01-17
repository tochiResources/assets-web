/**
 *
 *
 * @class CSS
 */
class CSS {
    static commonUrl = "./css/common.css";

    /**
     * Adds a tochiResources css `<link>` tag in the `<head>` of a HTML document
     *
     * @static
     * @param {string} [type='common'] Type of css to add
     * @return {*} 
     * @memberof CSS
     */
    static add(type = 'common') {
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        
        switch (type) {
            case 'common': common(); return;
            default: common(); return;
        }

        function common() {
            css.href = commonUrl;
            document.head.appendChild(css);
        }
    }

    /**
     * Inserts a tochiResources css `<link>` tag in the `<head>` of a HTML document before another tag that matches `beforeHref` which is the href value specified in the HTML document
     *
     * @static
     * @param {string} beforeHref Href value specified in the HTML document
     * @param {string} [type='common'] Type of css to insert
     * @return {*} 
     * @memberof CSS
     */
    static insert(beforeHref, type = 'common') {
        if (!beforeHref) throw new Error("'beforeHref' is inavlid");
        const css = document.createElement('link');
        css.rel = 'stylesheet';

        switch (type) {
            case 'common': common(); return;
            default: common(); return;
        }

        function common() {
            css.href = commonUrl;
            document.head.insertBefore(css, getBeforeChild());
        }

        function getBeforeChild() {
            const cssTags = document.getElementsByTagName('link');
            for (let i = 0; i < cssTags.length; i++) {
                const href = cssTags[i].getAttribute('href').replaceAll("\\", "/");
                if (href === beforeHref) return cssTags[i];
            }
            return null; // inserts at the end of head if null
        }
    }
}

module.exports = CSS;