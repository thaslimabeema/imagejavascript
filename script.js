// function show()
// {
//     var a = parseInt(document.getElementById("t1").value);
//     var b = parseInt(document.getElementById("t2").value);
//     var sum =  a+b ;
//     var res=document.getElementById("sumpos");
//     res.innerHTML+=sum;
//     res.style.backgroundColor="blue";
// }


// function add(x,y)
// {
//     return x+y;
// }

var img=document.getElementById("image");
var imgs=["5.jpg","6.jpg","7.jpg"];
var counter=0;
setInterval(()=>next(),2000);

function next()
{
    
    if(counter==imgs.length-1)
    {
    counter=0;
    }
     else
    { 
    counter++; 
    }
    img.src=imgs[counter]; 
 
} 

function previous()
{
    if(counter==0)
    {
    counter=imgs.length;
    }
    counter--;
    img.src=imgs[counter];
}


