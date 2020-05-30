/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
    }
    /*
     * Calls the recursive function to binary search a number in an array of
     * numbers. Strictly speaking, that could be an array of any type of numbers
     * and an x argument of any type of number, not necessarily integers.
     */
    BinarySearch.binarySearchInt = function (ar, x) {
        BinarySearch.recursionCounter = 0;
        return BinarySearch.binarySearchIntRecursiv(ar, x, 0, ar.length);
    };
    BinarySearch.binarySearchIntRecursiv = function (ar, x, l, r) {
        if (l >= r) {
            return 0;
        }
        var i = Math.floor((l + r) / 2);
        if (ar[i] === x) {
            return i + 1;
        }
        var nextL = l;
        var nextR = r;
        if (ar[i] < x) {
            nextL = i + 1;
        }
        else {
            nextR = i;
        }
        // counting the recursive method calls only, not including the initial call
        BinarySearch.recursionCounter++;
        return BinarySearch.binarySearchIntRecursiv(ar, x, nextL, nextR);
    };
    /*
     * Calls the recursive function to binary search the object x in the array.
     * in order to compare them, the objects in the array and the object x must
     * be of a class which implements the Comparable interface.
     */
    BinarySearch.binarySearch = function (ar, x) {
        return BinarySearch.binarySearchRecursiv(ar, x, 0, ar.length);
    };
    BinarySearch.binarySearchRecursiv = function (ar, x, l, r) {
        if (l >= r) {
            return 0;
        }
        var i = Math.floor((l + r) / 2);
        if (ar[i].compareTo(x) === 0) {
            return i + 1;
        }
        var nextL = l;
        var nextR = r;
        if (ar[i].compareTo(x) < 0) {
            nextL = i + 1;
        }
        else {
            nextR = i;
        }
        return BinarySearch.binarySearchRecursiv(ar, x, nextL, nextR);
    };
    BinarySearch.getRecursionCount = function () {
        return BinarySearch.recursionCounter;
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var testBinarySearchGeneric_1 = __webpack_require__(2);
var testBinarySearchInt_1 = __webpack_require__(3);
var binarySearch_1 = __webpack_require__(0);
(function test() {
    log('Test binary search (int)');
    testBinarySearchInt_1.testInt();
    log('Test binary search (generic)');
    testBinarySearchGeneric_1.testGeneric();
    log('Test 999');
    var ar = Array(1000).fill(0).map(function (v, i) { return i; });
    console.log('Zahl 12 gefunden an Position: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    console.log('Zahl -1 nicht gefunden (Ergebnis: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, -1) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    log('Test 99999');
    ar = Array(100000).fill(0).map(function (v, i) { return i; });
    console.log('Zahl 12 gefunden an Position: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    console.log('Zahl 100000 nicht gefunden (Ergebnis: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 100000) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
})();
function log(message) {
    console.log('');
    console.log('####');
    console.log('#### ' + message);
    console.log('####');
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var binarySearch_1 = __webpack_require__(0);
function testGeneric() {
    var tests = new Set();
    tests.add(testEmptyArray);
    tests.add(testElementInArrayLength1);
    tests.add(testElementNotInArrayLength1);
    tests.add(testElementInArrayPosition1Length5);
    tests.add(testElementInArrayPosition5Length5);
    tests.add(testElementInArrayPosition2Length5);
    tests.add(testElementNotInArrayLength5);
    tests.forEach(function (fn) {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}
exports.testGeneric = testGeneric;
var Instrument = /** @class */ (function () {
    function Instrument(str) {
        this.str = str;
    }
    Instrument.prototype.compareTo = function (other) {
        if (this.str < other.str) {
            return -1;
        }
        if (this.str === other.str) {
            return 0;
        }
        return 1;
    };
    Instrument.createArray = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var array = [];
        for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
            var str = strings_1[_a];
            array.push(new Instrument(str));
        }
        return array;
    };
    return Instrument;
}());
function testEmptyArray() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearch([], new Instrument('Accordion'));
    return EXPECTED === actual;
}
function testElementInArrayLength1() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Accordion'));
    return EXPECTED === actual;
}
function testElementNotInArrayLength1() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Bass guitar'));
    return EXPECTED === actual;
}
function testElementInArrayPosition1Length5() {
    var EXPECTED = 1;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Cymbals'));
    return EXPECTED === actual;
}
function testElementInArrayPosition5Length5() {
    var EXPECTED = 5;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Ukulele'));
    return EXPECTED === actual;
}
function testElementInArrayPosition2Length5() {
    var EXPECTED = 2;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Electric Guitar'));
    return EXPECTED === actual;
}
function testElementNotInArrayLength5() {
    var EXPECTED = 0;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Accordion'));
    return EXPECTED === actual;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var binarySearch_1 = __webpack_require__(0);
function testInt() {
    var tests = new Set();
    tests.add(testEmptyIntArray);
    tests.add(testElementInIntArrayLength1);
    tests.add(testElementNotInIntArrayLength1);
    tests.add(testElementInIntArrayPosition1Length5);
    tests.add(testElementInIntArrayPosition5Length5);
    tests.add(testElementInIntArrayPosition3Length5);
    tests.add(testElementNotInIntArrayLength5);
    tests.forEach(function (fn) {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}
exports.testInt = testInt;
function testEmptyIntArray() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([], 1);
    return EXPECTED === actual;
}
function testElementInIntArrayLength1() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([1], 1);
    return EXPECTED === actual;
}
function testElementNotInIntArrayLength1() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([1], 2);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition1Length5() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 3);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition5Length5() {
    var EXPECTED = 5;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 21);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition3Length5() {
    var EXPECTED = 3;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 8);
    return EXPECTED === actual;
}
function testElementNotInIntArrayLength5() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 1);
    return EXPECTED === actual;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTJiZTUxYjEyYmE2OGFlZGNmNmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmFyeVNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdEJpbmFyeVNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdEJpbmFyeVNlYXJjaEdlbmVyaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RCaW5hcnlTZWFyY2hJbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBQUE7SUF3RUEsQ0FBQztJQXJFRzs7OztPQUlHO0lBQ1csNEJBQWUsR0FBN0IsVUFBOEIsRUFBWSxFQUFFLENBQVM7UUFDakQsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRWMsb0NBQXVCLEdBQXRDLFVBQXVDLEVBQVksRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFFaEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxD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QUssTUFBTSxDQUFDO0FBQy9CLENBQUM7QUFFRDtJQUNJLElBQU0sUUFBUSxHQUFXLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBVywyQkFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RSxNQUFNLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQztBQUMvQixDQUFDO0FBRUQ7SUFDSSxJQUFNLFFBQVEsR0FBVyxDQUFDLENBQUM7SUFDM0IsSUFBSSxNQUFNLEdBQVcsMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFDL0IsQ0FBQyIsImZpbGUiOiJidWlsZC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMmJlNTFiMTJiYTY4YWVkY2Y2YyIsImV4cG9ydCBjbGFzcyBCaW5hcnlTZWFyY2gge1xuICAgIHByaXZhdGUgc3RhdGljIHJlY3Vyc2lvbkNvdW50ZXI6IG51bWJlcjtcblxuICAgIC8qXG4gICAgICogQ2FsbHMgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBiaW5hcnkgc2VhcmNoIGEgbnVtYmVyIGluIGFuIGFycmF5IG9mXG4gICAgICogbnVtYmVycy4gU3RyaWN0bHkgc3BlYWtpbmcsIHRoYXQgY291bGQgYmUgYW4gYXJyYXkgb2YgYW55IHR5cGUgb2YgbnVtYmVyc1xuICAgICAqIGFuZCBhbiB4IGFyZ3VtZW50IG9mIGFueSB0eXBlIG9mIG51bWJlciwgbm90IG5lY2Vzc2FyaWx5IGludGVnZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYmluYXJ5U2VhcmNoSW50KGFyOiBudW1iZXJbXSwgeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgQmluYXJ5U2VhcmNoLnJlY3Vyc2lvbkNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludFJlY3Vyc2l2KGFyLCB4LCAwLCBhci5sZW5ndGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGJpbmFyeVNlYXJjaEludFJlY3Vyc2l2KGFyOiBudW1iZXJbXSwgeDogbnVtYmVyLCBsOiBudW1iZXIsIHI6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgICAgaWYgKGwgPj0gcikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoKGwgKyByKSAvIDIpO1xuXG4gICAgICAgIGlmIChhcltpXSA9PT0geCkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5leHRMID0gbDtcbiAgICAgICAgbGV0IG5leHRSID0gcjtcbiAgICAgICAgaWYgKGFyW2ldIDwgeCkge1xuICAgICAgICAgICAgbmV4dEwgPSBpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRSID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvdW50aW5nIHRoZSByZWN1cnNpdmUgbWV0aG9kIGNhbGxzIG9ubHksIG5vdCBpbmNsdWRpbmcgdGhlIGluaXRpYWwgY2FsbFxuICAgICAgICBCaW5hcnlTZWFyY2gucmVjdXJzaW9uQ291bnRlcisrO1xuICAgICAgICByZXR1cm4gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludFJlY3Vyc2l2KGFyLCB4LCBuZXh0TCwgbmV4dFIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2FsbHMgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBiaW5hcnkgc2VhcmNoIHRoZSBvYmplY3QgeCBpbiB0aGUgYXJyYXkuXG4gICAgICogaW4gb3JkZXIgdG8gY29tcGFyZSB0aGVtLCB0aGUgb2JqZWN0cyBpbiB0aGUgYXJyYXkgYW5kIHRoZSBvYmplY3QgeCBtdXN0XG4gICAgICogYmUgb2YgYSBjbGFzcyB3aGljaCBpbXBsZW1lbnRzIHRoZSBDb21wYXJhYmxlIGludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJpbmFyeVNlYXJjaDxFIGV4dGVuZHMgQ29tcGFyYWJsZTxFPj4oYXI6IEVbXSwgeDogRSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoUmVjdXJzaXYoYXIsIHgsIDAsIGFyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmluYXJ5U2VhcmNoUmVjdXJzaXY8RSBleHRlbmRzIENvbXBhcmFibGU8RT4+KGFyOiBFW10sIHg6IEUsIGw6IG51bWJlciwgcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKGwgPj0gcikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoKGwgKyByKSAvIDIpO1xuXG4gICAgICAgIGlmIChhcltpXS5jb21wYXJlVG8oeCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXh0TCA9IGw7XG4gICAgICAgIGxldCBuZXh0UiA9IHI7XG4gICAgICAgIGlmIChhcltpXS5jb21wYXJlVG8oeCkgPCAwKSB7XG4gICAgICAgICAgICBuZXh0TCA9IGkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dFIgPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2hSZWN1cnNpdihhciwgeCwgbmV4dEwsIG5leHRSKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UmVjdXJzaW9uQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIEJpbmFyeVNlYXJjaC5yZWN1cnNpb25Db3VudGVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wYXJhYmxlPEU+IHtcbiAgICAvKlxuICAgICAqIENvbXBhcmVzIHRoaXMgb2JqZWN0IHRvIHRoZSBnaXZlbiBhcmd1bWVudCBhbmQgcmV0dXJuc1xuICAgICAqIGEgbmVnYXRpdmUgbnVtYmVyLCB6ZXJvIG9yIGEgcG9zaXRpdmUgbnVtYmVyLCBpZiB0aGlzIG9iamVjdFxuICAgICAqIGlzIGxlc3MgdGhhbiwgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIHRoZSBvdGhlciBvYmplY3QsXG4gICAgICogcmVzcGVjdGl2ZWx5LlxuICAgICAqL1xuICAgIGNvbXBhcmVUbyhvdGhlcjogQ29tcGFyYWJsZTxFPik6IG51bWJlcjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmluYXJ5U2VhcmNoLnRzIiwiaW1wb3J0IHsgdGVzdEdlbmVyaWMgfSBmcm9tICcuL3Rlc3RCaW5hcnlTZWFyY2hHZW5lcmljJztcbmltcG9ydCB7IHRlc3RJbnQgfSBmcm9tICcuL3Rlc3RCaW5hcnlTZWFyY2hJbnQnO1xuaW1wb3J0IHtCaW5hcnlTZWFyY2h9IGZyb20gXCIuL2JpbmFyeVNlYXJjaFwiO1xuXG5cbihmdW5jdGlvbiB0ZXN0KCkge1xuICAgIGxvZygnVGVzdCBiaW5hcnkgc2VhcmNoIChpbnQpJyk7XG4gICAgdGVzdEludCgpO1xuXG4gICAgbG9nKCdUZXN0IGJpbmFyeSBzZWFyY2ggKGdlbmVyaWMpJyk7XG4gICAgdGVzdEdlbmVyaWMoKTtcblxuICAgIGxvZygnVGVzdCA5OTknKTtcbiAgICBsZXQgYXI6IG51bWJlcltdID0gQXJyYXkoMTAwMCkuZmlsbCgwKS5tYXAoKHYsIGkpID0+IGkpO1xuICAgIGNvbnNvbGUubG9nKCdaYWhsIDEyIGdlZnVuZGVuIGFuIFBvc2l0aW9uOiAnICsgQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludChhciwgMTIpKTtcbiAgICBjb25zb2xlLmxvZygnQW56YWhsIHJla3Vyc2l2ZXIgQXVmcnVmZTogJyArIEJpbmFyeVNlYXJjaC5nZXRSZWN1cnNpb25Db3VudCgpKTtcbiAgICBjb25zb2xlLmxvZygnWmFobCAtMSBuaWNodCBnZWZ1bmRlbiAoRXJnZWJuaXM6ICcgKyBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoSW50KGFyLCAtMSkgKyAnKScpO1xuICAgIGNvbnNvbGUubG9nKCdBbnphaGwgcmVrdXJzaXZlciBBdWZydWZlOiAnICsgQmluYXJ5U2VhcmNoLmdldFJlY3Vyc2lvbkNvdW50KCkpO1xuXG4gICAgbG9nKCdUZXN0IDk5OTk5Jyk7XG4gICAgYXIgPSBBcnJheSgxMDAwMDApLmZpbGwoMCkubWFwKCh2LCBpKSA9PiBpKTtcbiAgICBjb25zb2xlLmxvZygnWmFobCAxMiBnZWZ1bmRlbiBhbiBQb3NpdGlvbjogJyArIEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2hJbnQoYXIsIDEyKSk7XG4gICAgY29uc29sZS5sb2coJ0FuemFobCByZWt1cnNpdmVyIEF1ZnJ1ZmU6ICcgKyBCaW5hcnlTZWFyY2guZ2V0UmVjdXJzaW9uQ291bnQoKSk7XG4gICAgY29uc29sZS5sb2coJ1phaGwgMTAwMDAwIG5pY2h0IGdlZnVuZGVuIChFcmdlYm5pczogJyArIEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2hJbnQoYXIsIDEwMDAwMCkgKyAnKScpO1xuICAgIGNvbnNvbGUubG9nKCdBbnphaGwgcmVrdXJzaXZlciBBdWZydWZlOiAnICsgQmluYXJ5U2VhcmNoLmdldFJlY3Vyc2lvbkNvdW50KCkpO1xufSkoKTtcblxuZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZyl7XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCcjIyMjJyk7XG4gICAgY29uc29sZS5sb2coJyMjIyMgJyArIG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKCcjIyMjJyk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXN0QmluYXJ5U2VhcmNoLnRzIiwiaW1wb3J0IHsgQmluYXJ5U2VhcmNoLCBDb21wYXJhYmxlIH0gZnJvbSAnLi9iaW5hcnlTZWFyY2gnO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEdlbmVyaWMoKXtcbiAgICBsZXQgdGVzdHM6IFNldDwoKSA9PiBib29sZWFuPiA9IG5ldyBTZXQoKTtcbiAgICB0ZXN0cy5hZGQodGVzdEVtcHR5QXJyYXkpO1xuICAgIHRlc3RzLmFkZCh0ZXN0RWxlbWVudEluQXJyYXlMZW5ndGgxKTtcbiAgICB0ZXN0cy5hZGQodGVzdEVsZW1lbnROb3RJbkFycmF5TGVuZ3RoMSk7XG4gICAgdGVzdHMuYWRkKHRlc3RFbGVtZW50SW5BcnJheVBvc2l0aW9uMUxlbmd0aDUpO1xuICAgIHRlc3RzLmFkZCh0ZXN0RWxlbWVudEluQXJyYXlQb3NpdGlvbjVMZW5ndGg1KTtcbiAgICB0ZXN0cy5hZGQodGVzdEVsZW1lbnRJbkFycmF5UG9zaXRpb24yTGVuZ3RoNSk7XG4gICAgdGVzdHMuYWRkKHRlc3RFbGVtZW50Tm90SW5BcnJheUxlbmd0aDUpO1xuXG4gICAgdGVzdHMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZm4ubmFtZSArICc6ICcgKyAoZm4oKSA/ICdzdWNjZXNzJyA6ICdmYWlsZWQnKSk7XG4gICAgfSk7XG59XG5cbmNsYXNzIEluc3RydW1lbnQgaW1wbGVtZW50cyBDb21wYXJhYmxlPHN0cmluZz57XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHI6IHN0cmluZykge1xuICAgIH1cblxuICAgIGNvbXBhcmVUbyhvdGhlcjogQ29tcGFyYWJsZTxzdHJpbmc+KTogbnVtYmVyIHtcbiAgICAgICAgaWYodGhpcy5zdHIgPCAob3RoZXIgYXMgSW5zdHJ1bWVudCkuc3RyKXtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RyID09PSAob3RoZXIgYXMgSW5zdHJ1bWVudCkuc3RyKXtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUFycmF5KC4uLnN0cmluZ3M6IHN0cmluZ1tdKTogSW5zdHJ1bWVudFtde1xuICAgICAgICBsZXQgYXJyYXk6IEluc3RydW1lbnRbXSA9IFtdO1xuICAgICAgICBmb3IobGV0IHN0ciBvZiBzdHJpbmdzKXtcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IEluc3RydW1lbnQoc3RyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGVzdEVtcHR5QXJyYXkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgRVhQRUNURUQ6IG51bWJlciA9IDA7XG4gICAgbGV0IGFjdHVhbDogbnVtYmVyID0gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaChbXSwgbmV3IEluc3RydW1lbnQoJ0FjY29yZGlvbicpKTtcbiAgICByZXR1cm4gRVhQRUNURUQgPT09IGFjdHVhbDtcbn1cblxuZnVuY3Rpb24gdGVzdEVsZW1lbnRJbkFycmF5TGVuZ3RoMSgpIHtcbiAgICBjb25zdCBFWFBFQ1RFRDogbnVtYmVyID0gMTtcbiAgICBsZXQgYWN0dWFsOiBudW1iZXIgPSBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoKFtuZXcgSW5zdHJ1bWVudCgnQWNjb3JkaW9uJyldLCBuZXcgSW5zdHJ1bWVudCgnQWNjb3JkaW9uJykpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudE5vdEluQXJyYXlMZW5ndGgxKCkge1xuICAgIGNvbnN0IEVYUEVDVEVEOiBudW1iZXIgPSAwO1xuICAgIGxldCBhY3R1YWw6IG51bWJlciA9IEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2goW25ldyBJbnN0cnVtZW50KCdBY2NvcmRpb24nKV0sIG5ldyBJbnN0cnVtZW50KCdCYXNzIGd1aXRhcicpKTtcbiAgICByZXR1cm4gRVhQRUNURUQgPT09IGFjdHVhbDtcbn1cblxuZnVuY3Rpb24gdGVzdEVsZW1lbnRJbkFycmF5UG9zaXRpb24xTGVuZ3RoNSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBFWFBFQ1RFRDogbnVtYmVyID0gMTtcbiAgICBsZXQgYXI6IEluc3RydW1lbnRbXSA9IEluc3RydW1lbnQuY3JlYXRlQXJyYXkoJ0N5bWJhbHMnLCAnRWxlY3RyaWMgR3VpdGFyJywgJ0hhcm1vbmljYScsICdNYW5kb2xpbicsICdVa3VsZWxlJyk7XG4gICAgbGV0IGFjdHVhbDogbnVtYmVyID0gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaChhciwgbmV3IEluc3RydW1lbnQoJ0N5bWJhbHMnKSk7XG4gICAgcmV0dXJuIEVYUEVDVEVEID09PSBhY3R1YWw7XG59XG5cbmZ1bmN0aW9uIHRlc3RFbGVtZW50SW5BcnJheVBvc2l0aW9uNUxlbmd0aDUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgRVhQRUNURUQ6IG51bWJlciA9IDU7XG4gICAgbGV0IGFyOiBJbnN0cnVtZW50W10gPSBJbnN0cnVtZW50LmNyZWF0ZUFycmF5KCdDeW1iYWxzJywgJ0VsZWN0cmljIEd1aXRhcicsICdIYXJtb25pY2EnLCAnTWFuZG9saW4nLCAnVWt1bGVsZScpO1xuICAgIGxldCBhY3R1YWw6IG51bWJlciA9IEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2goYXIsIG5ldyBJbnN0cnVtZW50KCdVa3VsZWxlJykpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudEluQXJyYXlQb3NpdGlvbjJMZW5ndGg1KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IEVYUEVDVEVEOiBudW1iZXIgPSAyO1xuICAgIGxldCBhcjogSW5zdHJ1bWVudFtdID0gSW5zdHJ1bWVudC5jcmVhdGVBcnJheSgnQ3ltYmFscycsICdFbGVjdHJpYyBHdWl0YXInLCAnSGFybW9uaWNhJywgJ01hbmRvbGluJywgJ1VrdWxlbGUnKTtcbiAgICBsZXQgYWN0dWFsOiBudW1iZXIgPSBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoKGFyLCBuZXcgSW5zdHJ1bWVudCgnRWxlY3RyaWMgR3VpdGFyJykpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudE5vdEluQXJyYXlMZW5ndGg1KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IEVYUEVDVEVEOiBudW1iZXIgPSAwO1xuICAgIGxldCBhcjogSW5zdHJ1bWVudFtdID0gSW5zdHJ1bWVudC5jcmVhdGVBcnJheSgnQ3ltYmFscycsICdFbGVjdHJpYyBHdWl0YXInLCAnSGFybW9uaWNhJywgJ01hbmRvbGluJywgJ1VrdWxlbGUnKTtcbiAgICBsZXQgYWN0dWFsOiBudW1iZXIgPSBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoKGFyLCBuZXcgSW5zdHJ1bWVudCgnQWNjb3JkaW9uJykpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXN0QmluYXJ5U2VhcmNoR2VuZXJpYy50cyIsImltcG9ydCB7IEJpbmFyeVNlYXJjaCB9IGZyb20gJy4vYmluYXJ5U2VhcmNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RJbnQoKXtcbiAgICBsZXQgdGVzdHM6IFNldDwoKSA9PiBib29sZWFuPiA9IG5ldyBTZXQoKTtcbiAgICB0ZXN0cy5hZGQodGVzdEVtcHR5SW50QXJyYXkpO1xuICAgIHRlc3RzLmFkZCh0ZXN0RWxlbWVudEluSW50QXJyYXlMZW5ndGgxKTtcbiAgICB0ZXN0cy5hZGQodGVzdEVsZW1lbnROb3RJbkludEFycmF5TGVuZ3RoMSk7XG4gICAgdGVzdHMuYWRkKHRlc3RFbGVtZW50SW5JbnRBcnJheVBvc2l0aW9uMUxlbmd0aDUpO1xuICAgIHRlc3RzLmFkZCh0ZXN0RWxlbWVudEluSW50QXJyYXlQb3NpdGlvbjVMZW5ndGg1KTtcbiAgICB0ZXN0cy5hZGQodGVzdEVsZW1lbnRJbkludEFycmF5UG9zaXRpb24zTGVuZ3RoNSk7XG4gICAgdGVzdHMuYWRkKHRlc3RFbGVtZW50Tm90SW5JbnRBcnJheUxlbmd0aDUpO1xuXG4gICAgdGVzdHMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZm4ubmFtZSArICc6ICcgKyAoZm4oKSA/ICdzdWNjZXNzJyA6ICdmYWlsZWQnKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0ZXN0RW1wdHlJbnRBcnJheSgpe1xuICAgIGNvbnN0IEVYUEVDVEVEOiBudW1iZXIgPSAwO1xuICAgIGxldCBhY3R1YWw6IG51bWJlciA9IEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2hJbnQoW10sIDEpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudEluSW50QXJyYXlMZW5ndGgxKCl7XG4gICAgY29uc3QgRVhQRUNURUQ6IG51bWJlciA9IDE7XG4gICAgbGV0IGFjdHVhbDogbnVtYmVyID0gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludChbMV0sIDEpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudE5vdEluSW50QXJyYXlMZW5ndGgxKCl7XG4gICAgY29uc3QgRVhQRUNURUQ6IG51bWJlciA9IDA7XG4gICAgbGV0IGFjdHVhbDogbnVtYmVyID0gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludChbMV0sIDIpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5mdW5jdGlvbiB0ZXN0RWxlbWVudEluSW50QXJyYXlQb3NpdGlvbjFMZW5ndGg1KCl7XG4gICAgY29uc3QgRVhQRUNURUQ6IG51bWJlciA9IDE7XG4gICAgbGV0IGFjdHVhbDogbnVtYmVyID0gQmluYXJ5U2VhcmNoLmJpbmFyeVNlYXJjaEludChbMywgNSwgOCwgMTMsIDIxXSwgMyk7XG4gICAgcmV0dXJuIEVYUEVDVEVEID09PSBhY3R1YWw7XG59XG5cbmZ1bmN0aW9uIHRlc3RFbGVtZW50SW5JbnRBcnJheVBvc2l0aW9uNUxlbmd0aDUoKXtcbiAgICBjb25zdCBFWFBFQ1RFRDogbnVtYmVyID0gNTtcbiAgICBsZXQgYWN0dWFsOiBudW1iZXIgPSBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoSW50KFszLCA1LCA4LCAxMywgMjFdLCAyMSk7XG4gICAgcmV0dXJuIEVYUEVDVEVEID09PSBhY3R1YWw7XG59XG5cbmZ1bmN0aW9uIHRlc3RFbGVtZW50SW5JbnRBcnJheVBvc2l0aW9uM0xlbmd0aDUoKXtcbiAgICBjb25zdCBFWFBFQ1RFRDogbnVtYmVyID0gMztcbiAgICBsZXQgYWN0dWFsOiBudW1iZXIgPSBCaW5hcnlTZWFyY2guYmluYXJ5U2VhcmNoSW50KFszLCA1LCA4LCAxMywgMjFdLCA4KTtcbiAgICByZXR1cm4gRVhQRUNURUQgPT09IGFjdHVhbDtcbn1cblxuZnVuY3Rpb24gdGVzdEVsZW1lbnROb3RJbkludEFycmF5TGVuZ3RoNSgpe1xuICAgIGNvbnN0IEVYUEVDVEVEOiBudW1iZXIgPSAwO1xuICAgIGxldCBhY3R1YWw6IG51bWJlciA9IEJpbmFyeVNlYXJjaC5iaW5hcnlTZWFyY2hJbnQoWzMsIDUsIDgsIDEzLCAyMV0sIDEpO1xuICAgIHJldHVybiBFWFBFQ1RFRCA9PT0gYWN0dWFsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXN0QmluYXJ5U2VhcmNoSW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==