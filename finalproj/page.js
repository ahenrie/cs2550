let contentSections=["home", "info", "contact", "log"];
let navElements=document.querySelectorAll('nav > button')

for (let i = 0; i < navElements.length; ++i) {
      
        navElements[i].addEventListener("click", function(ev){  
          //remove selected class from all menu items
          for (let i = 0; i < navElements.length; i++) {
            navElements[i].classList.remove("selected");
          }
          //add selected class to menu item that was clicked
          let el = ev.currentTarget;
           el.classList.add('selected');

          //now hide all content sections
          for(section of contentSections){
             let el = document.getElementById(`${section}Section`);
             el.classList.remove("show");
             el.classList.add("hide");
           }

          //now show the one content section
          let name=`${el.name}Section`
          
          let showEl=document.getElementById(name);
          showEl.classList.add('show');
          //showEl.classList.remove("hide");

   
        });
     
  }