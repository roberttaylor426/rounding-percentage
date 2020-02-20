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
});
