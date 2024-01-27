//global variable to store API password//
let masterKey = ""

// variable to store API key//

function acceptPassword(){
    let tempPw = document.getElementById('apikey').value
    masterKey = tempPw
    console.log('action completed')
    
}

// DOM to stop submit button from reloading page//
document.getElementById("submit_key").addEventListener('click', 
(event) =>{
    event.preventDefault()
} ) 

//capture user input from form//

let userInput = ""

function userTextWriter(){
    let userQuestion = document.getElementById('usertext').value
    userInput =  userQuestion
    console.log('user question asked')
}

 
// DOM to stop user submit button from reloading page//
document.getElementById("user_submit").addEventListener('click', 
(event) =>{
    event.preventDefault()
} ) 

// Promises section //

const chatGPT = (key,callback) => {

    if (userInput || masterKey === ''){
    console.log('password and/or input error')
}

    fetch("https://api.openai.com/v1/chat/completions")
        .then(result => result.json())
        .then(result => console.log('api info changed to json'))
        .then(data => {
        callback(data)
    })
    .catch((error) => console.log(error));
 

};


