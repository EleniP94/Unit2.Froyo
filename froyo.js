/*
1. user prompted for froyo flavors upon opening site
2. input string is split into array of strings
3. loop is used to keep count of how many orders ther are of each flavor 
4. program correctly counts number of each flavor entered in users input
5. logic for counting frequency of elements in an array is organized in a function that returns object
6. names are consistent and meaningful
7. console oputput changes depending on users input 
*/

//set up input string that will be filled out by user when they enter the site 

const userInput = prompt(
    "Please enter flavors separated by commas.",
    "vanilla,chocolate,strawberry,vanilla"
)

//split method takes pattern and divides string into ordered list of substrings by searching for pattern, puts them into array, then returns array 
const flavors = userInput.split(",")
console.log(flavors)

/*
build object that tracks which flavors we've observed so far
think of when object should be updated as we move through flavors array
is your logic organized into a functiom??
*/


/*
create empty object to hold counts as:
{
    vanilla: 3,
    chocolate: 1,
    mango: 2 
}
*/

const flavorCount = {

}

// loop over flavor array
for(let i=0; i<flavors.length; i++) {
    //is there a count for this flavor??
    const flavorsSoFar = Object.keys(flavorCount)
    //if yes, update count (+1)
    if(flavorsSoFar.includes(flavors[i])) {
        flavorCount[flavors[i]] +=1
    } // else, starts counting that flavor
    else{
        flavorCount[flavors[i]] = 1
    }

}

console.table(flavorCount)
