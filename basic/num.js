//

// // forach format 

// veriable=arrayveriablename.forEach((num)=>{
//     console.log(num);
    
// })

const mynumber = [1,2,3,4,5,6,7,8,9]

//const newnum=mynumber.map((num)=>{return num+10})



// const newvaslu= mynumber.forEach((mynum) => {
//     console.log(mynum+10);  // Each number will be printed
//   });
const mpp =mynumber
.map((num)=>num*14)
.map((num)=>num+1)
.filter((num)=> num >=10)

console.log(mpp)