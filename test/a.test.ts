import { makePercentageString } from "../src/thing";

describe("our rounding percentage function", () => {
    it("will return 0% when passed a 0", () => {
        const result = makePercentageString(0);
        expect(result).toBe("0%");
    });

    it("will return 1% when passed a 1", () => {
        const result = makePercentageString(1);
        expect(result).toBe("1%");
    });

    it("will return 1.5% when passed a 1.5", () => {
        const result = makePercentageString(1.5);
        expect(result).toBe("1.5%");
    });

    it("will return 1.5% when passed a 1.51", () => {
        const result = makePercentageString(1.51);
        expect(result).toBe("1.5%");
    });

    it("will return 1.5% when passed a 1.49", () => {
        const result = makePercentageString(1.49);
        expect(result).toBe("1.5%");
    });

    it("will return 1.5% when passed a 1.499", () => {
        const result = makePercentageString(1.499);
        expect(result).toBe("1.5%");
    });

    it("will return 5.7% when passed a 5.65", () => {
        const result = makePercentageString(5.65);
        expect(result).toBe("5.7%");
    });

});
