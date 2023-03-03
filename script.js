import { quotes } from "./quotes.js";

let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');


// Generating new quote :
function newQuote() {   
    let random = Math.floor(Math.random()*quotes.length);
    let {author, text} =  quotes[random];
    (text.length > 60) && (quoteContainer.classList.add('long-quote'));
    quoteText.textContent = text;
    authorText.textContent = author? author:'Unknown';
}
// Tweet quote :
function tweetQuote() {
    const twitterUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuote();
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



// // Get API quotes
// let quotes = [];
// async function getQuote() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         quotes = await response.json();
//         newQuote();
//     } catch(err) {
//         console.log(err);
//     }
// }

// // on load - start here
// getQuote();
