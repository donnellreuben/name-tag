// grab DOM elements

// set event listeners
console.log('hello world!');
console.log('42', 42);


// variables
// variables allow us to reuse individual pieces of data 
const dogName = 'Kiwi';
console.log(`My dog's name is ${dogName}. ${dogName} is very cute. ${dogName} is 7 years old.`)


// functions
// allow us to reuse behavior or multiple lines of code
function sayHello(name) {
    console.log(`Hello ${name}!`);
    console.log('It is a very beautiful day today!');
    console.log('I hope you are well!');
}

sayHello('Justin');
sayHello('Nastasia');


// make a variable that contains a reference to the html element
// change the text content of that html element


// make a variable that references the update button
// listen for a click on that button
const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', ()=>{
    console.log('i am clicking on the button!!');

    const nameInput = document.getElementById('input');

    const nameELem = document.getElementById('name');
    nameELem.textContent = nameInput.value;
    
});