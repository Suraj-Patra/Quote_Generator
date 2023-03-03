# Resources :
1. API : https://type.fit/api/quotes
2. Loader : https://loading.io/css/
3. Background Design : heropatterns.com



# CORS error while calling API
Sometimes calling an API from the localhost gives an error called CORS. We can remove this error by doing a call to a proxy api then to the original api.

```JS
    async function getQuote() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';    
        // another api for getting quotes

        try {
            const response = await fetch(proxyUrl + apiUrl);
            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }
```

Sometimes this proxyUrl can give a 429-error, because of heavy traffic. For that we can create out own proxy server.
[https://academy.zerotomastery.io/courses/1007166/lectures/21153159]