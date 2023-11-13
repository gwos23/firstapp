const form = document.querySelector(selectors,'#shortenForm');
const shortenCard = document.querySelector(selector, '#shortenCard');
const inputUrl = document.querySelector(selectors, '#url');
const btnShortenUrl = document.querySelector(selectors, '#btnShortenUrl');

const URL_SHORTEN = '/ajax/shorten';

form.addEventListener(type, 'submit', listener, function(e, Event) {
    e.preventDefault();
})