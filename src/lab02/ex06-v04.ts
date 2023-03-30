/**
 * Build a function F(x) that returns the following:
 *  x if x < 0
 *  0 if x = 0
 *  x^2 – 2x if x > 0
 *
 * Remarks: this function is quite difficult to test with mutating tests.
 * This is because it is not a simple expression. Furthermore, for every condition if xValue = 0,
 * and the if condition is swapped to true, the result will always be 0 and the test will pass.
 * While mutating the code on line 29, if value > 0 is mutated to value >= 0, the result will be 0 , because
 * zero is the multiplication absorving element and therefore tests will pass.
 *
 * On this fourth review of the exercise, lets extract the condition (xValue > 0) from line 28 to a function.
 *
 * This even decreases the mutation coverage. because now we have more lines of code and more
 * issues on the new functions.
 *
 * These functions get:
 * Code Coverage: 100%
 * Mutation Coverage: 75,00%
 *
 * @param xValue X value
 */
export function mathFunction(xValue: number): number {
    let calcFunc: number = 0;

    if (lessOrEqualThan(xValue, 0)) {
        calcFunc = xValue;
    } else if (greaterThan(xValue, 0)) {
        calcFunc = xValue ** 2 - 2 * xValue;
    }

    return calcFunc;
}

function lessOrEqualThan(value: number, threshold: number): boolean {
    return value <= threshold;
}

function greaterThan(value: number, threshold: number): boolean {
    return value > threshold;
}
