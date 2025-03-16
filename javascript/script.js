//const image = document.querySelectorAll(".box");
const image = document.querySelectorAll(".box");

for (let i=0; i<image.length; i++)
{
    image[i].addEventListener("mouseover", function() 
    {
        image[i].style.border = "10px solid rgb(255, 129, 129)";
    });

    image[i].addEventListener("mouseout", function() 
        {
            image[i].style.border = "none";
        });
}
