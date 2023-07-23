// // var x = 55;
// // var y = "55";
// // console.log(typeof x);
// //coersion 
// //auto data type converter

// //boolean to number || number to string strict
// // if(x===y){
// //     console.log("ashta");
// // }else{
// //     console.log("msh ashta");
// // }
// // var x; // declaration 
// // console.log(x);
// // x= 55; // intialization
// // console.log(x);
// //premitive data type 
// //non - pre
// //string number float bolean null undif
// //array object +
// // var index = window.prompt("ay 7aga");
// // console.log(typeof index);
// // console.log(typeof +index);
// // var i=1,x=2,y=3,name="youssef";
// // console.log(i+""+x+""+y+name);
// // var obj = "ahmed"+"mahmoud"+"ali"
// // console.log(obj);
// //- / * ** 
// // var index = +window.prompt("aktb");
// // console.log(typeof index);
// // + - / * ++ -- %
// // var x = 5;
// // console.log(x++);

// // console.log(x);
// // //x = 6

// // console.log(++x);

// // var index = 1;
// // console.log(index);
// // console.log(index++);
// // console.log(index);
// // console.log(++index);
// // <= >= == === !=
// // var x = 6;
// // var y = 6;
// // if(x<=y){
// //     console.log("ahsta");
// // }else{
// //     console.log("msh ashta");
// // }
// // || && ! 
// // || m3 awl true btl8y ay 7aga tanya true flase => true
// // && true true => true | flase true => flase  
// // var x=null;
// // NaN
// // if(x%4==0 && x%3==0){
// //     console.log("yes");
// // }else{
// //     console.log("no");
// // }
// // var y = 20;
// // if(x){
// //     console.log("msal");
// // }else if(!x){
// //     console.log("1222222");
// // }else{
// //     console.log("msh tmam");
// // }
// // / =% 5/2 2.5 ||| 5%2 
// // var x = 0;
// // for(var i=0 ; i<10 ; i++){

// //     x+=1 // x=x+1
// //     console.log(x);
// // }
// // var x = 50;
// // var y = 10;
// // if(x==y){
// //     console.log("tmam");
   
// // }else if(x<y){
// //     console.log("msh tmam");
// // }else if(x>y){
// //     console.log("msh tmam awy ");
// // }else{

// // }
// // ternary op
// //  var index= x==y ?  console.log("mashy") :  console.log("msh tmam");
// //  return index;
// // if(month==1||month==3)
// // var month = 5;
// // switch (month) {
// //     case 1:
// //     case 3:
// //     case 5:
// //     case 7:
// //     case 8:
// //         console.log("days = 31");
// //         break;
// //     case 9:
// //         console.log("days = 30");
// //         break;

// //     default:
// //         console.log("msh tmam");
// //         break;
// // }

// // functions
// // var x = 5;
// // var y = 6;

// // // console.log(x);
// // sum(x,y);
// //function = var || let 
// // function sum(x,hambozo){
// // console.log(x+hambozo);
// // }
// // var i = 9;
// // var t = 8;
// // sum(9,8)
// //hoisting
// // expresion
// // var index = function(x,y){
// //     console.log(x+y);
// // }
// // index(x,y)
// // console.log("tmam");
// // // self invoke faunction 
// // (function(x,y){
// //     console.log(x+y);
// // })(x,y);
// // var x = 5;
// // var y = 8;

// // var arr = [2,1,2,3,4,5]
// // var object = {name:"youssef", age:26}
// // console.log(arr.length);
// // for(var i=0; i<=arr.length-1 ; i++)
// // {

// //     console.log(arr[i]);

// // }
// // var i =0;
// // while (i<=arr.length-1) {
// //     console.log(arr[i]);
// //     i++;
// // }
// // var i = 0;
// // do {
// //     console.log(arr[i]);
    
// // } while (i>arr.length);

// //hoisting
// var x = 5;
// var y= 6;
// sum(x,y)





// function sum(x,y) {
//     console.log(x+y);
// }

// var index = function(x,y) {
//     console.log(x*y);
// }
// index(x,y);






var uName = document.getElementById("uNmae");
var url = document.getElementById("url");
var form = document.getElementById("formy");
var users = [];
if(localStorage.getItem("users")==null){
   users=[];
}else{
    users =JSON.parse(localStorage.getItem("users")) 
    display();
}
function addUser(){
    var obj = {
        user: uName.value,
        url: url.value
    }
    users.push(obj);
    console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
    resetForm();
    display();
}
function display(){
    var box='';
    for(i=0;i<users.length;i++){
        box +=`
        <tr>
                    <th scope="row">`+users[i].user+`</th>
                    <td>${users[i].url}</td>
                    <td><a href="http://${users[i].url}" target="_blank""><button class="btn btn-warning">visit</button></a></td>
                    <td><button onclick="deleteUsers(${i})" class="btn btn-danger">Delete</button></td>
                  </tr>
        `;
    }
    document.getElementById("bodyy").innerHTML = box;

}
function deleteUsers(i){
    users.splice(i,1);
    localStorage.setItem("users",JSON.stringify(users));
    display();
}

function resetForm(){
    uName.value='';
    url.value=''
}


























form.addEventListener("click",function(e) {
    e.preventDefault();
})





























