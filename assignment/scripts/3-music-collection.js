console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(newAlbum);
  return newAlbum;
}
console.log(addToCollection('September', 'Earth, Wind & Fire', '1978'));
console.log(addToCollection('El Camino', 'The Black Keys', '2011'));
console.log(addToCollection('Magic Potion', 'The Black Keys', '2006'));
console.log(addToCollection('Brothers', 'The Black Keys', '2010'));
console.log(addToCollection('Discovery', 'Daft Punk', '2001'));
console.log(addToCollection('Paul Simon', 'Paul Simon', '1972'));
console.log(collection);

function showCollection(array) {
  console.log(array.length);
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].title, 'by', array[i].artist, ', published in', array[i].yearPublished);
    }
  }

showCollection(collection);
