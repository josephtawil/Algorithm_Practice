
//binary Search must be sorted
const binarySearch = (numbersArray, searchElement)=>{
    // this is the current element value we are using
    let currentElement;
    //this is the current element value index
    let currentIndex;

    // the maxIndex and minIndex is the range that we keep updating to determine the new middle element
    let maxIndex = numbersArray.length - 1;
    let minIndex = 0;

    //putting it in a while loop to check if the searchElement is between the min and max Index
    while(minIndex <= maxIndex){
        // we set the currentIndex as the middleIndex between the max and the min. we use floor in case the number is a decimal number. it rounds it down
        currentIndex = Math.floor((maxIndex + minIndex)/2); 
        //we set currentElement as the value of the updated currentIndex
        currentElement = numbersArray[currentIndex];

        //we use if and else statements to check if the currentElement is less than, greater than, or equal to the search element
        if(currentElement < searchElement){
            // we set the min index as the currentIndex so that it becomes the new minIndex
            minIndex = currentIndex + 1;
        }
        else if(currentElement > searchElement){
            //we set the max index as the currentIndex so that it becomes the new maxIndex
            maxIndex = currentIndex - 1;
        }
        else{
            //this is when the currentElement is equal to the searchElement. if so we return the index of that element
            console.log("found target element");
            return currentIndex;
        }
        }
}

const arr = [1,2,3,4,5];

const search = binarySearch(arr, 4);
console.log(search);
