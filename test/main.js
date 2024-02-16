const Url = "https://jsonplaceholder.typicode.com/users";

const user = document.getElementById("users");
async function getAllUsers()
{
    const response = await fetch(Url);
    var data = await response.json();
    return data;
    console.log(data);
}
getAllUsers();

async function showData()
{
    const users =  await getAllUsers();
    for (var i = 0; i <10; i++)
    {
        const p = document.createElement('p');
        p.innerText =users[i].name;
        user.appendChild(p);
    }
}
showData();

