console.log("hola.");

// while experimenting with javascript, I intended to write a code that allows the website theme to change, however, it did not seem to work
let interaction = document.getElementById("colorChange");

interaction.addEventListener('click', () => {
  if (interaction.style.color == #FFFAF1) {
    interaction.style.color == "black";
  } else {
    interaction.style.color == #FFFAF1;
  }
})
