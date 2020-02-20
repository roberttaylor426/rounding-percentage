function makePercentageString(floatingPointNumber:number) {
    const roundedFloatingPointNumber = floatingPointNumber.toFixed(1);
    const trimmedRoundedFloatingPointNumber = roundedFloatingPointNumber.replace(".0", "");
    return `${trimmedRoundedFloatingPointNumber}%`;
}
export { makePercentageString }
