// creating variables 
const btn = document.querySelector('#changeQuote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person')

const nameP = document.querySelector('#name');
nameP.style.color = 'red';

let quotes = [
    {
        quote: "You must be the change you wish to see in the world",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier",
        person: "Mother Teresa"
    },
    {
        quote: "The only thing we have to fear is fear itself",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Do one thing every day that scares you",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Well done is better than well said",
        person: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
        person: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light",
        person: "Aristotle"
    },

    {
        quote: "he way to get started is to quit talking and begin doing",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking",
        person: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
        person: "John Lennon"
    },

]

quote.textContent = quotes[0].quote;
person.textContent = quotes[0].person;


btn.addEventListener("click", function () {
    const randomN = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomN].quote;
    person.textContent = quotes[randomN].person;
})

