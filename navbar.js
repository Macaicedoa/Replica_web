'use-strict'
/* Dropdown-menu*/
let body = document.getElementsByTagName("body");
let navBar1 = document.getElementById("nav-1"); 
let selectOptions = document.getElementsByClassName("select");
let options = document.getElementsByClassName("options");
let arrow = selectOptions[0].getElementsByClassName("d-arrow");
let navButtons = document.getElementsByClassName("nav-buttons");
let buttons = navButtons[0].getElementsByTagName("button");
let overlayHeader = document.getElementsByClassName("dropdown-overlay");
let overlayBlack = document.getElementsByClassName("buttons-dropdown-overlay"); 
let dropdownButtons = ["buttons-dropdown-store","buttons-dropdown-games","buttons-dropdown-switch","","buttons-dropdown-play"];


for(let i=0;i<buttons.length;i++){ 
  buttons[i].id = i;
  buttons[i].addEventListener("click",function(e){
    options[0].style = "visibility:hidden"
    e.stopPropagation();
    
    let arrows = document.getElementsByClassName("d-arrow");
    for(let j = 0;j<arrows.length;j++){
      arrows[j].style= "transform: initial; transition-duration: 200ms;"
      overlayBlack[0].style = "display:none"
      let allOverlayHeader = overlayHeader[0].getElementsByClassName(dropdownButtons[j]);
      if((allOverlayHeader[0])){
        allOverlayHeader[0].style = "display:none";
        overlayBlack[0].style = "display:none"
      }
    }   

    let dropdownContent = overlayHeader[0].getElementsByClassName(dropdownButtons[Number([this.id])]);
    let arrowButtons = this.getElementsByClassName("d-arrow");
    let arrowStatus = getComputedStyle(arrowButtons[0],null);
    if(arrowStatus.transform === 'matrix(-1, 0, 0, -1, 0, 0,)'|| arrowStatus.transform ==='none'){
      arrowButtons[0].style= "transform: rotate(180deg); transition-duration: 200ms;"
      if(dropdownContent[0]){
          overlayBlack[0].style = "display:block"
          dropdownContent[0].style = "display:flex"
      }
    }
    else{
      arrowButtons[0].style= "transform: initial; transition-duration: 200ms;"  
      overlayBlack[0].style = "display:none"
      dropdownContent[0].style = "display:none"
    }
  });
}

overlayBlack[0].addEventListener("click", function() {
  let arrows = document.getElementsByClassName("d-arrow");
  for(let j = 0;j<arrows.length;j++){
    arrows[j].style= "transform: initial; transition-duration: 200ms;"
    overlayBlack[0].style = "display:none; transition-duration: 200ms;"
    let allOverlayHeader = overlayHeader[0].getElementsByClassName(dropdownButtons[j]);
    if((allOverlayHeader[0])){
      allOverlayHeader[0].style = "display:none; transition-duration: 200ms;";
      overlayBlack[0].style = "display:none; transition-duration: 200ms;"
    }
  } 
});

let closeButtons = overlayHeader[0].getElementsByClassName("close");
for(let i = 0;i<closeButtons.length;i++){
  closeButtons[i].addEventListener("click", function() {
    let arrows = document.getElementsByClassName("d-arrow");
    for(let j = 0;j<arrows.length;j++){
    arrows[j].style= "transform: initial; transition-duration: 200ms;"
    overlayBlack[0].style = "display:none; transition-duration: 200ms;"
    let allOverlayHeader = overlayHeader[0].getElementsByClassName(dropdownButtons[j]);
    if((allOverlayHeader[0])){
      allOverlayHeader[0].style = "display:none; transition-duration: 200ms;";
      overlayBlack[0].style = "display:none; transition-duration: 200ms;"
    }
  } 
  });
}

selectOptions[0].addEventListener("click", function(e){
  e.stopPropagation();
  let status = getComputedStyle(options[0]);
  if( status.visibility == "visible"){
      options[0].style = "visibility:hidden;"
      arrow[0].style = "transform: rotate(0deg); transition-duration: 200ms;"
  }else{
      options[0].style = "visibility:visible;"
      arrow[0].style = "transform: rotate(180deg); transition-duration: 200ms;"
      let pText = options[0].getElementsByTagName('li');
      let selectText = selectOptions[0].getElementsByTagName('p');
      for(let i=0;i<pText.length;i++){
        pText[i].addEventListener("click", function(){
          let dummyText = selectText[0].innerHTML.split("<");
          dummyText[0] = this.innerHTML;
          selectText[0].innerHTML = dummyText.join("<").replace(',','')
        });
      }
      let arrows = navButtons[0].getElementsByClassName("d-arrow");
        for(let j = 0;j<arrows.length;j++){
          arrows[j].style= "transform: initial; transition-duration: 200ms;"
        }   
  }  
});

body[0].addEventListener("click", function() {
  options[0].style = "visibility:hidden"
  arrow[0].style = "transform: initial; transition-duration: 200ms;"
  
});

