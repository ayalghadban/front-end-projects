let user = 
{
    firstname: 'aya',
    lastname: 'alghadban'  ,
    getfullname: function()
    {
        return `Full name: ${this.firstname} ${this.lastname}`;
    },
    address:{
        eg: 'giza',
        usa: 'losan',
        syr: 'homse',
        lib: 'sour'
    },
};
console.log(user.getfullname());
console.log(user.firstname);
console.log(user['lastname']);
console.log(user.address);
console.log(user.address.syr);
console.log(user['address']['usa']);

let user1 = new Object();
user1.name = 'aya1';
user1.lname = 'algh1';
user1['age'] = 20;
console.log(user1);