function speakText() {
  const text = "                        "+document.getElementById("textInput").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
