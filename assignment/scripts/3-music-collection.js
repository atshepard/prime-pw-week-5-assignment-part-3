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
console.log('adding album', addToCollection('September', 'Earth, Wind & Fire', '1978'));
console.log('adding album', addToCollection('El Camino', 'The Black Keys', '2010')); //was actually released in 2011, but changed to test search function.
console.log('adding album', addToCollection('Magic Potion', 'The Black Keys', '2006'));
console.log('adding album', addToCollection('Brothers', 'The Black Keys', '2010'));
console.log('adding album', addToCollection('Discovery', 'Daft Punk', '2001'));
console.log('adding album', addToCollection('Paul Simon', 'Paul Simon', '1972'));
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

function search(input) {
  let searchResults = [];
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === input || collection[i].title === input || collection[i].yearPublished == input) {
        searchResults.push(collection[i]);
      } else if (input === "" || !input) {
        return collection;
      }
  }
  return searchResults;
}

console.log(search('September'));
console.log(search('Paul Simon')); //should only return one instance of the album since the conditional is 'or', even though title and artist match.
console.log(search('2010')); //testing to make sure it shows two Black Keys albums
console.log(search(2010)); //should still return two Black Keys albums
console.log(search([]));
console.log(search(''));
console.log(search());
