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
 * Why are there two cascading if statements? Couldn't we simplify it by an If/Else? Let's change line 32.
 *
 * Guess what, mutation coverage has just reached 100%. This just shows that a proper examination of some
 * code might lead to better programming by (simply) simplifying it.
 *
 * These functions get:
 * Code Coverage: 100%
 * Mutation Coverage: 100%
 *
 * @param xValue X value
 */
export function mathFunction(xValue: number): number {
    let calcFunc: number = 0;

    if (lessOrEqualThan(xValue, 0)) {
        calcFunc = xValue;
    } else {
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
