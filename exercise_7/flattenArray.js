function flattenArr() {
    let iArr = new Array();
    const arr = [[0, 1], [4, 5], [9, 1],[11,8],[123,5],[11,82]];
    let pValue = 0;
    const flatArr = arr.reduce((pValue,cValue)=>{
           return pValue.concat(cValue);
    }, iArr);
    console.log("Flattened Array is: " + flatArr);
}
flattenArr();



