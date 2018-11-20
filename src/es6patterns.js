(function(e, t) {
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = t;
    } else if (typeof define === "function" && typeof define.amd !== "undefined") {
        define([], () => t);
    } else {
        window[e] = t;
    }
})("ES6PatternsAPI", function() {
    class e {
        static getUniqueStore() {
            const e = typeof global === "object" ? global : window;
            if (!("__ES6Patterns_INTERNALS_SINGLETON__" in e)) {
                e.__ES6Patterns_INTERNALS_SINGLETON__ = {};
            }
            return e.__ES6Patterns_INTERNALS_SINGLETON__;
        }
        static getter(e, t = (() => undefined)) {
            const n = this.getUniqueStore();
            return function() {
                if (!(e in n)) {
                    n[e] = t();
                }
                return n[e];
            };
        }
        static setter(e) {
            const t = this.getUniqueStore();
            return function(n) {
                t[e] = n;
                return t[e];
            };
        }
        static get(e, t = (() => undefined)) {
            return this.getter(e, t)();
        }
        static set(e, t) {
            return this.setter(e)(t);
        }
    }
    return {
        Singleton: e
    };
}());