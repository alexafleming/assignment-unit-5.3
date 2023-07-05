console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished) {
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }

    collection.push(newAlbum);
    return newAlbum;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection("1989", "Taylor Swift", 2014));
console.log(addToCollection("Ends & Begins", "Labrinth", 2023));
console.log(addToCollection("brent", "Chelsea Cutler", 2019));
console.log(addToCollection("Rolling Up the Welcome Mat", "Kelsea Ballerini", 2023));
console.log(addToCollection("Happier Than Ever", "Billie Ellish", 2021));
console.log(addToCollection("Goodbye & Good Riddance", "Juice WRLD", 2018));
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(collectionToDisplay) {
    console.log(collectionToDisplay.length);
    for (let album of collectionToDisplay) {
        console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
    }
}
// - Test the `showCollection` function.

showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist) {
    let results = [];
    for (let album of collection) {
        if (album.artist === artist) {
            results.push(album);
        }

    }
    return results;
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist("Taylor Swift"));
console.log(findByArtist("Coldplay"));


// > When testing your functions, write all tests in the JavaScript file!