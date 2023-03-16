//scope
let an = 10;
function outer() {
  let bn = 20;
  function inner() {
    let cn = 30;
    console.log(an, bn, cn);
  }
  inner();
}
outer();
///closure
function out() {
  let counter = 0;
  function inn() {
    counter++;
    console.log(counter);
  }
  return inn;
}
const fn = out();
fn();
fn();
