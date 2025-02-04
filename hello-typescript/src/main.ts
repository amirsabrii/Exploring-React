import {reverseArray} from './Reversing'
import {numberType} from './number-type'
import {sortArray} from './sort-array'

import {Entity} from "./entity-array";

function testReverseArray(){
    const items = ['React' , 'next' , '3' , 'html']
    console.log(reverseArray(items))
}

function testNumberType(){
    const items =['React' , 'next' , 3 , 'html' , 15 , 12]
    console.log(numberType(items))
}

function testSortArray(){
    const items : Entity[] = [
        { createdAt: "2025-02-02T00:00:00.000Z" },
        {
            createdAt: "2025-01-31T00:00:00.000Z",
            modifiedAt: "2025-02-03T00:00:00.000Z",
            name: "amir",
        },
    ];

    console.log(sortArray(items))
}

function main(){
    testReverseArray()
    testNumberType()
    testSortArray()
}

main()