const revenuesByDay = [
    {day: 01,revenue: 1834.85},
    {day: 02,revenue: 4325.94},
    {day: 03,revenue: 932.45},
    {day: 04,revenue: 2469.23},
    {day: 05,revenue: 9684.39},
    {day: 06,revenue: 2049.21},
    {day: 07,revenue: 2469.85},
    {day: 08,revenue: 9684.39},
    {day: 09,revenue: 111.23},
    {day: 10,revenue: 345.85},
    {day: 11,revenue: 9684.39},
    {day: 11,revenue: 453.24},
    {day: 12,revenue: 968.85},
    {day: 13,revenue: 0},
    {day: 14,revenue: 0},
    {day: 15,revenue: 294.39},
    {day: 16,revenue: 90.93},
];

function calculateMinValue() {
   return revenuesByDay.reduce(function(prev, curr) {
        return prev.revenue < curr.revenue ? prev : curr;
    });
};
function calculateMaxValue() {
   return revenuesByDay.reduce(function(prev, curr) {
        return prev.revenue > curr.revenue ? prev : curr;
    });
};

const countAboveAverage = () => {
    const average = revenuesByDay.filter((item) => item.revenue > 0).reduce((prev,curr) => prev+curr.revenue,0)/revenuesByDay.length;
    return revenuesByDay.filter(i => i.revenue > average).length;
}

console.log('min: ', calculateMinValue());
console.log('max: ', calculateMaxValue());
console.log('average: ', countAboveAverage());