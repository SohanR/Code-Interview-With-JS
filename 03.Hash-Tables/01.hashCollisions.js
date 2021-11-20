let user = {
    age: 21,
    name:'quinn',
    magic:true,
    scream: function(){
        console.log('aaaaaaaaaaaa');
    }
}


console.log(user.age) // 0(1)
user.spell = 'hahahaha'
console.log(user.spell) // 0(1)
console.log(user.scream()) // 0(1)

