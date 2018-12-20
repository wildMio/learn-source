var Emoji = /** @class */ (function () {
    function Emoji(_icon) {
        this._icon = _icon;
    }
    Object.defineProperty(Emoji.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emoji.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        enumerable: true,
        configurable: true
    });
    Emoji.prototype.change = function (val) {
        this._prev = this._icon;
        this._icon = val;
    };
    return Emoji;
}());
var emoji = new Emoji('🌞');
console.log(emoji.icon, emoji.prev);
emoji.change('⚡');
emoji.change('🐵');
console.log(emoji.icon, emoji.prev);
