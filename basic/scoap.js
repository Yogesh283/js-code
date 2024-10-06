
// // // let a= 10;
// // // const b = 20  jo veriable function ka baar define kiya jata hai unko global veriabl ya non scop veraibal bolta hai 
// // // var c = 40



// // if(true){
// // let a= 10;
// // const b = 20// function ka ander created verisble ko block veriable bolta hai 
// // var c = 40


// // }

// // //console.log(a);
// // //console.log(b);
// // //console.log(c);



// function one (){
//     const username='Yogesh kumar'

//     function two(){ // function ka ander function ko call krna ya function creat krna closer function hota hai
        
//         const name ='priyanka'
//         console.log(username)
//     }
//    // console.log(name)
//     two()
// }
// one()


function Big(num=null, num1=null){

    function Sumll(num=null,num1=null){
return num - num1;
    }
console.log(Sumll(50,11))

return num + num1 ;

}
console.log(Big(10,11))
