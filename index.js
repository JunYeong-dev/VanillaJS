// 상수 - 바뀌지 않는 값
const a = 1;
// a = 2; <- 상수이기 때문에 에러가 남

/*
var과 let의 차이점
var은 재선언이 가능하지만 let은 재선언이 불가능
예를들어
var b = 1;
var b = 2;
var의 경우 위의 코드가 에러가 나지 않지만
let c = 1;
let c = 2;
let의 경우에는 에러가 나게 됨

공통점 - var와 let 둘 다 재할당은 가능
b = 3;
c = 2;
에러가 나지 않음
*/
var b = 3;
let c = 2;

// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

// Object
const personInfo = {
    name : "Judy",
    age : 18,
    gender : "Female"
}
console.log(personInfo);
console.log(personInfo.name);

// personInfo는 const지만 속성 값은 변경할 수 있음
personInfo.name = "Sindy";
console.log(personInfo.name);
