// import { quotes } from "./quotes.js";    // For local file
let quotes = []; // For api

let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');
let loader = document.getElementById('loader');

function loadingStart() {
    loader.classList.remove("hide");
    quoteContainer.classList.add("hide");
}
function loadingEnd() {
    loader.classList.add("hide")
    quoteContainer.classList.remove("hide");
}


// Generating new quote :
function newQuote() {   
    loadingStart();

    let random = Math.floor(Math.random()*quotes.length);
    let {author, text} =  quotes[random];
    (text.length > 60) && (quoteContainer.classList.add('long-quote'));
    quoteText.textContent = text;
    authorText.textContent = author? author:'Unknown';

    loadingEnd();
}
// Tweet quote :
function tweetQuote() {
    const twitterUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



// Get API quotes
async function getQuote() {
    loadingStart();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        quotes = await response.json();
        newQuote();
    } catch(err) {
        getQuote(); // if first time gives error it will try again
        console.log(err);
    }
}

// on load - start here
getQuote(); // For api
// newQuote();  // For local file
