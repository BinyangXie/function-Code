let arr = [1,[2,3],[3,[4,5]]];

// function flatten(arr){
//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flatten(arr[i]));
//         }else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// function flatten(arr){
//     return arr.reduce(function(prev,next){
//         return prev.concat(Array.isArray(next) ? flatten(next) : next)
//     }, [])
// }


// function flatten(arr){
//     while(arr.some(item => Array.isArray(item))){
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

// function flatten(arr){
//     return arr.toString().split(',');
// }

// function flatten(arr){
//     return arr.flat(Infinity);
// }

console.log(flatten(arr));