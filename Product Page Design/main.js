let image1 = document.getElementById('image1');
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function ()
{
    image1.src = "image1.png";

    for(bt of btn )
    {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function ()
{
    image1.src = "image2.png";
    for(bt of btn )
    {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function ()
{
    image1.src = "image3.png";
    for(bt of btn )
    {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}