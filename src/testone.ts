const str : string = "hello";
console.log(str);
// ss bb u nn ===> string ,symbol ,bigint ,boolean , undefined , number , null  are primitive data types
// array, obj , function are non primitive data types

let  anyVar : number = 1 ; // if we use const we wont able to reassign the value

let arr :(number | string)[] = [1,2,3,4,5,'str']


//type alias 
type TObj = {
    name : string,
    age : number,
    education : {
        degree : string,
        college : string
    }
}
const obj : TObj = {
    name : 'pranto',
    age : 20,
    education:{
        degree : 'btech',
        college : 'buet'
    }
}