import {

fragranceAccords

}

from "../fragranceAccords"

export function suggestNotes(

selectedNotes:string[]

){

const suggestions:string[]=[]

selectedNotes.forEach(note=>{

const related=

fragranceAccords[note]
||

[]

suggestions.push(
...related
)

})


const unique=[

...new Set(
suggestions
)

]


return unique.filter(

note=>

!selectedNotes.includes(
note
)

)

.slice(
0,
10
)

}