/**
 * Build a function F(x) that returns the following:
 *  x if x < 0
 *  0 if x = 0
 *  x^2 – 2x if x > 0
 *
 * Remarks: this function is quite difficult to test with mutating tests.
 * This is because it is not a simple expression. Furthermore, for every condition if xValue = 0,
 * and the if condition is swapped to true, the result will always be 0 and the test will pass.
 *
 * On this fift review of the exercise, lets just add tests to the new functions.
 *
 * This even decreases the mutation coverage. because now we have more lines of code and more
 * issues on the new functions. Sometimes this is not possible, as the functions may not be exportable.
 *
 * Adding new tests, eliminated the mutation coverage problem on the new functions, increasing mutation coverage.
 *
 * Yet, there are still issues. Might we have forgotten a simple rule?
 *
 * These functions get:
 * Code Coverage: 100%
 * Mutation Coverage: 93,75%
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

export function lessOrEqualThan(value: number, threshold: number): boolean {
    return value <= threshold;
}

export function greaterThan(value: number, threshold: number): boolean {
    return value > threshold;
}
