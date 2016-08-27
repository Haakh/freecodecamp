function chunkArrayInGroups(arr, size) {
  // Break it up.
    var count = 0;
    var len = Math.ceil(arr.length/size);
    var arr1 = [];
    var i = 0;
    var s = size;
    for(i = 0 ;i<len;i++){
        console.log(size);
        if(size > arr.length){
            arr1[i] = arr.slice(count);
        }
        else{
            arr1[i] = arr.slice(count,size);
            count += s;
           // console.log(count);
            size += s;
        }
    }
    console.log(arr1);
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
