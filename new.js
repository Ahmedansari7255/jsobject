
// var student ={
//     name:'Ahmed Ansari',
//     age:21,
//     address:'jharkhand',
//     mobile:7255944495,
// }

// console.log(student.name)

// console.log(student['name']);


//2.


var student ={
    name:'Ahmed Ansari',
    age:21,
    address:
    {
        city:'Dhanbad',
        state:'jharkhand',
        pin:828206,
    },
    mobile:7255944495,
}

console.log(student.mobile)
console.log(student.address.city)
console.log(student['address']['state'])

//3.

var student ={
    name:'Ahmed Ansari',
    age:21,
    address:
    {
        city:'Dhanbad',
        state:'jharkhand',
        pin:828206,
    },
    mobile:7255944495,
}

student.graduate=true;

console.log(student.graduate)

//4 method

var video={
    name:'js class',
    play: function(){
        console.log('video played')
    },
    time:[10,20,30]
}

console.log(video.name)
console.log(video.play())

