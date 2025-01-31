export default function reverseArray<T> (arr : Array<T> ) :Array<T>{

    for (let index = arr.length -1; index >= 0; index--) {

        console.log(arr[index]);
    }
}