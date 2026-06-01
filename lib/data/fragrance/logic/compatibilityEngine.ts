import {
fragranceAccords
}
from "../fragranceAccords"

export function getCompatibleNotes(

note:string

){

return(

fragranceAccords[note]
||

[]

)

}


export function countMatches(

selectedNotes:string[]

){

let matches=0

selectedNotes.forEach(note=>{

const compatible=

fragranceAccords[note]
||

[]

selectedNotes.forEach(second=>{

if(

note!==second &&
compatible.includes(second)

){

matches++

}

})

})

return matches

}