"use strict";
// data:
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial amount must be at least 0';
    }
    if (duration <= 0) {
        return 'No valid amount of years for calculation';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least 0';
    }
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    let annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContribution,
        });
    }
    return annualResults;
} // => result []
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('------------------------------------------');
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 5000,
    expectedReturn: 0.08,
    duration: 10,
};
const result = calculateInvestment(investmentData);
printResults(result);
//# sourceMappingURL=calculator.js.map