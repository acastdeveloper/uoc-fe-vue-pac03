// SOLUCIÓ proporcionada per Luis Alberto Arana Montaño

// "Si fas servir un setInterval aconseguiràs fer la teva web amb molt baix rendiment, gràcies al fet que existeixen framework / library com ReacJS, Vue, Angular ja no hem de preocupar - nos per aquests temes, però si estàs interessat en veure com treballen et deixo el codi de watch que emula el que fa Vue amb la seva directiva Watch():"

export default () => {

    // object.watch
    if (!Object.prototype.watch) {
        Object.defineProperty(Object.prototype, "watch", {
            enumerable: false
            , configurable: true
            , writable: false
            , value: function (prop, handler) {
                var
                    oldval = this[prop]
                    , newval = oldval
                    , getter = function () {
                        return newval;
                    }
                    , setter = function (val) {
                        oldval = newval;
                        return newval = handler.call(this, prop, oldval, val);
                    }
                    ;

                if (delete this[prop]) { // can't watch constants
                    Object.defineProperty(this, prop, {
                        get: getter
                        , set: setter
                        , enumerable: true
                        , configurable: true
                    });
                }
            }
        });
    }

    // object.unwatch
    if (!Object.prototype.unwatch) {
        Object.defineProperty(Object.prototype, "unwatch", {
            enumerable: false
            , configurable: true
            , writable: false
            , value: function (prop) {
                var val = this[prop];
                delete this[prop]; // remove accessors
                this[prop] = val;
            }
        });
    }
}

// Amb això podreu controlar qualsevol canvi en un atribut d'un objecte.

// Per exemple si vols controlar si una URL canvia seria així:

// const url = window.location

// url.watch('href', function (id, oldval, newval) {
//     document.getElementById('title').innerHTML = url.href
//     return newval
// })
