let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');

let quotes = [];

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


newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// Get API quotes
async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        quotes = await response.json();
        console.log(quotes);
        newQuote();
    } catch(err) {

    }
}

// on load - start here
getQuote();
