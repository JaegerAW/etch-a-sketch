const container = document.querySelector(".container");
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");








/*create a variable to target container*/
/*create a variable to get number input from user*/
/*create a variable to target submit button to generate the grid*/

/*create a variable to store input value from user*/

function createGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
      
    let value=input.value;
    if (value > 100) {alert("Please Input a number below 100")}
    else {for (let i = 0; i < value; i++) {
       
        
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("gridrow")
         
        container.appendChild(createDivRow);
    }
    
}
}




function createGridItems() {
    const value = input.value;
        const divRows = document.querySelectorAll(".gridrow");
    divRows.forEach(divRow =>{    
        for (let i = 0; i < value; i++) {
        const createDivItem = document.createElement("div");
        createDivItem.classList.add("griditem")
        //when i call createGridItems, i immediately give it a class .griditem
        //when i call createGridItems, i immediately give it an eventlistener so every griditems gets it
        /*give class hovertrail which gives the trail black color
        createDivItem.addEventListener("mouseover", ()=>{createDivItem.classList.add("hovertrail")})
        divRow.appendChild(createDivItem);
        }
    })*/
    //give each div random rgb values when mouseover
    createDivItem.addEventListener("mouseover", ()=>{createDivItem.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`})
    divRow.appendChild(createDivItem);
    }
    })
};



/*function createGridItems() {  
    const value = input.value;
    //here you select the rows as .gridrow elements
    const divRows = document.querySelectorAll(".gridrow");    
    //iterate over each one of them
    divRows.forEach(divRow =>{
        //and append to it a new div for as many times as the value fetched from the input element
        for(let i=0;i < value; i++){
          const createDivItem = document.createElement("div");
          createDivItem.textContent = "aa";
          divRow.appendChild(createDivItem);
        }        
    });       
}
*/


function removeGrid() {
    const createDivRow = document.querySelector("div");
container.removeChild(createDivRow);
}


submitBtn.addEventListener("click", createGrid);
submitBtn.addEventListener("click", createGridItems);


/*
submitBtn.addEventListener("click", (()=>{


    let value = input.value;
    for (let i = 0; i < value; i++) {
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("div");
        createDivRow.textContent = i;
        container.appendChild(createDivRow);
    };
}));
*/

/*create a variable to create the row div*/
/*create a variable to create the square div*/


/* when user input 20, 
the function should create a 20x20 grid, 20 rows of 20 squares*/


