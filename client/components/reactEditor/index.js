import React from 'react';
import rightArrow from '../../images/keyboard-right-arrow.svg';
import rightArrowActive from '../../images/keyboard-right-arrow-active.svg';
import Output from "./output.js";
import TextEditor from './textEditor.js';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            codeState:[],
            autoComplete:[],
            currentCode:"",
            successFullOuts:""
        }
    }
    processCode(newCode){
        let data = this.state.codeState;
        data.push(newCode);
        this.setState({
            codeState:data
        })
    }
    updateSuccessFullCode(string){
        let newString = this.state.successFullOuts+string;
        this.setState({
            successFullOuts:newString
        })
    }

  render() {
    let OutputUI = [];
    const _this = this;
    let prevCodesUI = this.state.codeState.map(function(item,index){
        return <div className="prev-code">
                <Output codeString={item} />
                <div className="flex-box code-out">
                    <div className="icon-block">
                        <img src={rightArrow}/>
                    </div>
                    <div className="editor-read-only">
                        {item}
                    </div>
                </div>


            </div>
    })
    return (<div className="wrap-block">
        <header className="app-header">
            <h2>JSCONSOLE</h2>
        </header>

        <section className="history-block">
            {prevCodesUI}
        </section>
        <section>
            <div className="editer-block flex-box" >
                <div className="icon-block">
                    <img src={rightArrowActive}/>
                </div>
                <TextEditor codeLib={this.state.codeState} runCode={this.processCode.bind(this)} />
            </div>
            <div>
                <div>hints:</div>
                <ol>
                    <li>'Enter' to run the code</li>
                    <li>'shift + Enter' for new line</li>
                    <li>'up' & 'down' arrows to get the previous entries</li>
                </ol>

            </div>
        </section>
    </div>);
  }
}

export default Home