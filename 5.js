let a=1
let b=2
let c=3
let d=4

if (a > b && a > c && a < d) {
    console.log(a);
} else if (b > a && b > c && b < d) {
    console.log(b);
} else if (c > a && c > b && c < d) {
    console.log(c);
} else if (d > a && d > c && d < b) {
    console.log(d);
}