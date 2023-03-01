import {calculateGenderPercentage} from '../../src/lab01/lab01';

describe('Testing the Calculate Gender Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededBoysPercentage: number = 0.4;
        let expectededGirlsPercentage: number = 0.6;

        //Act
        let [boysPercentage, girlsPercentage] = calculateGenderPercentage(6, 9);

        //Assert
        expect(boysPercentage).toBe(expectededBoysPercentage);
        expect(girlsPercentage).toBe(expectededGirlsPercentage);
        expect(boysPercentage + girlsPercentage).toBe(1);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});