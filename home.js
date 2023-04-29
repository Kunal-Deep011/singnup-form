let nameArea =document.getElementById("para-1");
        let emailArea =document.getElementById("para-2");
        let passwordArea =document.getElementById("para-3");
        
        // Get user object from local storage
        const userDetail = JSON.parse(localStorage.getItem('userDetail'));

        if (!userDetail || !userDetail.accessToken) {
            // Redirect to sign up page
            window.location.href = './index.html';
          }
        
        
        nameArea.innerHTML = `<div id="para-1">Full Name : ${userDetail.nameInput}</div>`;
        emailArea.innerHTML = `<div id="para-2">Email : ${userDetail.emailInput}</div>`;
        passwordArea.innerHTML= `<div id="para-3">Password : ${userDetail.passwordInput}</div>`;  
        accessToken = localStorage.getItem("accessToken");


        let outBtn = document.getElementById("back-Off");
        let profileContainer = document.querySelector(".profile-container")

        outBtn.addEventListener('click',() =>{
            window.location.href = './index.html';
            localStorage.clear();
            document.getElementById("main-page").style.display ="block";
            profileContainer.style.display ="none";
            document.querySelector(".msg").appendChild(popupMsg2).style.display="none";
            document.getElementById("name").value ="";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirm").value = "";
        });
let g= document.getElementById("green");
        function signUp(){
            if(localStorage.getItem("accessToken")!==null){
                g.innerHTML = "<div class='greenText'>User Already login</div>"
              }
           else{
               window.location.href = "./home.html";
           }
        }
        console.log(accessToken);