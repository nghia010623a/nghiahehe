
let btdangnhap=document.getElementById("btdangnhap");
btdangnhap.addEventListener("click",function()
{
    document.body.style.transform="rotateY(180deg)"
    document.body.style.filter="blur(17px)"

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1210);});

let warning=document.createElement("div");
warning.style.position="absolute";
warning.style.border="2px solid white";
warning.style.backgroundColor="rgb(241, 9, 9)";
warning.style.borderRadius="10px";
warning.style.padding="5px";
warning.style.transition="0.7 all ease";
warning.style.boxShadow="0 0 45px rgb(255,255,255)";
warning.style.top="40px";
warning.style.right="59px";
let warningp=document.createElement("p");
warningp.style.color="white"
warningp.style.fontSize="17px";
warningp.style.transition="0.7 all ease";

warningp.style.whiteSpace="pre"
warning.append(warningp);
let pw=document.getElementById("pw");
// if (pw.textContent.length<1)
// {
//     warningp.textContent="Mật khẩu phải lớn hơn 8 ký tự";
//     document.body.append(warning);

// }

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
let cfpw=document.getElementById("cfpw");
function save()
{
    let checkexist;
    checkexist=JSON.parse(localStorage.getItem(document.getElementById("user").value));
    if (checkexist!=null)
    {
        warningp.innerHTML = `     Tài khoản đã tồn tại trên hệ thống   `;
        document.body.append(warning);
    
        setTimeout(() => {
            warning.remove();
        }, 3380);
    }
    else {
    const userData = {
        // username: document.getElementById("user").value,
        password: document.getElementById("pw").value,
        ngaytao:new Date()
      };
      localStorage.setItem(document.getElementById("user").value, JSON.stringify(userData));

    }
    
}
let accept=document.getElementById("accept");
function checkpw()
    {
        
            let message = [];
       
        if (pw.value.length < 8) {
            message.push(`        Mật khẩu phải lớn hơn 8 ký tự!  `);
        }
        
        if (!/[A-Z]/.test(pw.value)) {
            message.push(`        Mật khẩu phải có ít nhất 1 ký tự in hoa!  `);
        }
        
        if (!/[0-9]/.test(pw.value)) {
            message.push(`        Mật khẩu phải có ít nhất 1 chữ số!  `);
        }
        if(accept.checked!=true)
        {
            message.push(`        Bạn chưa đồng ý với các điều kiện của chúng tôi!  `);

        }
            
        
        if (message.length > 0) {
            warningp.innerHTML = message.join("<br><br>");
            document.body.append(warning);
        
            setTimeout(() => {
                warning.remove();
            }, 3380);
    }
    else save();
}
$(document).ready(function() {
    $("#btdangky").on("click", checkpw);
}); 