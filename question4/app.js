const billingData = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// captures the values ​​of the billingData object and iterates with reduce
const totalBilling = Object.values(billingData).reduce((state, value) => state + value);

const billingPercentages = {};

for (const state in billingData) {
    const billingValue = billingData[state];
    const percentage = (billingValue / totalBilling) * 100;
    billingPercentages[state] = percentage.toFixed(2);
}

console.log("Percentual de representação que cada estado: \n", billingPercentages);