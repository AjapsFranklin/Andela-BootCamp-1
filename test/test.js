(function() {

    var myApp = require('../app/library.js');
    describe("Data types tests ", function() {
        describe("Case for some falsy values", function() {

            it("should return 'no value' for null", function() {
                expect(myApp.dataTypes(null)).toEqual('no value');
            });

            it("should return 'no value' for undefined", function() {
                expect(myApp.dataTypes(undefined)).toEqual('no value');
            });

        });

        describe("Case for booleans", function() {

            it("should return true for `true`", function() {
                expect(myApp.dataTypes(true)).toBe(true);
            });

            it("should return false for `false`", function() {
                expect(myApp.dataTypes(false)).toBe(false);
            });

        });

        describe("Case for Numbers", function() {

            it("should return 'less than 100' for 44", function() {
                expect(myApp.dataTypes(44)).toBe('less than 100');
            });

            it("should return 'more than 100' for 144", function() {
                expect(myApp.dataTypes(144)).toBe('more than 100');
            });

            it("should return 'equal to 100' for 100", function() {
                expect(myApp.dataTypes(100)).toBe('equal to 100');
            });


        });

        describe("Case for Strings", function() {

            it("should return the length of `tergiversate`", function() {
                expect(myApp.dataTypes('tergiversate')).toBe(12);
            });

            it("should return the length of an empty string", function() {
                expect(myApp.dataTypes('')).toBe(0);
            });

            it("should return the length of `555`", function() {
                expect(myApp.dataTypes('555')).toBe(3);
            });

        });

        describe("Case for arrays", function() {

            it("should return `2` for `[0, 1, 2]`", function() {
                expect(myApp.dataTypes([0, 1, 2])).toBe(2);
            });

            it("should return `undefined` for `[]`", function() {
                expect(myApp.dataTypes([])).not.toBeDefined();
            });
            it("should return `undefined` for `[4, 9]`", function() {
                expect(myApp.dataTypes([4, 9])).not.toBeDefined();
            });
        });

        describe("Case for Object", function() {

            it("should return `contains key: value pair` for Symbol()", function() {
                expect(myApp.dataTypes({ a: 5, m: 75, h: 76 })).toBe("contains key: value pair");
            });
        });

        describe("Case for functions", function() {
            it("should call the `callback` function with argument true, and return `called callback`", function() {
                var callback = function(arg) {
                    expect(arg).toBeTruthy();
                    if (arg === true) {
                        return 'called callback';
                    }
                };
                expect(myApp.dataTypes(callback)).toBe('called callback');
            });
        });
    });

    
    //TEST SUIT FOR PRIME NUMBERS FUNTION
        describe("Prime numbers tests ", function() {
        describe("Case for some invalid values", function() {

            it("should return 'invalid input' for input true ", function() {
                expect(myApp.myPrime(true)).toEqual('invalid input');
            });

            it("should return 'invalid input' for 'frank' ", function() {
                expect(myApp.myPrime('frank')).toEqual('invalid input');
            });

            it("should return 'invalid input' for [5,6] ", function() {
                expect(myApp.myPrime([5,6])).toEqual('invalid input');
            });

            it("should return 'invalid input' for 254.34 ", function() {
                expect(myApp.myPrime(254.34)).toEqual('invalid input');
            });

        });

        describe("Case for input less than 3", function() {

            it("should return 'input is 0' for 0", function() {
                expect(myApp.myPrime(0)).toBe("input is 0");
            });

            it("should return [] for 1", function() {
                expect(myApp.myPrime(1)).toEqual([]);
            });

            it("should return [2] for 2", function() {
                expect(myApp.myPrime(2)).toEqual([2]);
            });

        });
        
        describe("Case for valid input", function() {

            it("should return [2,3,5,7] for 10", function() {
                expect(myApp.myPrime(10)).toEqual([2,3,5,7]);
            });

            it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 51 ] for 51", function() {
                expect(myApp.myPrime(51)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 51 ]);
            });

            it("should return 'large Array' for 100000000", function() {
                expect(myApp.myPrime(100000000)).toBeDefined();
            });

            var arr = jasmine.arrayContaining([13, 541])
            it("should contain 'large Array' for 100000", function() {
                expect(myApp.myPrime(100000)).toEqual(arr);
            });


        });
    });
})();