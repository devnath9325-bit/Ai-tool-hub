function openTool(tool) {
  const box = document.getElementById("toolBox");

  const tools = {
    chat: {
      title: "🤖 AI Chat",
      placeholder: "Apna question yahan likho..."
    },
    script: {
      title: "✍️ Script Writer",
      placeholder: "Kis topic par script chahiye?"
    },
    translate: {
      title: "🌐 Translator",
      placeholder: "Text yahan paste karo..."
    },
    content: {
      title: "📝 Content Writer",
      placeholder: "Kis topic par content chahiye?"
    },
    summary: {
      title: "📄 Summarizer",
      placeholder: "Text yahan paste karo..."
    },
    image: {
      title: "🖼️ AI Image",
      placeholder: "Image ka description likho..."
    },
    voice: {
      title: "🎙️ AI Voice",
      placeholder: "Voice ke liye text likho..."
    }
  };

  const selected = tools[tool];

  box.innerHTML = `
    <h2>${selected.title}</h2>

    <textarea
      id="userInput"
      placeholder="${selected.placeholder}"
      rows="7"
      style="width:100%;padding:15px;font-size:16px;box-sizing:border-box;border-radius:10px;"
    ></textarea>

    <br><br>

    <button onclick="runTool('${tool}')"
      style="padding:12px 25px;font-size:16px;border:0;border-radius:8px;cursor:pointer;">
      Generate
    </button>

    <div id="result"
      style="margin-top:20px;padding:15px;white-space:pre-wrap;">
    </div>
  `;
}

function runTool(tool) {
  const input = document.getElementById("userInput").value.trim();
  const result = document.getElementById("result");

  if (!input) {
    result.innerText = "⚠️ Pehle kuch text likho.";
    return;
  }

  result.innerText =
    "⏳ Processing...\n\n" +
    "Tool: " + tool + "\n" +
    "Your request: " + input;
}
