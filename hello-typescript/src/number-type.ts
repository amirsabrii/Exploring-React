export default function NumberType(arr:Array<T>):void{
    console.log(arr.filter((e) => (typeof e === 'number'))
    )
}