const API_URL = "https://script.google.com/macros/s/AKfycbzZcYg95qF3X3tO9U_ylN6bRYj9YDMWEcQb7f6hKAUxzG83mJE7UICYVxa70Dja_4Xj/exec";

function openTool(tool) {
    const box = document.getElementById("toolBox");

    if (tool === "chat") {
        box.innerHTML = `
            <h2>🤖 AI Chat</h2>

            <textarea
                id="chatInput"
                placeholder="Apna question yahan likho..."
                style="width:100%;height:120px;padding:12px;font-size:16px;box-sizing:border-box;">
            </textarea>

            <button
                onclick="askAI()"
                style="margin-top:12px;padding:12px 25px;font-size:16px;">
                Send 🚀
            </button>

            <div id="chatResult" style="margin-top:20px;"></div>
        `;
    }
}

async function askAI() {
    const input = document.getElementById("chatInput");
    const result = document.getElementById("chatResult");

    const prompt = input.value.trim();

    if (!prompt) {
        result.innerHTML = "<p>Please enter a question.</p>";
        return;
    }

    result.innerHTML = "<p>🤔 AI soch raha hai...</p>";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        if (data.answer) {
            result.innerHTML =
                "<div style='padding:15px;background:#f1f1f1;border-radius:10px;'>" +
                data.answer.replace(/\n/g, "<br>") +
                "</div>";
        } else {
            result.innerHTML =
                "<p>❌ AI response nahi mila.</p>";
        }

    } catch (error) {
        result.innerHTML =
            "<p>❌ Connection error.</p>";
    }
}
