
let url="https://fakestoreapi.com/products";

const button =document.getElementById("btn");
const imageContainer=document.getElementById("image-container")



let products = [];

let visibleimages=0;
let imagesPerload=2;
fetch(url)
.then((response)=>{
    return response.json();

})
.then((data)=>{
   products=data;
   loadimage();
})
.catch((err)=>{
    console.log(err)
})




function loadimage(){
    for(let i= visibleimages;i < imagesPerload+visibleimages && i<products.length;i++){

        const img=document.createElement("img")
        img.src=products[i].image;
        imageContainer.appendChild(img);
        
        

    }
    visibleimages+=imagesPerload;


    

    if(visibleimages>=products.length){
        button.style.display="none";
    }

}








