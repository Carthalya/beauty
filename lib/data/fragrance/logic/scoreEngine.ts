import {
countMatches
}
from "./compatibilityEngine"

export function calculateScore(

selectedNotes:string[],
noteCount:number

){

let score=70

const matches=

countMatches(
selectedNotes
)

score+=matches*3


if(noteCount>10){

score-=15

}

if(noteCount<3){

score-=10

}


return Math.min(

100,

Math.max(
0,
score
)

)

}