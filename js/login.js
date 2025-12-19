let btdangnhap=document.getElementById("btdangnhap");
let btregist=document.getElementById("regist");

let khoangcach=0;

btdangnhap.addEventListener("mouseover",function()
{
    if (($("#user1").val().length<1)||($("#pw").val().length<1))
    {
    khoangcach+=70;
    btdangnhap.style.transform =`translateX(${khoangcach}px) translateY(${khoangcach-140}px)`;
    }
});
let eyect=document.getElementById("eyect");
let input=document.getElementById("pw");
$("#pw").on("blur",function()
{
    eyect.style.transform="none";
    if (input.value.length > 0) {
        $("#labelpw").css("filter", "blur(20px)");
    }

});
$("#pw").on("focus",function()
{
    
   
        $("#labelpw").css("filter", "blur(0px)");
        $("#labelpw").css("color", "black");

    

});
$("#pw").on("keydown",function()
{
    eyect.style.transform="rotate(180deg)";

});
$("#pw").on("keyup",function()
{
    eyect.style.transform="none";

});
eyect.addEventListener("click",function()
{
    if (input.type === "password") {
        input.type = "text";   
    } else {
        input.type = "password"; 
    }
})
$("#user1").on("blur",function()
{
    if(this.value.length>0)
    {
        $("#user label").css("filter","blur(10px)");
        
    }
});
$("#user1").on("focus",function()
{
    if(this.value.length>0)
    {
        $("#user label").css("filter","blur(0px)");

    }
});
btregist.addEventListener("click",function()
{
    document.body.style.transform="rotateY(170deg)"
    document.body.style.filter="blur(17px)"
    setTimeout(() => {
        window.location.href = "/html/regist.html";
    }, 1010);
});

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
let pw1=document.getElementById("pw");

btdangnhap.addEventListener("click", function () {

    const usernameInput = document.getElementById("user1").value.trim();
    const passwordInput = document.getElementById("pw").value.trim();
  
    const userData = JSON.parse(localStorage.getItem(usernameInput));
  
    if (!userData){
      warningp.innerHTML = "Tài khoản không tồn tại trên hệ thống";
      document.body.append(warning);
  
      setTimeout(() => {
        warning.remove();
      }, 3380);
      return;
    }
  
    if (userData.password !== passwordInput) {
      warningp.innerHTML = "Mật khẩu sai, vui lòng thử lại!";
      document.body.append(warning);
  
      setTimeout(() => {
        warning.remove();
      }, 3380);
      return;
    }
    localStorage.setItem("pwcms",JSON.stringify("hehe"));
    localStorage.setItem(
        "userhientai",
        JSON.stringify({
          user: usernameInput,
          password: passwordInput
        })
      );    window.location.href = "/html/loading.html";
  });
  