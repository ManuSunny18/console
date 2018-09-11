const CodeMirror = require("codemirror");
var console=(function(oldCons){
    return {
        log: function(text){
            oldCons.log(text);
return text
            // Your code
        },
        info: function (text) {
            oldCons.info(text);
            // Your code
        },
        warn: function (text) {
            oldCons.warn(text);
            // Your code
        },
        error: function (text) {
            oldCons.error(text);
            // Your code
        }
    };
}(window.console));

//Then redefine the old console
window.console = console;
const showOutput = (e) =>{
    let input = jsConsole.jsEditor.getValue();
    //jsConsole.console.inner(eval(input))
    /*if(input ===""){
        alert("please write some code")
        return false;
    }*/
    let output = "";
    try {
        output = '<p class="success-msg">'+eval(input)+'</p>'; 
    } catch (e) {
        output = '<p class="err-msg">'+e.message+'</p>';
    }
    jsConsole.console.innerHTML += output;
    jsConsole.console.scrollTop = jsConsole.console.scrollHeight;

}
const home = ()=>{
    /*const root = document.createElement("div")
    root.innerHTML = `<p>Hello Webpack. home</p>`
    document.body.appendChild(root)*/
    //console.log(CodeMirror);
    jsConsole.editor = document.getElementById("jsEditor");
    jsConsole.console = document.getElementById("console");
    jsConsole.runBtn = document.getElementById("runCode");
    jsConsole.runBtn.addEventListener("click",showOutput,false)
    jsConsole.inputCode="";
    jsConsole.inputCode = jsConsole.editor.textContent;
    /*console = {};
    if(console){
        console.log = function(val){
            if(val){
                jsConsole.console.innerHTML += '<p class="">'+val+'</p>'
            }else{
                jsConsole.console.innerHTML ="";
            }
        }
    }
    */
    // jsConsole.console.innerHTML+'<p class="">'+param+'</p>'
    jsConsole.jsEditor = CodeMirror(jsConsole.editor, {
        lineNumbers: true,
    mode: "javascript",
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    theme: "monokai"
    });
    console.log(jsConsole,"console");
}
export{
    home
}