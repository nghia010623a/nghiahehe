// let obj;
// async function ab()
// {
// let filejson= await fetch("datafindingnhom1.json");
// obj= await filejson.json();
// console.log(obj);
// }
// ab();

let params = new URLSearchParams(window.location.search);
let id = params.get("id");




let noidung=document.getElementsByClassName("noidung")[0];
async function uploadbao(bao)
{
    let b=bao;
    let div=document.createElement("div");
    div.style.display="flex";
    div.style.justifyContent="flex-start";
    div.style.marginLeft="50px";
    div.style.backgroundColor="rgba(246, 237, 243, 0.031)";
    div.style.gap="20px";
    div.style.marginBottom="30px";
    let divphu=document.createElement("div");
    divphu.style.display="flex";
    divphu.style.flexDirection="column";
    divphu.style.justifyContent="flex-start";
    let p=document.createElement("p");
    let span=document.createElement("span");
    let img=document.createElement("img");
    img.style.width="130px";
    img.style.height="130px";
    img.src=b.img;
    p.innerHTML=b.title;
    span.innerHTML=b.subtitle;
    div.classList.add("hoverr");
    divphu.append(p);
    divphu.append(span);
    div.append(img);
    div.append(divphu);
    noidung.appendChild(div);
}
async function upallbao()
{
    let a=await fetch("http://localhost:3000/news");
    let c=await a.json();

    for(let i=0;i<c.length;i++)
    {
       if(id==c[i].id)
       {
           
            uploadbao(c[i]);
            

       }
    }
}
upallbao();

let input=document.getElementById("timkiem2");
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        noidung.replaceChildren();
        timkiem();
    }});
   
    let id2;
async function timkiem()
{
    let valuee=input.value;
    let a=await fetch("http://localhost:3000/news");
    let b=await a.json();
    for(let i=0;i<b.length;i++)
    {
        for(let e=0;e<b[i].keyword.length;e++)
        {
            if(valuee==b[i].keyword[e])
            {
                id2=b[i].id;
            }
        }
        
    }
    for(let i=0;i<b.length;i++)
        {
           if(id2==b[i].id)
           {
               
                uploadbao(b[i]);
                
    
           }
        }

};

//cd /Users/nghia/Desktop/tkwgroup1/json
//npx json-server datafindingnhom1.json

let lggg=document.getElementById("lggg");

lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;