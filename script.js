document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            appendMessage("You", message);
            messageInput.value = "";
            scrollToBottom();
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `
            <div><strong>${sender}:</strong> ${message}</div>
            <div class="message-actions">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        chatMessages.appendChild(messageElement);

        const editButton = messageElement.querySelector(".edit-button");
        const deleteButton = messageElement.querySelector(".delete-button");

        editButton.addEventListener("click", function() {
            const newMessage = prompt("Edit your message:", message);
            if (newMessage !== null && newMessage.trim() !== "") {
                messageElement.querySelector("div").textContent = `${sender}: ${newMessage}`;
            }
        });

        deleteButton.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this message?")) {
                messageElement.remove();
            }
        });
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
