var scores =[6,7,3,4,9,10,11];
document.getElementById("p1").innerHTML = scores;

function srt()
{
    scores.sort(function(a,b){return a-b});
    document.getElementById("p2").innerHTML =scores;
}

function rv()
{
    scores.sort(function(a,b){return b-a});
    document.getElementById("p3").innerHTML = scores;
}