// file that will contain a single function 
// called highlight() that will parse the regular expression 
// & modify the displayed text.
// More about highlight(): this function should be
//  called when the user clicks the button in index.html. 
// To display the highlighted text,
//  it should use <span> around highlighted sections and modify 
//  the innerHTML content of the output section to display the text.
let regex = document.getElementById("reginput");
let text = document.getElementById("sentence");
let regout = document.getElementById("regoutput");
let error = document.getElementById("error");
let button = document.getElementById("button").addEventListener("click", highlight);

function highlight(){
    regout.innerHTML = "";
    if(regex.value.length < 1){
        error.classList.remove("d-none");
        return;
    }
    else{
     error.classList.add("d-none");   
    }
    
    let reg = RegExp(regex.value, 'g');

    let out = Array.from((text.value).matchAll(reg)).toString();
    let p = document.createElement("p");
    for (let i = 0; i < text.value.length; i++){
        let span = document.createElement('span');
        span.innerHTML = text.value[i];
        if (out.includes(text.value[i])){
            span.style.backgroundColor = "#FFFF00";
        }
        regout.appendChild(span);
    }
}