
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

 






  


   //function random Img
   function randomImgs(){

      if(backgroundOption===true){
          
         backgroundInterval= setInterval(() => {
         // get random number
      let randomNumber=Math.floor(Math.random() * imgsArray.length);
          // change background Image url
          landindPage.style.backgroundImage='url("imgs/'+imgsArray[randomNumber] +'")';
      },10000);
   }
}

  


//select skills selecor 
let ourskills=document.querySelector(".skills");
window.onscroll=function(){

   //skills offest top
   let skillsOffsetTop=ourskills.offsetTop;
  // this.console.log(skillsOffsetTop);
  //outer heght 
  let skillsouterHeight=ourskills.offsetHeight;
  //window height
  let windowHeight=this.innerHeight;
  
  // window scrollTop
  let windowScrollTop=this.pageYOffset;
  if(windowScrollTop > (skillsOffsetTop+skillsouterHeight-windowHeight)){

     let allskills=document.querySelectorAll(".skills .skill-box .skill-progress span");
     allskills.forEach(skill=>{
        skill.style.width=skill.dataset.progress;
     })
  }
};


//create popu the Image
let ourGallery=document.querySelectorAll(".gallery img");

ourGallery.forEach(img=>{
img.addEventListener("click",(e)=>{
//creat overlay elemet 
let overlay=document.createElement("div");

 
//add class to overlay
overlay.className='popup-overlay'





//append overlay o the body
document.body.appendChild(overlay);
// create the popup
let popupBox=document.createElement("div");

//add class to popup Box
popupBox.className='popup-box';
//create the Image

////////////////////
if(img.alt !==null){
   //create heading 
   let imgHeading=document.createElement("h3");
   //create text for heading
   let imgText=document.createTextNode(img.alt);
   //append the text to the heading
   imgHeading.appendChild(imgText);
   //append the heading to the popup box 
   popupBox.appendChild(imgHeading);
}
///////////////////////
let popupImage=document.createElement("img");

//set Image source
popupImage.src=img.src;
// add Image to popup box
popupBox.appendChild(popupImage);
//append the popup box to body
document.body.appendChild(popupBox);
/////////////

//create the close span
let closeButton=document.createElement("span");

//create the close button text
let closeButtonText=document.createTextNode("x");

closeButton.appendChild(closeButtonText)


// add class to close buuton
closeButton.className='close-button';
//add close button to the popup box
popupBox.appendChild(closeButton);
});
});
//close popup
document.addEventListener("click",function(e){
   if(e.target.classList=='close-button'){
      //remove the current popup
      e.target.parentNode.remove();
      document.querySelector(".popup-overlay").remove();
   }
});

//select all bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullet");


//select all links
const alllinks=document.querySelectorAll(".links a");
 


function scrollToSomeWhere(elements){
   elements.forEach(ele=>{
      ele.addEventListener("click",(e)=>{
   
         e.preventDefault();//تمنع التصرف الافتراضي
   
         document.querySelector(e.target.dataset.section).scrollIntoView({
   
            behavior: 'smooth'
         });
      });
   });
   
}
scrollToSomeWhere(allBullets);
scrollToSomeWhere(alllinks);


//handle active state
function handleActive(ev){
   ev.target.parentElement.querySelectorAll("active"),forEach(element=>{
      element.classList.remove("active");
   });
   ev.target.classList.add("active");


}











 
    