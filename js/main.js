//////////variables and opertors//////////////

var x;
let y;
const z = 15;
x = 10;
y = x;
console.log(x, " ", y, " ", z);
var name = "john";
var lastname = "dou";
var a = "20";
var b = "10";
console.log(name + x);
console.log(lastname);
console.log(a + b);
console.log(parseInt(a) + parseInt(b));
console.log(parseInt(a) - parseInt(b));
console.log(parseInt(a) * parseInt(b));
console.log(parseInt(a) / parseInt(b));

x++;
x = x + 1;
x--;
x = x - 1;
console.log(x);
console.log(x % 3);
x += x;
x = x + x;
console.log(x);

/////////////datatype//////////////

var xx = 123;
var yy = "hello";
var zz = true; //true.false
var ar = ["red", "green", "blue"];
console.log(typeof xx);
console.log(typeof yy);
console.log(zz, typeof zz);
console.log(typeof ar);
console.log(ar[2]);
console.log(ar.length);
ar.push("black");
console.log(ar);
var obj = {
  name: "john",
  lastname: "dou"
};
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
obj.age = 20;
var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);
console.log(un == nu);
console.log(un === nu);

/////////////////function////////////////

function plus(x, y) {
  return x + y;
}
var r = plus(10, 20);
console.log("result", r);
function log(data) {
  console.log(data);
  return;
}
function plus2(x, y) {
  return plus(x, y);
}
function area(w, h) {
  return w * h;
}
function area2(w, h, t) {
  if (t === "square") return w * h;
  else return Math.PI * w * w;
}
log("test");
log(plus2(3, 7));
log(area(10, 40));
log(area2(10, 10, "square"));

//////////////////////array//////////////////

var myarr = ["string", 123, { text: "test" }, ["test"], true];
var myarr2 = new Array("string", 123, ["test"]);
console.log(myarr2);
console.log(myarr[0]);
for (let i = 0; 1 < myarr.length; i++) {
  console.log("index: " + i, myarr[i]);
}