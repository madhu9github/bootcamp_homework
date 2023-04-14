function arrUnlimited(...arrays) {
    let arrLen = arrays.length;
    console.log("No of arrays to concatenate: " + arrLen);
    let arrConcat = arrays.flat();
    console.log("Here is the concatenated array: " + arrConcat);
    return arrConcat;
}
arrUnlimited(["yes"," no", " alright"], [" 1"," 2"," 3"], [[34,67], 56, 78],[" mine", " yours ", " ours"]);
arrUnlimited(["It's"], [" a"], [" beautiful"],[" day!"]);
arrUnlimited([[2,3],[9,11]], [[[0]]], [999,15],[4,17,87]);

