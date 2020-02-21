import { makeRoundedPercentage } from "../src/thing";
import * as fc from "fast-check";

describe("properties", () => {
    it("should be at most 5 characters long", () => {
        fc.assert(
            fc.property(fc.float(0, 100), (n: number) => {
                const result: string = makeRoundedPercentage(n);
                expect(result.length).toBeLessThanOrEqual(5);
            })
        );
    });

    it("should start with between 1 and 3 digits, followed by an optional dot, followed by an optional digit, and end with a % character", () => {
        fc.assert(
            fc.property(fc.float(0, 100), (n: number) => {
                const result: string = makeRoundedPercentage(n);
                expect(result).toMatch(/^[0-9]{1,3}[\.]?[0-9]?%$/);
            })
        );
    });

    it("should return a value within 0.05 of the input ", () => {
        fc.assert(
            fc.property(fc.float(0, 100), (n: number) => {
                const result: string = makeRoundedPercentage(n);
                const numericComponent: number = Number(result.slice(0,-1));
                expect(Math.abs(numericComponent - n)).toBeLessThanOrEqual(0.05);
            })
        );
    });

});
