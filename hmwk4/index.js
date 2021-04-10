window.onload = () => {

  // when user presses and releases a key, this fires the update function
  textAreaElement.onkeyup = () => {
    update();
  };

  // adds an s to a word if number is not 1
  const plural = (num, word) => {
    return (num != 1) ? word + "s" : word;
  };

  // called on start and whenever a user enters text into the text box
  const update = () => {
    // get text and find out how many words there are
    const textAreaElement = document.getElementById("form-text");
    const text = textAreaElement.value;
    const words = text.split(" ").filter(i => i != ""); // split into array of words that are not empty strings

    // get data
    const wordCount = words.length;
    const length = text.length;

    // report statistics with proper format and grammar
    const wordCountMessage = `${wordCount} ${plural(wordCount, "word")}`;
    const lengthMessage = `${length} ${plural(length, "character")}`

    // display statistics
    document.getElementById("word-count").innerHTML = wordCountMessage;
    document.getElementById("character-count").innerHTML = lengthMessage;
  };

  // initialize statistics before user enters text
  update();

};
