let getData =async (url) => {
    
    let res= await fetch(url)
    
    let data =await res.json()
    
     console.log(data.meals)
       data=data.meals;
       return data;
}

let append=(data,container)=>{
    data.forEach((el)=>{
        let box=document.createElement("div")
            
            let img=document.createElement("img")
            img.src=el.strMealThumb;

            let h1=document.createElement("h1")
            h1.innerText=el.strTags

            box.append(img,h1);
            document.getElementById("container").append(box)
    })

}
export {getData,append}