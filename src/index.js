// Promises section //

const ChatGPT = (key,callback) => {
    fetch("https://api.openai.com/v1/chat/completions");
    ChatGPT
    .then(result => result.json())
    .then(result => console.log('Key added'))
    .then(data => {
        callback(data)
    })
    .catch((error) => console.log(error));

};

//global variable to store API password//
var masterKey 

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


 