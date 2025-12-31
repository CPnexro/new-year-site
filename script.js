function start() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("output");

  if (name === "") {
    output.innerHTML = "Enter your name first 😐";
    return;
  }

  output.innerHTML = "";
  document.getElementById("questionBox").style.display = "block";
}

function answer() {
  const name = document.getElementById("nameInput").value;
  const questionBox = document.getElementById("questionBox");
  const output = document.getElementById("output");
  const video = document.getElementById("video");

  questionBox.style.display = "none";

  output.innerHTML =
    "It’s okay. Anyway, the world will end in 2026 😌";

  // Play video 1
  video.src = "video1.mp4";
  video.style.display = "block";
  video.play();

  // After video1 → play video2
  video.onended = () => {
    video.src = "video2.mp4";
    video.play();

    // After video2 → fade + final message
    video.onended = () => {
      video.classList.add("fade-out");

      setTimeout(() => {
        video.style.display = "none";
        output.innerHTML = `🎉 Happy New Year ${name}! 🎉`;
      }, 1200);
    };
  };
}
