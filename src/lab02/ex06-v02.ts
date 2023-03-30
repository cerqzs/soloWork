/**
 * Build a function F(x) that returns the following:
 *  x if x < 0
 *  0 if x = 0
 *  x^2 – 2x if x > 0
 *
 * Remarks: this function is quite difficult to test with mutating tests.
 * This is because it is not a simple expression. Furthermore, for every condition if xValue = 0,
 * and the if condition is swapped to true, the result will always be 0 and the test will pass.
 * While mutating the code on line 30, if value > 0 is mutated to value >= 0, the result will be 0 , because
 * zero is the multiplication absorving element and therefore tests will pass.
 *
 * On this second review of the exercise, it is possible to simplify the function.
 * By examining it, when xValue is <= 0, the result is always xValue.
 *
 * This does not fix the mutating code problem, but at least increases the mutation coverage, because we are
 * reducing the lines of code.
 *
 * This functions gets:
 * Code Coverage: 100%
 * Mutation Coverage: 75,00%
 *
 * @param xValue X value
 */
export function mathFunction(xValue: number): number {
    let calcFunc: number = 0;

    if (xValue <= 0) {
        calcFunc = xValue;
    } else if (xValue > 0) {
        //this is
        calcFunc = xValue ** 2 - 2 * xValue;
    }

    return calcFunc;
}