//Question 1:
// Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

//----------------------------------------------------------------------------------
//Question 2:
//Create an array that has the numbers of the array numbers squared
const numbers = [1, 5, 8];
const squared = numbers.map((num) => {
  return Math.pow(num, 2);
}); //Bonus Question 2:
console.log(squared);

//----------------------------------------------------------------------------------
//Question 3:
//Use map to create a new array that adds the string " is awesome" to each element in the array.
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const newList = instructors.map((element) => {
  return element + " is awesome";
});
console.log(newList);

//----------------------------------------------------------------------------------
//Question 4:
//Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:
const nums = [25, 6, 8, 3];
let evenNumbers = 0;
nums.reduce((acc, num) => {
  if (acc % 2 == 0 || num % 2 == 0) {
    evenNumbers++;
  }
});

console.log(evenNumbers);
// evenNumbers equals 2

//----------------------------------------------------------------------------------
//Question 5:
//Filter out all "jerks"!
//Put them in an array called jerks
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((element) => element.includes("jerks"));
console.log(jerks);
// jerks equals ["jerks", "jerks"]

//----------------------------------------------------------------------------------
//Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
let myFunction = (a, b) => a * b;
const average = (arr) => {
  let cont = 0;
  let sum = 0;
  arr.forEach((element) => {
    cont++, (sum += element);
  });
  return sum / cont;
};
console.log(average([8, 2, 2, 4]));

//Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
const reverse = (word) => {
  return word.split("").reverse().join("");
};
console.log(reverse("caterpillar"));

//---------------------------------------------------------------------------------
//Objects Exercise: The Movie Database
let Movie = { 
    title: "Puff the Magic Dragon", 
    duration: 30, 
    stars: ["Puff","Jackie","Living Sneezes"],
    intr : function(){
        console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars}`)
    }
 };
 Movie.intr()
