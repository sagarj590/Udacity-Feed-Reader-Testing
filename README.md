# Udacity-Feed-Reader-Testing-Project
The purpose of Feed Reader Testing is to learn the standard of development known as "test-driven development". You are given a web-based application that reads RSS feeds. I used Jasmine 2.1.2 to write a number of tests against the business logic of the pre-existing application as well as the event handling and DOM manipulation.

## What I learnt working with this Project
- How to use the `jasmine` test suite to write tests to check the functionality of Udacity Feed Reader.
- These `tests` will give the underlying business logic of the application as well as the event handling and DOM manipulation.
- During experimentation, when I changed `allFeeds[]` to an empty array, 1 specification threw 1 failure stating "feeds are not defined". 
- Writing different tests to reduce code complexity.
- The testing takes around 6 to 8 seconds to complete.

## How to run
- A simple way to go is to download this git repository to your pc.
- Locate to the repository folder and open `index.html`.
- You should be able to see the feeds load.

## Tests list to check the functionality
#### RSS feeds
- Feeds are defined.
- Feed url's are defined and are not empty.
- Feed name's are defined and are not empty.
#### The menu 
- Is hidden by default.
- Displays or hides menu-list on clicking.
#### Initial entries
- Have atleast one ".entry" element.
#### New feed selection
- Content actually changes, when new feed is loaded.

## Resources
- [Brief overview of Jasmine - office hours](https://www.youtube.com/watch?v=zdI_F7uSpqM)
- [Introduction to Jasmine](https://jasmine.github.io/2.1/introduction.html)
- [Javascript and Jasmine installation](https://www.youtube.com/watch?v=Ac2sBrkSK-c)
- [Markdown editor](https://dillinger.io/)
