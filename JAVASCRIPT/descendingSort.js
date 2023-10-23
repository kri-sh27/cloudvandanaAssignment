function descendingSort(arr) {
    var len = arr.length;
    var swapped;
  
    do {
      swapped = false;
  
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  

  var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  var sortedArray = descendingSort(unsortedArray);
  console.log(sortedArray);
  