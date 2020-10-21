/******************************************
project 2 - Quote Show

Student: Paulo Gustavo Rech
Student ID: 300303872  
******************************************/


/*** 
 * `quotes` array 
***/
var randomQuote = [
    {
        quote: "You can't go back and change the beginning, but you can start where you are and change the ending.",
        source: "C.S. Lewis"
    },
    {
        quote: "I have no special talent. I am only passionately curious.",
        source: "Albert Einstein",
        citation: "aboutalberteinstein.com"
    },
    {
        quote: "If there is no struggle, there is no progress.",
        source: "Frederick Douglass"
    },
    {
        quote: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
        source: "Larry Bird"
    },
    {
        quote: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
        source: "Bernice Johnson Reagon"
    },
    {
        quote: "Folks are usually about as happy as they make their minds up to be.",
        source: "Abraham Lincoln",
        year: "1863"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Will Durant",
        year: "1926"
    },
    {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        source: "Tony Robbins",
    }

];

/***
 * `getRandomQuote` function
 *  Gets the randomQuote length of objects and returns
 *  a number from it.
***/
function getRandomQuote() {
    var quoteNumber = Math.floor(Math.random() * (randomQuote.length) );
    return randomQuote[quoteNumber];

}


/***
 * `printQuote` function
 * 
 * Gets Random quote from getRandomQuote() 
 * and build the HTML string to show when button is clicked
***/
function printQuote() {
    let RandomQuote = getRandomQuote();
    console.log(RandomQuote);
    let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p><p class='source'>" + RandomQuote.source;
    console.log(RandomQuote.source);
    if (RandomQuote.citation) {
        PtoHTML1 += "<span class='citation'>" + RandomQuote.citation + "</span>";
        console.log(RandomQuote.citation);
    }
    if (RandomQuote.year) {
        PtoHTML1 += "<span class='year'>" + RandomQuote.year + "</span>";
        console.log(RandomQuote.year);
    }
    PtoHTML1 += "</p>";
    document.getElementById('quote-box').innerHTML = PtoHTML1;
    console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * when button is clicked, it calls prinQuote()
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);