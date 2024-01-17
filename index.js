const CSS = require('./src/Classes/CSS');
const Logo = require('./src/Classes/Logo');
const SFX = require('./src/Classes/SFX');
const Cursors = require('@tochiresources/cursors');

const compile = require('./src/compile');
compile();

module.exports = {
    CSS: CSS,
    Logo: Logo,
    Cursors: Cursors,
    SFX: SFX
}