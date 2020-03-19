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
let regout = document.getElementById("regout");
let button = document.getElementById("button").addEventListener("click", highlight);


function highlight(){
    let reg = RegExp(regex.value, 'g');
    let out = (text.value).matchAll(reg);
    regout.value = out;
    console.log("yeet");
}