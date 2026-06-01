export const percentageRules={

fresh:{
top:0.35,
heart:0.45,
base:0.20
},

luxury:{
top:0.25,
heart:0.50,
base:0.25
},

oriental:{
top:0.20,
heart:0.40,
base:0.40
},

woody:{
top:0.20,
heart:0.35,
base:0.45
},

floral:{
top:0.25,
heart:0.55,
base:0.20
},

balanced:{
top:0.30,
heart:0.40,
base:0.30
}

}

export type FormulaStyle=
keyof typeof percentageRules