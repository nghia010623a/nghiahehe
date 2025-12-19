let chonfile=document.getElementById("chonfile");
let file=document.getElementById("file");

let warning=document.createElement("div");
warning.style.position="absolute";
warning.style.border="2px solid white";
warning.style.backgroundColor="rgb(241, 9, 9)";
warning.style.borderRadius="10px";
warning.style.padding="5px";
// warning.style.transition="0.7 all ease";
warning.style.boxShadow="0 0 45px rgb(255,255,255)";
warning.style.top="40px";
warning.style.right="59px";
let warningp=document.createElement("p");
warningp.style.color="white"
warningp.style.fontSize="17px";
warningp.style.transition="0.7s all ease";
// 
warningp.style.whiteSpace="pre"
warning.append(warningp);
let pw=document.getElementById("pw");

let style=document.createElement("style");
style.innerHTML=`
@keyframes effect
{
    0%   { width: 100%; }
    100% { width: 0%; }
}
    .effect1
    {
    animation: effect 4s ease forwards;
    }`;
document.head.append(style);
let process=document.createElement("div");
process.style.position="absolute";
process.style.top="0px";
process.style.left="0px";

process.style.height = "6px";
process.style.width = "100%";
process.style.borderRadius="20px";
process.style.backgroundColor="rgb(255, 255, 255)";
process.classList.add("effect1");
warning.append(process);

let img=null;
chonfile.addEventListener("click",function()
{
    file.click()
});
file.addEventListener("change",function(e)
{
    img=e.target.files[0];
});
$("#dangtintuc").on("click", async function()
{
    if($("#tieude").val().length<1)
    {
        warningp.innerHTML = `     Tiêu đề không được để trống   `;
        document.body.append(warning);
        setTimeout(() => {
            warning.remove();
        }, 3380); 
    }
    else if($("#phude").val().length<1)
        {
            warningp.innerHTML = `     Phụ đề không được để trống   `;
            document.body.append(warning);
            setTimeout(() => {
                warning.remove();
            }, 3380); 
        }
        else if($("#noidungbaiviet").val().length<1)
            {
                warningp.innerHTML = `     Nội dung không được để trống   `;
                document.body.append(warning);
                setTimeout(() => {
                    warning.remove();
                }, 3380); 
            }
            else if($("#tacgia").val().length<1)
                {
                    warningp.innerHTML = `     Tác gỉa không được để trống   `;
                    document.body.append(warning);
                    setTimeout(() => {
                        warning.remove();
                    }, 3380); 
                }
               else if($("#keyword").val().length<1)
                    {
                        warningp.innerHTML = `     KeyWord không được để trống   `;
                        document.body.append(warning);
                        setTimeout(() => {
                            warning.remove();
                        }, 3380); 
                    }
                    else
                    {
                        
                        let title=document.getElementById("tieude").value;
                        let subtitle=document.getElementById("phude").value;
                        let content=document.getElementById("noidungbaiviet").value;
                        let tacgia=document.getElementById("tacgia").value;
                        let keyword=document.getElementById("keyword").value;
                        let dataid=Math.random();
                        const data={title,subtitle,content,tacgia,keyword,img,dataid};
                        await fetch("http://localhost:3000/news", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
                            
                        }

                    }
        
);

$("#back").on("click",function()
{
    window.location.href="/html/home.html";

});




