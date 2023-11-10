/* Dropdown-menu*/
let body = document.getElementsByTagName("body");
let selectOptions = document.getElementsByClassName("select");
let options = document.getElementsByClassName("options");
let arrow = selectOptions[0].getElementsByClassName("d-arrow");

selectOptions[0].addEventListener("click", function(e){
    e.stopPropagation();
    let status = getComputedStyle(options[0]);
    if( status.visibility == "visible"){
        options[0].style = "visibility:hidden;"
        arrow[0].style = "transform: rotate(0deg); transition-duration: 200ms;"
    }else{
        options[0].style = "visibility:visible;"
        arrow[0].style = "transform: rotate(180deg); transition-duration: 200ms;"
    }  
  });

/*Rotación arrows */

let navButtons = document.getElementsByClassName("nav-buttons");
let buttons = navButtons[0].getElementsByTagName("button");

for(i=0;i<buttons.length;i++){ 
  buttons[i].addEventListener("click", function(e){
    options[0].style = "visibility:hidden"
    e.stopPropagation();
    let arrows = document.getElementsByClassName("d-arrow");
    for(j = 0;j<arrows.length;j++){
      arrows[j].style= "transform: initial; transition-duration: 200ms;"
    }   
    arrowButtons = this.getElementsByClassName("d-arrow");
    arrowStatus = getComputedStyle(arrowButtons[0],null);
    if(arrowStatus.transform === 'matrix(-1, 0, 0, -1, 0, 0,)'|| arrowStatus.transform ==='none'){
      arrowButtons[0].style= "transform: rotate(180deg); transition-duration: 200ms;"
    }
    else{
      arrowButtons[0].style= "transform: initial; transition-duration: 200ms;"  
    }
  });
}

body[0].addEventListener("click", function() {
  options[0].style = "visibility:hidden"
  arrow[0].style = "transform: initial; transition-duration: 200ms;"
  arrowButtons[0].style = "transform: initial; transition-duration: 200ms;"
});




