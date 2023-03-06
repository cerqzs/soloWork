/**
 * Lab 01
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Boys and girls' percentage.
 */
export function calculateGenderPercentage(boys: number, girls: number): [number, number] {

    let total = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let boysPercentage = boys / total;
    let girlsPercentage = girls / total;

    return [boysPercentage, girlsPercentage];
}


/**
 * Lab 01
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Boys' percentage.
 */
export function calculateBoysPercentage(boys: number, girls: number): number {

    let total = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let boysPercentage = boys / total;

    return boysPercentage;
}

/**
 * Lab 01
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Girls' percentage.
 */
export function calculateGirlsPercentage(boys: number, girls: number): number {

    let total = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let girlsPercentage = girls / total;

    return girlsPercentage;
}