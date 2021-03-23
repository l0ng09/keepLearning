console.log("global begin");
setTimeout(function timer1() {
  console.log("timer1 invoke");
}, 1800);

setTimeout(function timer2() {
  console.log("timer2 invoke");
  setTimeout(function inner() {
    console.log("inner invoke");
  }, 700);
}, 1000);

console.log("global end");

/**
 * global begin
 * global end
 * timer2 invoke
 * timer1 invoke
 * inner invoke
 */
