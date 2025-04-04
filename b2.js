let clickCount = 0;

function showMessage() {
  clickCount++;
  const messageBox = document.getElementById('message');
  messageBox.textContent = `You clicked the button! 🎉 Number of clicks: ${clickCount}`;
}
