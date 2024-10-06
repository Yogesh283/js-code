// const numbervalue =[1,2,3,4,5,6,7,8,9,0]

// const value=numbervalue.reduce((acc,currval)=>acc+currval,0
// )

// console.log(value);


const shopingcard = [
    {
    cours:'js',
    price : 222,

    },
{
    cours:'paythen',
    price : 292,
}
]

const value =shopingcard.reduce((acc,item)=> acc+item.price,0)

console.log(value)

