function openTool(tool) {
  const box = document.getElementById("toolBox");

  if (tool === "chat") {
    box.innerHTML = `
      <h2>🤖 AI Chat</h2>

      <textarea id="chatInput"
        placeholder="Apna question yahan likho..."
        style="width:100%;height:120px;padding:12px;font-size:16px;box-sizing:border-box;">
      </textarea>

      <button onclick="askAI()"
        style="margin-top:12px;padding:12px 25px;font-size:16px;">
        Send 🚀
      </button>

      <div id="chatResult" style="margin-top:20px;"></div>
    `;
  }
}

function askAI() {
  const result = document.getElementById("chatResult");
  result.innerHTML = "<p>✅ AI Chat button working hai!</p>";
}
