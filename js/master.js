
let mainColors=localStorage.getItem("color-option");

  

let backgroundOption=true;
let backgroundInterval;

let backgroundLocalItem=localStorage.getItem("background-option");

if(backgroundLocalItem !== null){
     if(backgroundLocalItem==='true'){
      backgroundOption=true;
     }else{
      backgroundOption=false;
     } 
   
     document.querySelectorAll(".random-background span").forEach(element =>{
     element.classList.remove("active");
     });
}
var x=1, y=2,
z=
x+y;

if(mainColors!==null){

   document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));
 
   document.querySelectorAll(".color-list li").forEach(element=>{
       element.classList.remove("active");
    
      if(element.dataset.color===mainColors)
        element.classList.add("Active");

   });
}



let landindPage=document.querySelector(".landing-page");

let imgsArray=["01.jfif" , " 02.jfif" , "03.jfif ", "04.jfif" ,"05.jfif","06.jfif"];


  const colorlsLi=document.querySelectorAll(".colors-list li");

colorlsLi.forEach(li =>{
   li.addEventListener("click",(e)=>{
       
  
      document.documentElement.style.setProperty('--main-color',e.target.dataset.color );
     
      localStorage.setItem('color-option',e.target.dataset.color);
    
    
      handleActive(e);
   });
});
   document.querySelector(".setting-box").onclick= function(){
      if(document.querySelector(".setting-box").style.left=='-240px')
      {
         document.querySelector(".setting-box").style.left=0;
      }
      else
      {
         document.querySelector(".setting-box").style.left='-240px'; 
      }   
 }


 const randombackgroundLi=document.querySelectorAll(".random-Background span");

 randombackgroundLi.forEach(spans =>{
    spans.addEventListener("click" , (e)=>{

      e.target.parentElement.querySelectorAll(".active").forEach(element=>{
         element.classList.remove("active");
      }) ; 
      e.target.classList.add("active");
      if(e.target.dataset.background==="yes"){ 

       backgroundOption=true;
       randomImgs();
       localStorage.setItem("background-option",true);
      }
      else
      {
      localStorage.setItem("background-option",false); 
      backgroundOption=false;
      clearInterval(backgroundInterval);
      }
    });
 });

 






  


   
   function randomImgs(){

      if(backgroundOption===true){
          
         backgroundInterval= setInterval(() => {
      
      let randomNumber=Math.floor(Math.random() * imgsArray.length);
       
          landindPage.style.backgroundImage='url("imgs/'+imgsArray[randomNumber] +'")';
      },10000);
   }
}

  



let ourskills=document.querySelector(".skills");
window.onscroll=function(){
   let skillsOffsetTop=ourskills.offsetTop;
  let skillsouterHeight=ourskills.offsetHeight;
  let windowHeight=this.innerHeight;
  let windowScrollTop=this.pageYOffset;
  if(windowScrollTop > (skillsOffsetTop+skillsouterHeight-windowHeight)){
     let allskills=document.querySelectorAll(".skills .skill-box .skill-progress span");
     allskills.forEach(skill=>{
        skill.style.width=skill.dataset.progress;
     })
  }
};

let ourGallery=document.querySelectorAll(".gallery img");
ourGallery.forEach(img=>{
img.addEventListener("click",(e)=>{ 
let overlay=document.createElement("div");
overlay.className='popup-overlay'





document.body.appendChild(overlay);

let popupBox=document.createElement("div");

popupBox.className='popup-box';


if(img.alt !==null){

   let imgHeading=document.createElement("h3");

   let imgText=document.createTextNode(img.alt);

   imgHeading.appendChild(imgText);
 
   popupBox.appendChild(imgHeading);
}
///////////////////////
let popupImage=document.createElement("img");


popupImage.src=img.src;

popupBox.appendChild(popupImage);

document.body.appendChild(popupBox);
/////////////


let closeButton=document.createElement("span");


let closeButtonText=document.createTextNode("x");

closeButton.appendChild(closeButtonText)


// add class to close buuton
closeButton.className='close-button';

popupBox.appendChild(closeButton);
});
});

document.addEventListener("click",function(e){
   if(e.target.classList=='close-button'){
 
      e.target.parentNode.remove();
      document.querySelector(".popup-overlay").remove();
   }
});

const allBullets=document.querySelectorAll(".nav-bullets .bullet");



const alllinks=document.querySelectorAll(".links a");
 


function scrollToSomeWhere(elements){
   elements.forEach(ele=>{
      ele.addEventListener("click",(e)=>{
   
         e.preventDefault();
   
         document.querySelector(e.target.dataset.section).scrollIntoView({
   
            behavior: 'smooth'
         });
      });
   });
   
}
scrollToSomeWhere(allBullets);
scrollToSomeWhere(alllinks);



function handleActive(ev){
   ev.target.parentElement.querySelectorAll("active"),forEach(element=>{
      element.classList.remove("active");
   });
   ev.target.classList.add("active");


}











 
    