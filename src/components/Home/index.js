import {Component} from "react"
import { IoCloseSharp } from "react-icons/io5";

import "./index.css"


class Home extends Component{
    state={firstInput:"",secondInput:[]}


    changeItem=e=>{
        this.setState({firstInput:e.target.value})
    }

    clickedBtn=()=>{
        this.setState({firstInput:"" })
    }

    renderLevelOne=()=>{
        const {firstInput} =this.state
        return(
         
             <div className="levelOne-container">
            <h1 className="levelOne">Label 1</h1>
            <hr className="hr-line"/>
            <div className="option-container">
                
             <div className="items-container">
                 <p className="selectedItem">{firstInput}</p>
                   <button type="button" onClick={this.clickedBtn} className="btn3"><IoCloseSharp size={20}/> </button>   
                </div>
                <hr className="hr-line1"/> 

                <select placeholder="Selected Item" onChange={this.changeItem} className="select-container">
                    <option className="option">First</option>
                    <option className="option">Second</option>
                    <option className="option">Third</option>
                    <option className="option">Fourth</option>
                </select>
            </div>
         </div>
        
    
    )
}

renderLevelTwo=()=>{
    const {secondInput} =this.state
    return(
     
         <div className="levelTwo-container">
        <h1 className="levelOne">Label 2</h1>
        <hr className="hr-line"/>
        <p>{secondInput.map((each)=>(<li>{each.name}</li>))}</p>
        <form className="option-container" onSubmit={this.submitDetails}>
            
            </form>
     </div>
    

)
}

    render(){
        return <div className="bg-container">
             {this.renderLevelOne()}
             {this.renderLevelTwo()}
            </div>
    }
}


export default Home