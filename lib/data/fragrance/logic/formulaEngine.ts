import {percentageRules} from "./percentageRules"

export function calculateFormula(

oilMl:number,
style:keyof typeof percentageRules

){

const formula=
percentageRules[style]

return{

topMl:
Number(
(oilMl*formula.top)
.toFixed(1)
),

heartMl:
Number(
(oilMl*formula.heart)
.toFixed(1)
),

baseMl:
Number(
(oilMl*formula.base)
.toFixed(1)
)

}

}