console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
  let title = {
    title: title;
    artist: artist;
    yearPublished: yearPublished;
  }
  collection.push(title)
}
console.log(addToCollection('September', 'Earth, Wind & Fire', '1978'))
console.log(collection);
