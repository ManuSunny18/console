
//import {home} from './components/editor/index.js';
import React from "react";
import ReactDOM from "react-dom";
import Home from './components/reactEditor/index.js';
import styles from './scss/layout.scss';
if(window && !window.jsConsole){
    window.jsConsole={};
    window.globalEval = eval;
    var console=(function(consoleReference){
        return {
            log: function(text){
                consoleReference.log(text);
                return text
            },
            info: function (text) {
                consoleReference.info(text);
                return text
            },
            warn: function (text) {
                consoleReference.warn(text);
                return text
            },
            error: function (text) {
                consoleReference.error(text);
                return text
            }
        };
    }(window.console));
    window.console = console;
}
ReactDOM.render(<Home />, document.getElementById("mainContent"));