console.log("Hellooo World!")

const strawberryMilkshake="tastee"
//constant variable = can't be changed (immutable)
console.log("milkshakes are",strawberryMilkshake)

let myAge=23
myAge = myAge + 6

let camsAge = 50
camsAge = camsAge - 1

console.log("I hate that I am",myAge)

console.log("camsAge",camsAge)

const shoppingList = ["eggs","milk","rice","flour","chocolate"]
//curly bracket is object
const steven = {
    hairColor: "black",
    age: 14,
    gemFriends: ["garnet","pearl","amethyst"],
    mom: {
        name: "rose",
        hairColor: "pink",
    }
}
console.log(steven)


if(camsAge == 1000){
    console.log("This is weird")
}

if(camsAge===1000){
    console.log("i think this is wright")
} else if(myAge===46){
    console.log("it's friday")
} else{
    console.log("loadshedding sucks")
} 

// if cams age is not equal to
if(camsAge !== 1000) {
    console.log("cam is either really old or really young")
}

if(camsAge < 1000) {
    console.log("cam is really young")
}

if(camsAge <= 1000) {
    console.log("cam is really young")
}

if(camsAge > 1000) {
    console.log("cam is really old")
}

if(camsAge >= 1000) {
    console.log("cam is really old")
}

// if both conditions are met at the same time
if(camsAge === 49 && myAge === 29){
    console.log("Heloo")
}

// if one or the other condition is met
if(camsAge === 49 || myAge === 29){
    console.log("Heloo")
}

// Syntax





if(myAge===29){
    console.log("it's friday yay")
} 

//boolean: two values; true or false 

//when passing boolean directly to if statement; no condition logic is needed: if true - logged; if false - skipped
const anything = true

if(anything){
    console.log("ITS ANYTHING")
}else{
    console.log("THE FUCK")
}

const checkCamsAge = camsAge === 50

console.log("checkCamsAge: ", checkCamsAge)


//null: nothing/empty; undefined: unknown 
let iDontKnow

console.log("iDontKnow is",iDontKnow)

let iDontCare = null 


console.log("iDontCare",iDontCare)

// normal function or formally a named function
function handleSubmit(thisIsAProp){
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("submitted!")
    console.log("one plus one!", 1+1)
    console.log("thisIsAProp: ", thisIsAProp)
    // alert("SUBMITTED")
}

//console.log("thisIsAProp: ", thisIsAProp)



handleSubmit("This is a prop")


// arrow function
// const thisIsAFunction = () => {

// }