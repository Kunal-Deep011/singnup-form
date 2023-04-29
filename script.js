let  submitBtn = document.getElementById("btn");
submitBtn.addEventListener('click',popup);

//let profileContainer = document.querySelector(".profile-container");

let popupMsg = document.createElement("h4");
popupMsg.setAttribute('class','popup-msg');
popupMsg.innerText ="Error : All the fields are mandatory";


let popupMsg2 = document.createElement("h5");
popupMsg2.setAttribute('class','popup-msg2');
popupMsg2.innerText ="Successfully Signed Up!";

//let outBtn = document.getElementById("back-Off");


let token ="";

function popup(e) {
e.preventDefault();


const nameInput = document.getElementById("name").value.trim();
const emailInput = document.getElementById("email").value.trim();
const passwordInput = document.getElementById("password").value.trim();
const confirmInput = document.getElementById("confirm").value.trim();

if(nameInput === "" || emailInput ==="" || passwordInput === "" || confirmInput === ""){
   
    document.querySelector(".msg").appendChild(popupMsg)[0].style.display="block";
    
}
else{
    
    document.querySelector(".msg").appendChild(popupMsg).style.display="none";
    document.querySelector(".msg").appendChild(popupMsg2).style.display="block";
    
        /*setTimeout(()=>{
           document.getElementById("main-page").style.display ="none";
           profileContainer.style.display ="block";
        },1000);*/

        if(passwordInput == confirmInput){
          
            const userDetail = {
                nameInput,
                emailInput,
                passwordInput,
                accessToken: generateAccessToken()
              };
              // Save user object to local storage
              localStorage.setItem('userDetail', JSON.stringify(userDetail));
             setTimeout(() =>{
                window.location.href = "./home.html";
             },1000);
             
        }

        

       /* let nameArea =document.getElementById("para-1");
        let emailArea =document.getElementById("para-2");
        let passwordArea =document.getElementById("para-3");
        
        // Get user object from local storage
        const userDetail = JSON.parse(localStorage.getItem('userDetail'));
        
        
        nameArea.innerHTML = `<div id="para-1">Full Name : ${userDetail.nameInput}</div>`;
        emailArea.innerHTML = `<div id="para-2">Email : ${userDetail.emailInput}</div>`;
        passwordArea.innerHTML= `<div id="para-3">Password : ${userDetail.passwordInput}</div>`;      */
        
       

}

};



function generateAccessToken() {
    // Generate random 16-byte string for access token
    return [...Array(16)].map(() => Math.floor(Math.random() * 256).toString(16)).join('');
  }



/*outBtn.addEventListener('click',() =>{
    localStorage.clear();
    document.getElementById("main-page").style.display ="block";
    profileContainer.style.display ="none";
    document.querySelector(".msg").appendChild(popupMsg2).style.display="none";
    document.getElementById("name").value ="";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
});*/


const userDetail = JSON.parse(localStorage.getItem('userDetail'));


/*if(window.location.path === "/Signup-Form/index.html" && userDetail && userDetail.accessToken){

    window.location.href = "http://127.0.0.1:5500/Signup-Form/index.html";

}

if (window.location.pathname === '' && (!userDetail || !userDetail.accessToken)) {
    // Redirect to sign up page
    window.location.href = '/signup';
  }*/
let a = document.getElementById("alert1")
  function profile(){
    if(localStorage.getItem("accessToken")===null){
        a.innerHTML = "<div class='alertText'>Please Login first</div>"
       }
    else{
        window.location.href = "./home.html";
    }
};

console.log(generateAccessToken(accessToken));
