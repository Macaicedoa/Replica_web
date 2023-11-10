/* Dropdown-menu*/
let body = document.getElementsByTagName("body");
let selectOptions = document.getElementsByClassName("select");
let options = document.getElementsByClassName("options");
let arrow = selectOptions[0].getElementsByClassName("d-arrow");

body[0].addEventListener("click", function() {
    options[0].style = "visibility:hidden"
    arrow[0].style = "transform: rotate(0deg); transition-duration: 200ms;"
  });

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
    e.stopPropagation();
    arrow = this.getElementsByClassName("d-arrow");
    arrowStatus = getComputedStyle(arrow[0],null);
    console.log(arrowStatus.transform);
    if(arrowStatus.transform === 'none'){
      arrow[0].style= "transform: rotate(180deg); transition-duration: 200ms;"
    }else{
      arrow[0].style= "transform: rotate(0deg); transition-duration: 200ms;"
    }
  });
}





