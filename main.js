var images = ["All.JPG", "Dad.jpg", "Mom.JPG", "Me.jpg"];
var names = ["Family Book", "Nakshatra Gupta", "Kanchan Sah Gupta", "Shashwat Gupta"];
var i = 0;
function nextpic()
{
    if(i > 3)
    {
        i = 0;
    }
    document.getElementById("images").src = images[i];
    document.getElementById("names").innerHTML = names[i];
    i++;
}