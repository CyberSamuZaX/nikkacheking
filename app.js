async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById('chatBox');
    
    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    // Clear the input field
    document.getElementById('userInput').value = "";

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Call API to get chatbot response
    const response = await fetch(`https://nikka-api.vercel.app/ai/gpt?q=${encodeURIComponent(userInput)}&apiKey=nikka`);
    const data = await response.json();

    // Display bot message
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerText = data.response || "සමාවෙන්න, මට පිළිතුරක් ලබා ගැනීමට අමතර උදව්වක් අවශ්‍යයි.";
    chatBox.appendChild(botMessage);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
