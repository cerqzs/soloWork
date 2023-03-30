import {greaterThan, lessOrEqualThan, mathFunction} from "../../lab02/ex06-v06";

describe('Special cases for testing mathFunction', () => {
    test('ensure -1 is returned when xValue is -1', () => {
        //Arrange
        let inputValue: number = -1;
        let expectedValue: number = -1;
        let returnValue: number = 0;

        //Act
        returnValue = mathFunction(inputValue);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })

    test('ensure 0 is returned when xValue is 0', () => {
        //Arrange
        let inputValue: number = 0;
        let expectedValue: number = 0;
        let returnValue: number = 0;

        //Act
        returnValue = mathFunction(inputValue);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })

    /**
     * Two will cause the function to return 0 (another corner case)
     */
    test('ensure 0 is returned when xValue is 2', () => {
        //Arrange
        let inputValue: number = 2;
        let expectedValue: number = 0;
        let returnValue: number = 0;

        //Act
        returnValue = mathFunction(inputValue);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })

    /**
     * One will cause the function to return -1 (another corner case)
     */
    test('ensure -1 is returned when xValue is 1', () => {
        //Arrange
        let inputValue: number = 1;
        let expectedValue: number = -1;
        let returnValue: number = 0;

        //Act
        returnValue = mathFunction(inputValue);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })

    /**
     * Test any other number
     */
    test('ensure 15 is returned when xValue is 5', () => {
        //Arrange
        let inputValue: number = 5;
        let expectedValue: number = 15;
        let returnValue: number = 0;

        //Act
        returnValue = mathFunction(inputValue);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
});

describe('test lessOrEqualThan auxiliar function', () => {
    test('ensure -1 is lessOrEqualThan 0 returns true ', () => {
        //Arrange
        let inputValue: number = -1;
        let inputThreshold: number = 0;
        let expectedValue: boolean = true;
        let returnValue: boolean = false;

        //Act
        returnValue = lessOrEqualThan(inputValue, inputThreshold);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
    test('ensure 0 is lessOrEqualThan 0 returns true ', () => {
        //Arrange
        let inputValue: number = 0;
        let inputThreshold: number = 0;
        let expectedValue: boolean = true;
        let returnValue: boolean = false;

        //Act
        returnValue = lessOrEqualThan(inputValue, inputThreshold);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
    test('ensure 1 is lessOrEqualThan 0 returns false ', () => {
        //Arrange
        let inputValue: number = 1;
        let inputThreshold: number = 0;
        let expectedValue: boolean = false;
        let returnValue: boolean = true;

        //Act
        returnValue = lessOrEqualThan(inputValue, inputThreshold);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
});

describe('test greaterThan auxiliar function', () => {
    test('ensure 1 is greaterThan 0 returns true ', () => {
        //Arrange
        let inputValue: number = 1;
        let inputThreshold: number = 0;
        let expectedValue: boolean = true;
        let returnValue: boolean = false;

        //Act
        returnValue = greaterThan(inputValue, inputThreshold);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
    test('ensure 0 is not greaterThan 0 returns false ', () => {
        //Arrange
        let inputValue: number = 0;
        let inputThreshold: number = 0;
        let expectedValue: boolean = false;
        let returnValue: boolean = true;

        //Act
        returnValue = greaterThan(inputValue, inputThreshold);

        //Assert
        expect(returnValue).toBe(expectedValue);
    })
});
