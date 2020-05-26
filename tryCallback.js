/*
var temp; // temperature at which water boils
var data1 = 'abcd'

const heatWater = (temp, callback) => {
    console.log ('======================================')
    setTimeout(()=>{
        data = {
            lat: 0,
            long : 0
        }
        callback(data);
    }, 2000)
    console.log ('%%%%%%%%%%%%%%%%%%%%%%%%%')
}

heatWater(temp, (data1) => {
            console.log(data1);
});


const geoCode = (address, callback) => {
    const data = {
        lat: 0,
        long : 0
    }
    callback (data)
}
*/

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback (sum)
    }, 2000)
}

add (1, 4, (sum) => {
    console.log ("Sum of 1 and 4 is : " + sum)
})