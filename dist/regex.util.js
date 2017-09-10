"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression types, such as 'i', 'g', 'm'...
 *
 * @export
 * @enum {number}
 */
var RegexType;
(function (RegexType) {
    RegexType["Default"] = "";
    RegexType["IgnoreCase"] = "i";
    RegexType["Glocal"] = "g";
    RegexType["Multiline"] = "m";
})(RegexType = exports.RegexType || (exports.RegexType = {}));
/**
 * A regular expression extensions for Typescript, provides the names key value pairs supports.
 *
 * @export
 * @class Regex
 */
var Regex = (function () {
    function Regex(pattern) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        var _this = this;
        this.default_key = '__default';
        /**
         * Set keys of names pairs return
         *
         * @memberof Regex
         */
        this.SetKeys = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            _this._keys = keys;
            return _this;
        };
        /**
         * Test the pattern if it is able to be matched.
         *
         * @memberof Regex
         */
        this.Test = function (target) {
            return _this._pattern.test(target);
        };
        /**
         * Return a strings collection of matched items
         *
         * @memberof Regex
         */
        this.Exec = function (target) {
            return _this._pattern.exec(target);
        };
        /**
         * Return a map of matched items in key-value pairs if you've set the names keys, or you can set them here in string[] style.
         *
         * @memberof Regex
         */
        this.Matches = function (target, keys) {
            var result = _this.Exec(target) || [];
            if (_this._keys || keys) {
                var coll_1 = {};
                coll_1[_this.default_key] = result[0];
                (_this._keys || keys).forEach(function (value, index) {
                    coll_1[value] = result[index + 1];
                });
                return coll_1;
            }
            else {
                var coll_2 = {};
                result.forEach(function (value, index) {
                    coll_2[index] = value;
                });
                return coll_2;
            }
        };
        if (pattern instanceof RegExp) {
            this.is_string = false;
            this._pattern = pattern;
            var patStr = pattern.toString();
            this._types = patStr.substring((patStr.lastIndexOf('/') || 0) + 1);
            this._typeStrings = regexTypeReader(this._types);
        }
        else {
            this.is_string = true;
            this._pattern = new (RegExp.bind.apply(RegExp, [void 0, pattern].concat(types)))();
            this._types = types.join('');
            this._typeStrings = regexTypeReader(types || [RegexType.Default]);
        }
    }
    Object.defineProperty(Regex.prototype, "Type", {
        /**
         * Get the types string connected by ' | '
         *
         * @readonly
         * @type {string}
         * @memberof Regex
         */
        get: function () { return this._typeStrings.join(' | '); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Types", {
        /**
         * Get regex types string collection
         *
         * @readonly
         * @type {string[]}
         * @memberof Regex
         */
        get: function () { return this._typeStrings; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Pattern", {
        /**
         * Get the regex pattern of this Regex instance in string format
         *
         * @readonly
         * @type {string}
         * @memberof Regex
         */
        get: function () { return this._pattern.toString(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Keys", {
        /**
         * The keys for names pairs return
         *
         * @memberof Regex
         */
        get: function () { return this._keys || []; },
        set: function (value) { this._keys = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a regex by string of RegExp interface value, support regex types importing.
     *
     * @static
     * @memberof Regex
     */
    Regex.Create = function (pattern) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        return new (Regex.bind.apply(Regex, [void 0, pattern].concat(types)))();
    };
    return Regex;
}());
exports.Regex = Regex;
/**Read types to string[] from different type-styles */
var regexTypeReader = function (types) {
    var strs = [];
    var nItems = distinct(types);
    for (var _i = 0, nItems_1 = nItems; _i < nItems_1.length; _i++) {
        var i = nItems_1[_i];
        strs.push(i === RegexType.Default ? 'Default' :
            i === RegexType.IgnoreCase ? 'IgnoreCase' :
                i === RegexType.Multiline ? 'Multiline' :
                    'Global');
    }
    return strs;
};
/**A filter for singleton in array or a string */
var distinct = function (items) {
    var arr = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var i = items_1[_i];
        if (!arr.includes(i)) {
            arr.push(i);
        }
    }
    return arr;
};
