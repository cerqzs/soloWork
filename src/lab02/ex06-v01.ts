/**
 * Build a function F(x) that returns the following:
 *  x if x < 0
 *  0 if x = 0
 *  x^2 – 2x if x > 0
 *
 * Remarks: this function is quite difficult to test with mutating tests.
 * This is because it is not a simple expression. Furthermore, for every condition if xValue = 0,
 * and the if condition is swapped to true, the result will always be 0 and the test will pass.
 * While mutating the code on line 26, if value > 0 is mutated to value >= 0, the result will be 0 , because
 * zero is the multiplication absorving element and therefore tests will pass.
 *
 * This functions gets:
 * Code Coverage: 100%
 * Mutation Coverage: 68,75%
 *
 * @param xValue X value
 */
export function mathFunction(xValue: number): number {
    let calcFunc: number = 0;

    if (xValue < 0) {
        calcFunc = xValue;
    } else if (xValue == 0) {
        calcFunc = 0;
    } else if (xValue > 0) {
        //this is
        calcFunc = xValue ** 2 - 2 * xValue;
    }

    return calcFunc;
}