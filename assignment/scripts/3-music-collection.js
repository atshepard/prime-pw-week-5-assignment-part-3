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

//As is: only allows to add 1 track to tracklist. Still looking into the correct way.
let collection = []; //empty array to house collection
function addToCollection(title, artist, yearPublished, tracks) {
  let trackList = []
    trackList.push(tracks)
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    //tracks: [{trackName: trackName, trackDuration: trackDuration}] -> gives 'trackname not defined'
    albumTracks: trackList //trying an empty array that I can pass multiple objects into...
  } //end newAlbum object
  collection.push(newAlbum); //adds the new album to the end of the collection array.
  return newAlbum; //returns newAlbum
}
console.log('adding album', addToCollection('September', 'Earth, Wind & Fire', '1978', {title: 'September', duration: '3:35' }));
console.log('adding album', addToCollection('El Camino', 'The Black Keys', '2010', {title: 'Lonely Boy', duration: '3:13'} )); //was actually released in 2011, but changed to test search function.
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

console.log('Searching for artist, The Black Keys:', findByArtist('The Black Keys'));
console.log('Searching for artist, The BeeGees', findByArtist('The BeeGees'));

//Initial thoughts on search function, but doesn't *exactly* meet the assignment parameters, because the Logical OR operator doesn't match ALL the search criteria

// function search(input) {
//   let searchResults = [];
//     for (let i = 0; i < collection.length; i++) {
//       if (collection[i].artist === input.artist || collection[i].title === input.title || collection[i].yearPublished == input.yearPublished) {
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
      if (input == "" || !input) { //first checking if there is an input or not
        return array;
      } else if (array[i].artist == input.artist && array[i].title == input.title && array[i].yearPublished == input.yearPublished) { //then comparing input values against search collection
        searchResults.push(array[i]);
          }
        }
  return searchResults;
}

console.log('Searching for September:', search(collection, {title: 'September', artist: 'Earth, Wind & Fire', yearPublished: 1978}));
console.log('Searching for Paul Simon:', search(collection, {title: 'Paul Simon', artist: 'Paul Simon', yearPublished: 1972}));
console.log(search(collection, ''));
console.log(search(collection, ));
