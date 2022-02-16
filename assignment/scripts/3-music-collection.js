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


//This worked great, but I wanted to try something else as well:
// function showCollection(array) {
//   console.log(array.length);
//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i].title, 'by', array[i].artist, ', published in', array[i].yearPublished);
//     }
//   }

function showCollection(array) {
  console.log(array.length);
    array.forEach((album) => {
      console.log(album.title, 'by', album.artist, ', published in', album.yearPublished);
    });
  }

showCollection(collection);

function findByArtist (artist) {
  let findArtistResults = [];
    for (let i = 0; i < collection.length; i++) {
          if (collection[i].artist === artist) {
            findArtistResults.push(collection[i]);
          }
        }
  return findArtistResults;
      }

console.log(findByArtist('The Black Keys'));
console.log(findByArtist('The BeeGees'));
