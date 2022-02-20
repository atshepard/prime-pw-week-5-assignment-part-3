console.log('***** Music Collection *****')

//previous state of function before adding tracklist:
// let collection = [];
// function addToCollection(title, artist, yearPublished) {
//   let newAlbum = {
//     title: title,
//     artist: artist,
//     yearPublished: yearPublished
//   }
//   collection.push(newAlbum);
//   return newAlbum;
// }

let collection = []; //empty array to house collection
function addToCollection(title, artist, yearPublished, tracks) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    //tracks: [{trackName: trackName, trackDuration: trackDuration}] -> gives 'trackname not defined'
    tracks: [], //trying an empty array that I can pass multiple objects into...
  } //end newAlbum object
  collection.push(newAlbum); //adds the new album to the end of the collection array.
  return newAlbum; //returns newAlbum
}
console.log('adding album', addToCollection('September', 'Earth, Wind & Fire', '1978',
            [{trackName: 'September', trackDuration: '3:35'}]));
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
  console.log(array.length); //shows the current number of albums in the collection passed through it.
    array.forEach((album) => {
      console.log(album.title, 'by', album.artist, ', published in', album.yearPublished); //for each 'album' in the array it logs the information.
    });
  }//Works like a charm.

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

//Initial thoughts on search function, but doesn't *exactly* meet the assignment parameters:
// function search(input) {
//   let searchResults = [];
//     for (let i = 0; i < collection.length; i++) {
//       if (collection[i].artist === input || collection[i].title === input || collection[i].yearPublished == input) {
//         searchResults.push(collection[i]);
//       } else if (input === "" || !input) {
//         return collection;
//           }
//         }
//   return searchResults;
// }

function search(array, input) { //trying to see if we can pass collection into the function as well, so the search can be used across collections.
  let searchResults = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].artist === input.artist && array[i].title === input.title && array[i].yearPublished == input.yearPublished) {
        searchResults.push(array[i]);
      } else if (input === "" || !input) { //if input is empty or no input is provided, it will return the entire collection passed through the function.
        return array;
          }
        }
  return searchResults;
}

console.log(search(collection, 'September'));
console.log(search(collection, 'Paul Simon')); //should only return one instance of the album since the conditional is 'or', even though title and artist match.
console.log(search(collection, '2010')); //testing to make sure it shows two Black Keys albums
console.log(search(collection, 2010)); //should still return two Black Keys albums
console.log(search(collection, []));
console.log(search(collection, ''));
console.log(search(collection));
