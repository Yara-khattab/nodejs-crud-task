const readlineSync=require("readline-sync")
const validator=require("validator")
let people=[]
for(let i=0;i<10;i++){
console.log("\nPerson "+(i+1))
let id=""
while(!validator.isNumeric(id)){
id=readlineSync.question("Enter id: ")
if(!validator.isNumeric(id)){
console.log("Id must be numbers only")
}
}
let firstName=""
while(validator.isEmpty(firstName)||!validator.isAlpha(firstName)){
firstName=readlineSync.question("Enter first name: ")
if(validator.isEmpty(firstName)){
console.log("First name is required")
}
else if(!validator.isAlpha(firstName)){
console.log("First name must contain letters only")
}
}
let lastName=""
while(validator.isEmpty(lastName)||!validator.isAlpha(lastName)){
lastName=readlineSync.question("Enter last name: ")
if(validator.isEmpty(lastName)){
console.log("Last name is required")
}
else if(!validator.isAlpha(lastName)){
console.log("Last name must contain letters only")
}
}
let age=""
while(!validator.isNumeric(age)){
age=readlineSync.question("Enter age: ")
if(!validator.isNumeric(age)){
console.log("Age must be a number")
}
}
let city=""
while(validator.isEmpty(city)||validator.isNumeric(city)){
city=readlineSync.question("Enter city: ")
if(validator.isEmpty(city)){
console.log("City is required")
}
else if(validator.isNumeric(city)){
console.log("City must contain letters")
}
}
people.push({
id:id,
firstName:firstName,
lastName:lastName,
age:age,
city:city
})
}
while(true){
console.log("\n1- View all people")
console.log("2- View specific person")
console.log("3- Delete all people")
console.log("4- Delete specific person")
console.log("5- View full name and city")
console.log("6- Exit")
let choice=readlineSync.question("Enter your choice: ")
if(choice=="1"){
console.log(people)
}
else if(choice=="2"){
let id=readlineSync.question("Enter person id: ")
let person=people.find(p=>p.id==id)
if(person){
console.log(person)
}
else{
console.log("Person not found")
}
}
else if(choice=="3"){
people=[]
console.log("All people deleted")
}
else if(choice=="4"){
let id=readlineSync.question("Enter person id: ")
let found=false
for(let i=0;i<people.length;i++){
if(people[i].id==id){
people.splice(i,1)
found=true
break
}
}
if(found){
console.log("Person deleted")
}
else{
console.log("Person not found")
}
}
else if(choice=="5"){
for(let i=0;i<people.length;i++){
console.log("\nFull Name: "+people[i].firstName+" "+people[i].lastName)
console.log("City: "+people[i].city)
}
}
else if(choice=="6"){
console.log("Program ended")
break
}
else{
console.log("Invalid choice")
}
}

