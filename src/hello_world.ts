const numberOne =   "   \n" +
                    "  |\n" +
                          "  |\n"
    
const numberTwo = " _ \n" +
                  " _|\n" +
                  "|_ \n"

const numberThree = " _ \n" +
                    " _|\n" +
                    " _|\n"

const numberFour =  "   \n" +
                    "|_|\n" +
                    "  |\n"

const numberFive =  " _ \n" +
                    "|_ \n" +
                    " _|\n"

 const numberSix =   " _ \n" +
                     "|_ \n" +
                     "|_|\n"

 const numberSeven = " _ \n" +
                     "  |\n" +
                     "  |\n"

const numberEight = " _ \n" +
                    "|_|\n" +
                    "|_|\n"

const numberNine =  " _ \n" +
                    "|_|\n" +
                    "  |\n" 

const numberZero =  " _ \n" +
                    "| |\n" +
                    "|_|\n" 

const numbersRepresentation = new Map([
    [numberOne, "1"],
    [numberTwo, "2"],
    [numberThree, "3"],
    [numberFour, "4"],
    [numberFive, "5"],
    [numberSix, "6"],
    [numberSeven, "7"],
    [numberEight, "8"],
    [numberNine, "9"],
    [numberZero, "0"],
    
])

export function parseIndividualNumber(stringNumber: string): string {
    return numbersRepresentation.get(stringNumber) || "?"
}