/**This program is to find the area of the triangle with three sides, and if any onde of the sides is negative,
 * then print InvalidTriangleException. And if we are not able to form a triangle with the sides, then also
 * print InvalidTriangleException, else print area of the triangle.
 */

const triangleArea = function (side1, side2, side3) {
    var areaTri;
    try {
        var perimeter = (side1 + side2 + side3) / 2;
        var addedValue =
            perimeter *
            (perimeter - side1) *
            (perimeter - side2) *
            (perimeter - side3);
        if (Math.sign(side1) === -1 || Math.sign(side2) === -1 || Math.sign(side3) === -1) {
            throw new Error('InValidTriangleException');
        } else if (Math.sign(perimeter) === 0 || Math.sign(perimeter) === -1 || addedValue === 0) {
            throw new Error("InValidTriangleException");
        } else {
            areaTri = Math.sqrt(addedValue);
        }
    } catch (err) {
        console.log(err.message);
    }
    return areaTri;
}