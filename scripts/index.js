// Add the coffee to local storage with key "coffee"
//https://masai-mock-api.herokuapp.com/coffee/menu

async function getData(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

    let menu = document.getElementById("menu")

    let res = await fetch(url)

    let data = await res.json();
    toAppend(data)
    //console.log(data)
   
}
getData()

function toAppend(data){
    let menu = document.getElementById("menu");
    
    for(let i=0; i<data.length; i++)
    {
       
        let img = document.createElement("img")
        img.src="data[i].image"
        menu.append(img)
    }
}

