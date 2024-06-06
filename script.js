document.addEventListener("DOMContentLoaded", function() {
    // DOM elements
    var chatContainer = document.getElementById("chat-container");
    var userInput = document.getElementById("user-input");
    var sendButton = document.getElementById("send-btn");





    // Sample questions and answers with tags
    var qaData = [
        { question: "লজিকের প্রোগ্রামসমূহ", tags: ["Logic programme","কি কি পড়ানো হয়"] , answer: " ✪ HSC Academic ✪ HSC Preparation   ✪ বিশ্ববিদ্যালয় ভর্তি প্রোগ্রাম  (বিজ্ঞান,মানবিক,ব্যবসায় শিক্ষা,বিভাগ পরিবর্তন) ✪ মেডিলজিক মেডিকেল ভর্তি প্রোগ্রাম (মেডিকেল+ভাসির্টি Combined Special Batch)  ✪ নার্সিং ভর্তি প্রোগ্রাম  (বিএসসি ইন নার্সিং , ডিপ্লোমা ইন নার্সিং , ডিপ্লোমা ইন মিডওয়াইফারি )" },
        { question: "লজিকের পরিচালক", tags: ["director","rafiqul islam","rofikul","rafikul","পরিচালক"] , answer: "MD. Rafiqul Islam ◑ B.Sc in CSE (HSTU - 1st Class 1st) ◑ M.Sc in CSE (RUET) ◑ Experience : 12 years +  ◑ Writer : Logic Math ◑ Subject : Math " },
        { question: "কোথায় অবস্থিত? ", tags: ["ঠিকানা", "কোথায়","কোন জায়গায়","শাখা কোথায়"] , answer: "ঠিকানা: ✪ শাখা -১: আমু কাউন্সিলর গলি, আয়ান প্যালেস,ফকিরপাড়া, দিনাজপুর ✪ শাখা- ২; মহিলা বহুমুখী শিক্ষাকেন্দ্র সংলগ্ন, বালুবাড়ি, দিনাজপুর" },
        { question: "বিজ্ঞান বিভাগের শিক্ষকবৃন্দ ", tags: ["science","science teachers" ,"teachers"] , answer: "➤ MD. Rafiqul Islam ◑ B.Sc in CSE (HSTU - 1st Class 1st) ◑ M.Sc in CSE (RUET) ◑ Experience : 12 years +  ◑ Writer : Logic Math ◑ Subject : Math ➤➤ Sinha Mohammad Riad ◑ B.Sc in EEE (BUET) ◑ Exp-10 years+ ◑ Mentor of 1-lakh+ ◑ Co-writer : Aspect Physics ◑ Subject: Physics  ➤➤➤ Shohanur Rahman Shohan ◑ B.Sc in Leather Engineering (DU) ◑ Exp-7 Years+ ◑ Mentor of 1 lakh+ ◑ Co-writer: Aspect Biology ◑ Subject: Biolog ➤➤➤➤ Sazzad Hossen Nacem ◑ Exp-6 Years+ ◑ Mentor of 1 lakh+ ◑ Writer Aspect Physics ◑ Subject: Physics ➤➤➤➤➤ Mofizul Islam Limon (DU) ◑ Writer: Logic Physics ◑ Subject Physics ➤➤➤➤➤➤ Shamim Hossain (BUTEX) ◑ Exp-8 Years+ Subject: Chemisty"},
        { question: "মেডি লজিকের শিক্ষকবৃন্দ", tags: ["medical","medilogy","biology","biology teachers","জীববিজ্ঞান"] , answer: "➤ Dr. Roni Mollah ◑ Sir Salimullah Medical College, Dhaka  ◑ Exp-8 Years + ◑ Mentor of- 1 lakh + ◑ Writer: Aspect Medical Chemistry ◑ Subject: Chemistry ➤➤ Dr. MD. Arshadul Haque ◑ Sir Salimullah Medical College, Dhaka ◑ Exp-6 Years + ◑  Mentor of-1 lakh + ◑  Subject: Biology ➤➤➤Dr. MD. Abdullah-Ar-Rafi ◑ Dhaka Medical College, Dhaka ◑ Exp-4 Years + ◑  Subject: Physics ➤➤➤➤ Dr. Imran ◑  Sir Salimullah Medical College, Dhaka ◑ Exp-10 Years +  ◑ Mentor of-1 lakh + ◑ Subject: Biology ➤➤➤➤➤ Rubina Yeasmin ◑  Dhaka Medical College, Dhaka ◑  Subject: Medi GK & Medi English" },
        { question: "মানবিক, ব্যবসায় শিক্ষা ও নার্সিং বিভাগের শিক্ষকবৃন্দ", tags: ["মানবিক","arts","Commerce","ব্যবসা শিক্ষা","নার্সিং","nursing"] , answer: "➤ জয়ন্ত কুমার রায় ◑ 35th BCS Cadre, শিক্ষক- ইংরেজি ➤➤ ফয়সাল আহম্মেদ তুর্য ◑ BBA, MBA (DU) ◑ লেখক: আপেষ্ট ইংরেজি, শিক্ষক - ইংরেজি ➤➤➤ আমিনুল ইসলাম মিলন ◑ MA in Bangla (DU) ◑ লেখক: আসপেক্ট বাংলা, শিক্ষক: বাংলা  ➤➤➤ সাদেকুল ইসলাম আর্গন (হাবিপ্রবি) ◑ শিক্ষক: সাধারণ জ্ঞান  ➤➤➤ লিটন শীল  ◑ MA in Bangla (DC), বাংলা ➤➤➤ দুলাল ইসলাম ◑ শিক্ষক - সাধারণ পণিত ও পদার্থবিজ্ঞান  ➤➤➤ ডাঃ আফসানা সিদ্দিকা ◑ । সাধারণ বিজ্ঞান ও বাংলা ➤➤➤ সোহাগ হোসেন আকাশ  ◑ শিক্ষক- রসায়ন ➤➤➤ সুজন ইসলাম (হাবিপ্রবি) ◑ হিসাববিজ্ঞান + ফিন্যান্স ও ব্যাংকিং ➤➤➤ রেজা চৌধুরী ◑ শিক্ষক ম্যানেজমেন্ট উৎপাদন ব্যবস্থাপনা ও বিপণন ➤➤➤শাহানা সুলতানা শাম্মী ◑ লেখক- LASER সিরিজ, শিক্ষক- সাধারণ বিজ্ঞান ◑ শিক্ষক হিসাববিজ্ঞান। ফিন্যান্স ও ব্যাংকিং"}, 
       // Add more questions and answers here
    ];

    // Event listener for send button
    sendButton.addEventListener("click", function() {
        var message = userInput.value.trim();
        if (message !== "") {
            sendMessage(message, "user");
            userInput.value = "";
            var response = getResponse(message);
            if (response) {
                if (Array.isArray(response)) {
                    displaySuggestions(response);
                } else {
                    simulateBotTyping(response);
                }
            }
        }
    });

    // Event listener for input field (Enter key)
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    function sendMessage(message, sender) {
        var newMessage = createMessage(message, sender);
        chatContainer.appendChild(newMessage);
        scrollToBottom();
    }

    function createMessage(message, sender) {
        var messageWrapper = document.createElement("div");
        messageWrapper.classList.add("message");

        var profilePic = document.createElement("img");
        profilePic.classList.add(sender + "-profile-pic");
        profilePic.src = sender === "user" ? "user-profile-pic.png" : "bot-profile-pic.png";

        var messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerText = message;

        // Append elements in reverse order for user messages
        if (sender === "user") {
            messageWrapper.classList.add("user-message");
            messageWrapper.appendChild(messageContent);
            messageWrapper.appendChild(profilePic);
        } else {
            messageWrapper.classList.add("bot-message");
            messageWrapper.appendChild(profilePic);
            messageWrapper.appendChild(messageContent);
        }

        return messageWrapper;
    }

    function getResponse(message) {
        var lowercaseMessage = message.toLowerCase();
        for (var i = 0; i < qaData.length; i++) {
            var question = qaData[i].question.toLowerCase();
            var tags = qaData[i].tags;
            if (question.includes(lowercaseMessage) || tags.some(tag => lowercaseMessage.includes(tag))) {
                return qaData[i].answer;
            }
        }
        return generateSuggestions();
    }

    function generateSuggestions() {
        var suggestions = [];
        for (var i = 0; i < qaData.length; i++) {
            suggestions.push(qaData[i].question);
        }
        return suggestions;
    }

    function displaySuggestions(suggestions) {
        var suggestionContainer = document.createElement("div");
        suggestionContainer.classList.add("suggestion-container");
        suggestions.forEach(function(suggestion) {
            var button = document.createElement("button");
            button.innerText = suggestion;
            button.addEventListener("click", function() {
                sendMessage(suggestion, "user");
                var response = getResponse(suggestion);
                if (response) {
                    simulateBotTyping(response);
                    chatContainer.removeChild(suggestionContainer);
                }
            });
            suggestionContainer.appendChild(button);
        });
        chatContainer.appendChild(suggestionContainer);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function simulateBotTyping(response) {
        var typingIndicator = document.createElement("div");
        typingIndicator.classList.add("message", "bot-message");
        var profilePic = document.createElement("img");
        profilePic.classList.add("bot-profile-pic");
        profilePic.src = "bot-profile-pic.png";
        typingIndicator.appendChild(profilePic);
        var messageContent = document.createElement("div");
        messageContent.classList.add("message-content", "typing-animation");
        typingIndicator.appendChild(messageContent);
        chatContainer.appendChild(typingIndicator);
        simulateTyping(messageContent, response);
    }

    function simulateTyping(element, message) {
        var index = 0;
        var typingInterval = setInterval(function() {
            if (index < message.length) {
                element.innerText += message.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
                scrollToBottom();
            }
        }, 50); // Adjust typing speed as needed
    }
});
  function openipopup() {
    document.getElementById('ipopup').style.display = 'block';
  }

  function closeipopup() {
    document.getElementById('ipopup').style.display = 'none';
  }