let params = new URLSearchParams(window.location.search);
let id = params.get("id");
console.log(id);

let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let div0=document.createElement("div");

let p=document.createElement("p");
let p1=document.createElement("p");

let span=document.createElement("span");
div1.style.display="flex";
div1.style.borderRadius="30px";
div1.style.flexDirection="column";
div1.style.height="600px";
div1.style.justifyContent="end";
geturlanh();
p.style.color="rgba(0, 0, 0, 0.656)"
p.style.fontSize="56px"
span.style.fontSize="17px";
span.style.color="gray;";
span.style.marginBottom="40px";
p1.style.color="black";
p1.style.fontSize="23px";
p1.style.lineHeight="100px";
div2.style.borderRadius="30px";
div2.style.backdropFilter="blur(30px)";
div2.style.backgroundColor="rgb(252, 236, 251)";
div2.style.padding="20px";
div2.appendChild(p);
div2.appendChild(span);
div3.appendChild(p1);
div1.appendChild(div2);
div0.appendChild(div1);
div0.appendChild(div3);
let displaybao1=document.getElementsByClassName("displaybao")[0];
displaybao1.appendChild(div0);

let lggg=document.getElementById("lggg");

lggg.textContent=JSON.parse(localStorage.getItem("userhientai")).user;
async function geturlanh()
{
    let a=await fetch("http://localhost:3000/news");
    let b= await a.json();
    for(let i=0;i<b.length;i++)
    {
        if(b[i].dataid==id)
        {
            div1.style.background = `url(${b[i].img}) no-repeat center/cover`;
            p.innerHTML=b[i].title;
            span.innerHTML=b[i].tacgia;
            p1.innerHTML=b[i].content;
        }
    }
}



