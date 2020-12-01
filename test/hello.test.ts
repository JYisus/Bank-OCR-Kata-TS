import { parseNumber } from "../src/hello_world";

describe("Bank OCR", ()=>{
    it("parses a number from card format to string", () => {
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

        expect(parseNumber(numberOne)).toBe("1");
        expect(parseNumber(numberTwo)).toBe("2");
        expect(parseNumber(numberThree)).toBe("3");
        expect(parseNumber(numberFour)).toBe("4");
        expect(parseNumber(numberFive)).toBe("5");
        expect(parseNumber(numberSix)).toBe("6");
        expect(parseNumber(numberSeven)).toBe("7");
        expect(parseNumber(numberEight)).toBe("8");
        expect(parseNumber(numberNine)).toBe("9");
        expect(parseNumber(numberZero)).toBe("0");
    })
})