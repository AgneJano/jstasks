let a = [4, 6, 10, 57, 98];
let b = [12, 7, 34, 77, 78];

function calculateRectangleArea(a, b) {
    let S = a * b;
    return S;
}

let area;

for (let i = 0; i < a.length; i++) {
    let possibleRectanlge = isTrue(a[i], b[i]);
    if (possibleRectanlge) {
        area = calculateRectangleArea(a[i], b[i]);
        console.log("Rectangle with borders " + a[i] + " and " + b[i] + " is " + area)
    } else {
        console.log("Not possible rectangle with width " + a[i] + " and length " + b[i] + ", beacause width > length.")
    }
}

function isTrue(a,b){
    return (a < b);
}
