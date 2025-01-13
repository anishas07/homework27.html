var numbers= [20, 5, 10, 6, 4, 1]
function myfunction(num)
{
    return num * 10;
}
var myarray =numbers.map(myfunction);
document.getElementById('p1').innerHTML = myarray;