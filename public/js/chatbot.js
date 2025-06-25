
document.addEventListener('DOMContentLoaded', () => {
     const isLoggedIn = false;
     const socket = io();

    window.toggleChat = async function () {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch('/api/auth/check', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                }
            });

            const data = await res.json();

            if (!res.ok || !data.loggedIn) {
                window.location.href = '/login';
                return;
            }

            const box = document.getElementById('chatBox');

            box.style.display = box.style.display === 'none' ? 'block' : 'none';

           

        } catch (err) {
           console.error('Auth check failed:', err);
        }
    }

     // Send message to server
    window.sendMessage = function () {
        const input = document.getElementById('userInput');
        const message = input.value.trim();
        if (message === '') return;

        appendMessage('user', message);         // Display user message
        socket.emit('user message', message);   // Send to server
        input.value = '';                       // Clear input
    }

     // Receive bot message
    socket.on('bot message', (msg) => {
        appendMessage('bot', msg, msg.timestamp);              // Display bot response
    });

    socket.on('chat history', (messages) => {
        // console.log('chat history loaded');
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        messages.forEach((msg) => {
            const sender = msg.sender_type === 'Bot' ? 'bot' : 'user';
            appendMessage(sender, msg.message, msg.timestamp);
        });
    });

    function appendMessage(sender, msg, timestamp = null) {
        const chatMessages = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.className = `chat-message ${sender}`;
        
        //  const time = timestamp
        // ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        // : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const time = formatTimestamp(timestamp);

        if (sender === 'bot') {
            div.innerHTML = `
                <img src="img/default_user2.png">
                <strong>Bot</strong>: ${msg}
                <span class="time-left">${time}</span>
            `;
        } else {
            div.innerHTML = `
                <img src="img/default_user.png" class="right">                
                <strong>Member</strong>: ${msg}
                <span class="time-right">${time}</span>
            `;
        }
       
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }

    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };
        return date.toLocaleString('en-US', options);
    }

});