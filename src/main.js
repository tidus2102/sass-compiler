import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

class PostCSS {
    /*constructor() {
        // this.vars();
        // this.init();
    }

    vars() {
        // this.browserList = DEFAULT_BROWSERS;
        // this.$input = document.querySelector("#js-input");
    }*/

    // init() {
    //     this.$input.innerHTML = CSS_EXAMPLE;
    // }

    // textPrepare(text = '') {
    //     return text.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    // }

    addPrefixerAndMinify(source, config, callback) {
        if (config == null)
            config = {
                autoprefixer: {     //https://github.com/postcss/autoprefixer#options
                },
                cssnano: {
                    preset: 'default'
                }
            };

        postcss([
            autoprefixer(config.autoprefixer),
            cssnano(config.cssnano),
        ])
            .process(source)
            .then(compiled => {
                callback({
                    status: 0,      //success
                    // text: this.textPrepare(compiled.css)
                    text: compiled.css
                });
            })
            .catch(error => {
                callback({
                    status: 1,
                    // message: this.textPrepare(error.toString())
                    message: error.toString()
                });
            });
    }
}

window.PostCSS = PostCSS;