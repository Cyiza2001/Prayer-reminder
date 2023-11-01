let verses = JSON.parse(localStorage.getItem('verses')) ||[];
console.log(verses);
 verses.push(prompt('Please add your favorite verse:'));
 localStorage.setItem('verses', JSON.stringify(verses));

const randomVerseIndex = Math.trunc(Math.random()*verses.length);
const randomVerse = verses[randomVerseIndex]
for ( let verse of verses){
   if (verse === randomVerse){
    console.log(verse)};
};


 