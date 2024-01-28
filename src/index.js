//=========//

let apiKey = "";
document.querySelector("#api-key-form").addEventListener("submit", (event) => {
  event.preventDefault();
  apiKey = document.getElementById("apikey").value;
  document.querySelector("#api-key-form").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  console.log(apiKey);
});
const ChatGPT = () => {
  let prompt = document.getElementById("usertext").value;
  try {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",

        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const chatResponse = data.choices[0].message.content;
        document.querySelector(
          ".displayResponse"
        ).innerHTML += `<span>You:<span>${prompt}</span></span>
          <p><img src="./src/chatgpt.png" alt="chatgpt">${chatResponse}</p><br>`;
      });
  } catch (error) {
    console.error("Error:", error);
  }
};

document.querySelector("#input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".chat-content").style.display = "none";
  ChatGPT();
  document.querySelector("#usertext").value = "";
});
