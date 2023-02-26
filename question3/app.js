/**
 * Obs: o código desconsidera dias com 
 * zero faturamento apenas no calculo da média
 */

const billingData = require('./data.json');

let lowerBilling = billingData[0]
let higherBilling = billingData[0]
let billedDays = 0
let totalBilled = 0

function calculateHigherAverageRevenue(billingData){
    let higherAverageRevenueDays = 0
    media = totalBilled / billedDays
    billingData.forEach(data => {
        if(data.valor > media){
            higherAverageRevenueDays++
        }
    })
    return higherAverageRevenueDays
}

billingData.forEach(billingEntry =>{

    if(billingEntry.valor){
        totalBilled += billingEntry.valor
        billedDays++
    }

    if(billingEntry.valor > higherBilling.valor){
        higherBilling = billingEntry
    }

    if(billingEntry.valor <= lowerBilling.valor){
        lowerBilling = billingEntry
    }
});

console.log("• O menor valor de faturamento ocorrido em um dia do mês: ", lowerBilling)
console.log("• O maior valor de faturamento ocorrido em um dia do mês: ", higherBilling)
console.log("• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ", calculateHigherAverageRevenue(billingData))





