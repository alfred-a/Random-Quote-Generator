// Array of objects to store quotes and properties

var quotes = [
  {
    quote: "A cell is regarded as the true biological atom.",
    source: "George Henry Lewes",
    citation: "The Physiology of Common LIfe",
    year: "1860",
    tags: "biology"
  },
  {
    quote:
      "Clinical science has as good a claim to the name and rights and self-subsistence of a science as any other department of biology.",
    source: "Sir James Paget",
    citation: "Transctions of the Clinical Society of London",
    year: "1870"
  },
  {
    quote: "Culture is not a biologically transmitted complex.",
    source: "Ruth Benedict",
    citation: "Patterns of Culture",
    year: "1934",
    tags: "anthropology"
  },
  {
    quote:
      "Teleology is a lady without whom no biologist can live. Yet he is ashamed to show himself with her in public.",
    source: "Ernst Wilhelm von Brucke",
    citation: "Excursion into the Borderland of Biochemistry and Philosophy",
    year: "1954",
    tags: "biochemistry"
  },
  {
    quote:
      "The division between life and nonlife is perhaps an artificial one.",
    source: "Cyril Ponnamperuma",
    citation: "Search for the Origins is Widening",
    year: "1986",
    tags: "anthropology"
  },
  {
    quote: "We must learn to think not only logically, but bio-logically.",
    source: "Edward Abbey",
    citation: "In One Life at a Time, Please",
    year: "1988"
  },
  {
    quote:
      "A totally blind process can by definition lead to anything; it can even lead to vision itself.",
    source: "Jacques Monod",
    citation: "Chance and Necessity",
    year: "1972"
  },
  {
    quote:
      "For a biologist the alternative to thinking in evolutionary terms is not to think at all.",
    source: "Peter Medawar",
    tags: "evolution"
  },
  {
    quote:
      "The human mind, or even the mind of a cat, is more interesting in its complexity than an entire galaxy if it is devoid of life.",
    source: "Martin Gardner",
    tags: "anthropology"
  },
  {
    quote: "Life is a relationship between molecules",
    source: "Linus Pauling",
    tags: "biochemistry"
  }
];
//Generate a random number 0 to 10(number of quotes), used random number as index of array
function getRandomQuote() {
  var getRandomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[getRandomNumber]; //to get random quotes.
}

function printQuote() {
  var randomQuoteObj = getRandomQuote();
  var quoteProperties = "";
  quoteProperties = "<p class='quote'>" + randomQuoteObj.quote + "</p>";
  quoteProperties += "<p class='source'>" + randomQuoteObj.source;
  if (randomQuoteObj.citation !== undefined) {
    quoteProperties +=
      "<span class='citation'>" + randomQuoteObj.citation + "</span>";
  } else {
    quoteProperties += "</p>";
  }
  if (randomQuoteObj.year !== undefined) {
    quoteProperties += "<span class='year'>" + randomQuoteObj.year + "</span>";
  } else {
    quoteProperties += "</p>";
  }
  if (randomQuoteObj.tags !== undefined) {
    quoteProperties += "<span class='tags'>" + randomQuoteObj.tags + "</span>";
  } else {
    quoteProperties += "</p>";
  }

  document.getElementById("quote-box").innerHTML = quoteProperties;

  // random number 0 to 255
  function randomBackgroundColor() {
    return Math.floor(Math.random() * 256);
  }

  var red = randomBackgroundColor();
  var green = randomBackgroundColor();
  var blue = randomBackgroundColor();
  var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = rgbColor; // random color background setter
}
// change quote every 20 seconds
setInterval(printQuote, 20000);

//click event listener for show another quote button
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
