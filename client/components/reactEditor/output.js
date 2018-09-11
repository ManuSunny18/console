import React from 'react';

class Output extends React.Component {
  render() {
      let output = [];
      try {
       // let code = eval(this.props.codeString);
       let code = globalEval(this.props.codeString);
        switch(typeof code) {
            case "object":
                code = JSON.stringify(code)
                break;
            case 'undefined':
                code ="undefined"
                break;
            default:
                code = code
        } 
        output = <p className="success-msg">{code}</p>;
        } catch (e) {
            output =  <p className="err-msg">{e.message}</p>;
        }
    return (
        <div className="output-wrap flex-box">
            <b>Output : </b>{output}
        </div>
    )
  }
}
export default Output