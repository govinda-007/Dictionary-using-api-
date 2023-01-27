const submitBtn = document.getElementById("submit");
const resultContainer = document.getElementById("result");

submitBtn.addEventListener("click", () => {
  const word = document.getElementById("word").value;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
      if (data[0]) {
        const meaning = data[0].meanings[0].definitions[0].definition;
        resultContainer.innerHTML = `The meaning of the word "${word}" is: ${meaning}`;
      } else {
        resultContainer.innerHTML = `No definition found for "${word}".`;
      }
    })
    .catch((error) => {
      resultContainer.innerHTML = `An error occurred: ${error}`;
    });
});
