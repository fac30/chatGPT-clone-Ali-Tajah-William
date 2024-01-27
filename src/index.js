//global variable to store API password//
let masterKey = ""

// variable to store API key//

function acceptPassword(){
    let tempPw = document.getElementById('apikey').value
    masterKey = tempPw
    // console.log('action completed')
    // console.log(masterKey)
    
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
    // console.log('user question asked')
}

 
// DOM to stop user submit button from reloading page//
document.getElementById("user_submit").addEventListener('click', 
(event) =>{
    event.preventDefault()
} ) 

// Promises section //

const chatGPT = (key,callback) => {

    if (masterKey === '') {
        return console.log('Password Error')
    }
    if (userInput === '' ){
        return console.log('user input error')
    } else{
    fetch("https://api.openai.com/v1/chat/completions" ,
   { method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${masterKey}`,
    },
    body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: userInput }]
    })})

.then(result => {
    if(!result.ok){ throw new Error(result.status);
} return result.json()})
.then(data => console.log(data))
.catch((error) => console.error(error))
// .then(result => console.log('api info changed to json'))

};

};
