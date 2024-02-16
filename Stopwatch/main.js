let [seconds, mintus, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch()
{
    seconds++;
    if(seconds == 60)
    {
        seconds = 0;
        mintus++;
        if(mintus == 60)
        {
            mintus = 0;
            hours++;
        }
    }
    let h = hours <10 ? "0" + hours : hours;
    let m = mintus <10 ? "0" + mintus : mintus;
    let s = seconds <10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchstart()
{
    if(timer != null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function watchstop()
{
    clearInterval(timer);
}

function watchreset()
{
    clearInterval(timer);
    [seconds, mintus, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}