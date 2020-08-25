const binarySearch = (numbersArray, searchElement)=>{
    let currentElement;
    let currentIndex;

    let maxIndex = numbersArray.length - 1;
    let minIndex = 0;

    while(minIndex <= maxIndex){
        currentIndex = Math.floor((maxIndex + minIndex)/2); 
        currentElement = numbersArray[currentIndex];
        if(currentElement < searchElement){
            minIndex = currentIndex + 1;
        }
        else if(currentElement > searchElement){
            maxIndex = currentIndex - 1;
        }
        else{
            console.log("found target element");
            return currentIndex;
        }
        }
}

const arr = [1,2,3,4,5];

const search = binarySearch(arr, 4);
console.log(search);
