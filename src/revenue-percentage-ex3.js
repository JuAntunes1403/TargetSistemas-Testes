let branches = [
    {state: 'SP', revenueValue: 67836.43},
    {state: 'RJ', revenueValue: 36678.66},
    {state: 'MG', revenueValue: 29229.88},
    {state: 'ES', revenueValue: 27165.48},
    {state: 'Outros', revenueValue: 19849.53}
];

const sumAllRevenues = branches.reduce((prev, curr) => prev+curr.revenueValue, 0);
const getPercentage = (percentage, total) => {
    return (percentage/total) * 100;
}

branches.forEach(element => element.percentage = (getPercentage(element.revenueValue, sumAllRevenues).toFixed(2)) + '%');

console.log('branches: ', branches);