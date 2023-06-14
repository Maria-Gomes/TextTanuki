//lowercases all words, removes punctuation and returns array of individual words

var clean = function (text) {
  text = text.toLowerCase();
  text = text.replaceAll(/[.,?!'";:()`~]/g, "");
  var words = text.split(" ");
  return words;
};

//analyzes text to give information

var analyzeText = function (text) {
  var charCount = (sentenceCount = wordCount = wordFreq = 0);
  var mostFreqWord = (longestWord = "");
  var wordMap = new Map();

  if (typeof text !== "string" || text === "")
    //check for invalid input
    return "Error";
  text = text.trim();
  if (text === "") return "Empty string";
  for (var i = 0; i < text.length; i++) {
    //find no. of sentences
    if (
      (text.charAt(i) == "." && i == text.length - 1) ||
      (text.charAt(i) == "." && text.charAt(i + 1) == " ")
    )
      sentenceCount++;
  }

  var words = clean(text);

  for (var i = 0; i < words.length; i++) {
    //store frequency of words in map
    if (wordMap.has(words[i])) wordMap.set(words[i], wordMap.get(words[i]) + 1);
    else wordMap.set(words[i], 1);
  }

  wordCount = wordMap.size;
  for (let [key, value] of wordMap) {
    if (key.length > longestWord.length) longestWord = key;
    if (value > wordFreq) {
      wordFreq = value;
      mostFreqWord = key;
    }
  }
  charCount = words.join("").length;

  return {
    charCount: charCount,
    wordCount: wordCount,
    sentenceCount: sentenceCount,
    mostFrequentWord: {
      word: mostFreqWord,
      frequency: wordFreq,
    },
    longestWord: {
      word: longestWord,
      length: longestWord.length,
    },
  };
};

module.exports = { analyzeText, findSimilarity };
