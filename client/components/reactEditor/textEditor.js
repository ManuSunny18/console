import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');

class TextEditor extends React.Component {
  constructor(props){
    super(props)
    this.state={
      codeState:"",
      index:0,
      currentCode:""
    }
  }
  updateCode(val){
    this.setState({
      codeState:val
    })
  }
  runCode(e){
    this.props.runCode(this.state.codeState);
    document.body.scrollTop = document.body.scrollHeight;
  }
  onNewLine(e) {
    console.log("Enter key was pressed!");
  }
  componentDidMount(){}
  checkHistoryUp(e){
    //console.log(this.props.codeLib);
    let codeIndex =(this.state.index > 0)?this.state.index:this.props.codeLib.length;
    if(codeIndex > 0){
      codeIndex  -= 1
    }
    let newCode = this.props.codeLib[codeIndex];
    this.setState({
      index:codeIndex,
      codeState:newCode
    })
    
  }
  checkHistoryDown(e){
    let codeIndex =(this.state.index >= this.props.codeLib.length)?0:this.state.index;
    if(codeIndex > 0){
      codeIndex  += 1
    }
    let newCode = this.props.codeLib[codeIndex];
    this.setState({
      index:codeIndex,
      codeState:newCode
    })

  }

  render() {
    const options = {
        lineNumbers: true,
        mode: 'javascript',
        extraKeys: {
          'Enter': this.runCode.bind(this),
          'Up':this.checkHistoryUp.bind(this),
          'Down':this.checkHistoryDown.bind(this)
        }
    };
    return <CodeMirror
        value={this.state.codeState}
        ref="editorField"
        options={options}
        onBeforeChange={(editor, data, value) => {
          this.setState({codeState:value});
        }}
        onChange={(editor, data, value) => {
        }}
      />
  }
}
export default TextEditor;

