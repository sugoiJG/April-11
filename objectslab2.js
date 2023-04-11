// Submit a JS file or Repl link.

 

// Copy this object with it’s nested object

let movie = {

    name: "Titanic",

    releaseYear: 1997,

    director: "James Cameron",

    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

    starActor: {
        name: "Leonardo Dicaprio",
        age: 5,
        born: 1889,
        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    },
    budgetInMillions: 200

}

// Try to make functions that do the following: 
// // Access the star actor’s age property  and change the value to 48.
// // Access the star actor’s born property and change the value to 1989.
// // Add a new property to the starActor object called isPopular and set its value to true.

const newActorData = (newAge, newBorn, isPopular) => {
    movie.starActor.age = newAge;
    movie.starActor.born = newBorn;
    movie.starActor.isPopular = isPopular;
    console.log(movie)
}
newActorData(48, 1989, true)

// // Add a new property to the movie object called isGoodMovie with a value of undefined.
const newProperty = () => {
    movie.isGoodMovie = undefined;
    console.log(movie)
}
newProperty();
// // Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.
const isActorInMovie = () => {
    for (let i=0; i<movie.actors.length; i++) {
    if (movie.actors[i] === "Tom Cruise") {
        movie.isGoodMovie = true;
    } else {
        movie.isGoodMovie = false;
    }
}
}
isActorInMovie();
console.log(movie);


// let cohortFour = {

//     classSize: 5,

//     instructor: {

//         name: "Fred",

//         age: 40,

//         completedCohortIds: [3, 77, 45, 23],

//         email: "fred@fred.com",

//         assistant: {

//             name: "Brad",

//             age: 38,

//             email: "Brad@brad.com"

//         }

//     },

//     classGrades: [99, 100, 89, 88, 95]

// }

 

// Try to make functions that do the following: 

 

// Check if the class size is > 10
// Check if the instructor has completed more than 2 cohorts.
// Create a function called changeAssistant that will change the name, age, and email of the assistant
// Loop through the completedCohortIds array and check if Fred completed cohort 55
// Loop through the classGrades and check if the average grade is > 90