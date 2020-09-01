let unsorted = [];

for (let index = 0, length = 10; index < length; index++){
    unsorted.push(Math.random() * length);
}

function quickSort(array){
    if(array.length <= 1) return array;

    let pivot = array.splice(Math.floor(Math.random() * array.length), 1);
  
    let left = [];
    let right = [];

    array.forEach((element)=>{
        (element <= pivot) ? left.push(element) : right.push(element);
    });

    return quickSort(left).concat(pivot, quickSort(right));
}


console.log("Pre Sort: ", unsorted.join(" "), "\n\n");
let sorted = quickSort(unsorted);
console.log
console.log("Post Sort: ", sorted.join(" "));
console.log("Sorted!!");  

[2,4,3,7,10,1,5]

[2,3,1], [4], [7,10,5]

[2,1],[3],[4], [7,10,5]

[1],[2],[3],[4],[7,10,5]

