// Other operators also turn a function into an expression. We meet these forms in
// older or minified code.
!function () { console.log('IIFE executed!'); }();
~function () { console.log('IIFE executed!'); }();
-function () { console.log('IIFE executed!'); }();
+function () { console.log('IIFE executed!'); }();

var f = function () { console.log('IIFE executed!'); }();
true && function () { console.log('IIFE executed!'); }();
0, function () { console.log('IIFE executed!'); }();
void function () { console.log('IIFE executed!'); }();
// IIFE executed! (printed 8 times)
