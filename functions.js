//lowercases all words, removes punctuation and returns array of individual words

var clean = function (text) {
  text = text.toLowerCase();
  text = text.replaceAll(/[.,?!'";:()`~]/g, "");
  var words = text.split(" ");
  words = words.filter(function (x) {
    return x !== "";
  });
  return words;
};

//analyzes text to give information

var analyzeText = function (text) {
  var charCount = (sentenceCount = wordCount = wordFreq = 0);
  var mostFreqWord = (longestWord = "");
  var wordMap = new Map();

  if (typeof text !== "string" || text === "")
    //check for invalid input
    throw { status: 400, message: "Invalid input." };
  text = text.trim();
  if (text === "") throw { status: 500, message: "Empty string." };
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

var findSimilarity = function (text1, text2) {
  text1 = text1.trim();
  text2 = text2.trim();
  if (
    //check invalid input
    typeof text1 !== "string" ||
    typeof text2 !== "string" ||
    text1 == "" ||
    text2 == ""
  )
    throw { status: 400, message: "Invalid input." };

  var words1 = clean(text1);
  var words2 = clean(text2);
  var set1 = new Set();
  var set2 = new Set();
  for (var i = 0; i < words1.length; i++) {
    set1.add(words1[i]);
  }
  for (var i = 0; i < words2.length; i++) {
    set2.add(words2[i]);
  }
  var sim1 = 0;
  var sim2 = 0;
  for (let item of set1) {
    if (set2.has(item)) sim1++;
  }
  for (let item of set2) {
    if (set1.has(item)) sim2++;
  }

  var sim1 = (sim1 / set1.size) * 100;
  var sim2 = (sim2 / set2.size) * 100;
  var avgSimilarity = (sim1 + sim2) / 2;

  return {
    similarity: avgSimilarity,
  };
};

module.exports = { analyzeText, findSimilarity };
