let verses = [localStorage.getItem('myFavoriteVerses')]|| [];
console.log(typeof verses);
let addVerse = true;
if (verses && addVerse){
    verses.push(prompt('Please add your favorite verse:'));

};
localStorage.setItem('myFavoriteVerses',verses);

const randomVerseIndex = Math.trunc(Math.random()*verses.length);
console.log(randomVerseIndex);
const randomVerse = verses[randomVerseIndex]
for ( let verse of verses){
   if (verse === randomVerse){
    alert(`Remember to play cause Satan is willing to make you fall:${verse}`);
}};
