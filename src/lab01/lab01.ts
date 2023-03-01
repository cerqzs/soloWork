export function calculateGenderPercentage(boys: number, girls: number): [number, number] {

    let total = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let boysPercentage = boys / total;
    let girlsPercentage = girls / total;

    return [boysPercentage, girlsPercentage];
}
