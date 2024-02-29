let words=document.querySelectorAll(".word")
words.forEach( (word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.appendChild(span);
    });
});

let currentWordIndex=0;
let maxWordIndex=words.length-1;
words[currentWordIndex].style.opacity="1"

let changeText=()=>{
    let cureentWord=words[currentWordIndex];
    let nextWord=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];

    Array.from(cureentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });

    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340+i*80);
    });
    currentWordIndex=currentWordIndex===maxWordIndex?0:currentWordIndex+1;
}

changeText();
setInterval(changeText,3000)


//Circle Skill------------------------------------------------------------------------->

const circles=document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor((dots*marked)/100);
    var points="";
    var rotate=360/dots;

    
    for(let i=0;i<dots;i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    //console.log(points);
    elem.innerHTML=points;
    const pointsMarked=elem.querySelectorAll('.points')
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
});


//Active Menu------------------------------------------------------------------------->

let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');


function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY+97<section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar ------------------------------------------------------------------------->

const header=document.querySelectorAll('heade');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})

//toggle  navbar ------------------------------------------------------------------------->
let menuIcon=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// Parallex ------------------------------------------------------------------------->
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items")
        }
    });
});

const scollScale=document.querySelectorAll(".scroll-scale");
scollScale.forEach((el)=>observer.observe(el));

const scollBottom=document.querySelectorAll(".scroll-bottom");
scollBottom.forEach((el)=>observer.observe(el));

const scollTop=document.querySelectorAll(".scroll-top");
scollTop.forEach((el)=>observer.observe(el));



/*  contact form js part */
// const form=document.querySelector('form');
// const fullName=document.getElementById("name");
// const email=document.getElementById("email");
// const phone=document.getElementById("phone");
// const message=document.getElementById("message");
// const subject=document.getElementById("subject");

// function sendEmail(){
//     const bodyMessage=`Full Name: ${fullName.value} <br> Email:${email.value}<br>
//     Phone Number:${phone.value} <br> Message :${message.vaule}`
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "aabduljamalwahid@gmail.com",
//         Password : "EC232C0F7CE04A5A4F49A4F0D4DDB8C51F80",
//         To : 'aabduljamalwahid@gmail.com',
//         From : "aabduljamalwahid@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => {
//         if(message=="OK"){
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message Sent Successfully!",
//                 icon: "success"
//               });
//         }
//       }
//     );
// }

// function checkInputs(){
//     const items=document.querySelectorAll(".item");

//     for(const item of items){
//         if(item.value==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if(items[1].value !=  ""){
//             checkEmail();
//         }
//         items[1].addEventListener("keyup",()=>{
//             checkEmail();
//         })

//         item.addEventListener("keyup",()=>{
//             if(item.value !=" "){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }


   
// }

// function checkEmail(){
//     const emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//     if(!email.value.match(emailRegex)){
//         email.classList.add("error");
//         email.parentElement.classList.add("error");
//     }else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     checkInputs();
//     sendEmail();
// })
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email:${email.value}<br>
    Phone Number:${phone.value} <br> Message :${message.value}`;
    Email.send({
        SecureToken:"eed30497-3de1-4e8e-8743-a821514b50a1",
        To: 'aabduljamalwahid@gmail.com',
        From: "aabduljamalwahid@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    let isValid = true;
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (item.value.trim() === "") {
            setError(item, true);
            isValid = false;
        } else {
            setError(item, false);
        }
    });

    if (!checkEmail()) {
        isValid = false;
    }

    return isValid;
}

function setError(element, isError) {
    if (isError) {
        element.classList.add("error");
        element.parentElement.classList.add("error");
    } else {
        element.classList.remove("error");
        element.parentElement.classList.remove("error");
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (!email.value.match(emailRegex)) {
        setError(email, true);
        return false;
    } else {
        setError(email, false);
        return true;
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    if (checkInputs()) {
        sendEmail();
    }
});
