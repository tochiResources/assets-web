const play = (a) => {
    try { new Audio(`sfx/${a}`).play(); }
    catch (e) {
        const sound = require("sound-play");
        const dir = __dirname.replaceAll("\\", "/").replace("src/Classes", "dist/sfx");
        sound.play(`${dir}/${a}`);
    }
}

/**
 * SFX used across tochiResources apps
 *
 * @class SFX
 */
class SFX {
    // click
    static click_1() { play('click-1.wav'); }
    static click_2() { play('click-2.wav'); }
    static click_3() { play('click-3.wav'); }

    // error
    static error_1() { play('error-1.wav'); }
    static error_2() { play('error-2.wav'); }

    // other
    static drop() { play('drop.wav'); }
    static enter() { play('enter.wav'); }
    static msg() { play('msg.wav'); }
    static success() { play('success.wav'); }
}

module.exports = SFX;