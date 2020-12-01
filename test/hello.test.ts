import { parseIndividualNumber, extractNumberInPosition, parseNumbers} from "../src/hello_world";

const numberOne = "   \n" +
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
describe("Bank OCR", ()=>{
    it("parses a number from card format to string", () => {
        expect(parseIndividualNumber(numberOne)).toBe("1");
        expect(parseIndividualNumber(numberTwo)).toBe("2");
        expect(parseIndividualNumber(numberThree)).toBe("3");
        expect(parseIndividualNumber(numberFour)).toBe("4");
        expect(parseIndividualNumber(numberFive)).toBe("5");
        expect(parseIndividualNumber(numberSix)).toBe("6");
        expect(parseIndividualNumber(numberSeven)).toBe("7");
        expect(parseIndividualNumber(numberEight)).toBe("8");
        expect(parseIndividualNumber(numberNine)).toBe("9");
        expect(parseIndividualNumber(numberZero)).toBe("0");
    })

    it("extract the first number of a set of codified numbers", () => {
        const numberTen =   "    _ \n" +
                            "  || |\n" +
                            "  ||_|\n" 

        expect(extractNumberInPosition(numberTen,0)).toBe(numberOne)
    })

    it("extract the second number of a set of codified numbers", () => {
        const numberTen =   "    _ \n" +
                            "  || |\n" +
                            "  ||_|\n" 

        expect(extractNumberInPosition(numberTen, 1)).toBe(numberZero)
    })

    it("parses both numbers of a pair of codified numbers", () => {
        const numberTen =   "    _ \n" +
                            "  || |\n" +
                            "  ||_|\n" 

        expect(parseNumbers(numberTen)).toBe("10")
    })

    it("parses a set of numbers of a pair of codified numbers", () => {
        const numberOneHundrerThree =   "    _  _ \n" +
                                        "  || | _|\n" +
                                        "  ||_| _|\n" 

        expect(parseNumbers(numberOneHundrerThree)).toBe("103")
    })



})