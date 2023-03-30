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
 * On this third review of the exercise, lets extract the condition (xValue <= 0) from line 27 to a function.
 *
 * Again, this does not fix the mutating code problem, but at least increases the mutation coverage.
 * Yet, some mutation issues appear on line 37.
 *
 * These functions get:
 * Code Coverage: 100%
 * Mutation Coverage: 78,57%
 *
 * @param xValue X value
 */
export function mathFunction(xValue: number): number {
    let calcFunc: number = 0;

    if (lessOrEqualThan(xValue, 0)) {
        calcFunc = xValue;
    } else if (xValue > 0) {
        calcFunc = xValue ** 2 - 2 * xValue;
    }

    return calcFunc;
}

function lessOrEqualThan(value: number, threshold: number): boolean {
    return value <= threshold;
}