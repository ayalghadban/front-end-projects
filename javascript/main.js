//alert('hello world');
console.log('hello world');
let aya = 10;
console.log(aya);
const alaa = 10;
//alaa = 30;
console.log(alaa);

const a = 'aya alghadban';
const b = 19;
console.log('my name is ' + a + ' and my age is ' + b);
const c = 'hello world aya alghadban';
console.log(c.length);
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.substring(0,5));
console.log(c.substring(0,5).toUpperCase());
console.log(c.split(''));
const d = 'technology, it, code, software, frontend, html, javascript';
console.log(d.split(', '));
const e = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13);
console.log(e);
const arr = ['aya', 'haya','sham','barhoom','ossy','ana','asaa'];
arr.push('mama');
arr.unshift('dada');
console.log(arr);

const person = 
{
    firstname : 'John',
    lastname: 'John',
    age: 21,
    hobbies: ['male', 'aya','music'],
    address:
    {
        street: '5gdrg',
        city: 'danascus',
        state: 'lo',
    }
}
console.log(person);

const JSON1 = JSON.stringify(person);
console.log (JSON1);
 