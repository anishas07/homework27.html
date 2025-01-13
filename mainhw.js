var scores=[30,8,2,9,4,10,15, 3];
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

//
 var numbers = [20, 5, 10, 6, 4, 1]
function myfunction(num) {
    return num + 5;
}
var myarray = numbers.map(myfunction);
document.getElementById("p4").innerHTML = myarray;