import { quotes } from "./quotes.js";    // For local file
// let quotes = []; // For api

let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');
let loader = document.getElementById('loader');

function showLoading() {
    loader.classList.remove("hide");
    quoteContainer.classList.add("hide");
}
function hideLoading() {
    loader.classList.add("hide")
    quoteContainer.classList.remove("hide");
}


// Generating new quote :
function newQuote() {   
    showLoading();

    let random = Math.floor(Math.random()*quotes.length);
    let {author, text} =  quotes[random];
    (text.length > 60) && (quoteContainer.classList.add('long-quote'));
    quoteText.textContent = text;
    authorText.textContent = author? author:'Unknown';

    hideLoading();
}
newQuoteBtn.addEventListener('click', newQuote);

// Tweet quote :
function tweetQuote() {
    const twitterUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
twitterBtn.addEventListener('click', tweetQuote);



// Get API quotes
async function getQuote(count=0) {
    showLoading();
    
    // // For api :
    // const apiUrl = 'https://type.fit/api/quotes';
    // try {
    //     const response = await fetch(apiUrl);
    //     quotes = await response.json();
    //     newQuote();
    //     // throw new Error; // To test the catch function
    // } catch(err) {
    //     console.log(err);
    //     count<10 && getQuote(count+1); // if first time gives error it will try again for 10 times
    // }
    
    
    // For local file :
    newQuote();  
}

getQuote(); 


