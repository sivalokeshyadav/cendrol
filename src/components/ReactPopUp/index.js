import Popup from "reactjs-popup"


import "reactjs-popup/dist/index.css"
import "./index.css"

import {IoMdClose} from "react-icons/io"

const ReactPopUp=props=>{
    const {categoryList,handleClick,handleNextClick,currentJoke}=props
    const handleCategoryClick=()=>{
        handleClick(categoryList)
    } 

    return(
        <>
            
            <div className="list-item-container">
            <Popup modal trigger={<li key={categoryList} className="list-item"><button type="button" className="button-item" onClick={handleCategoryClick}><span className="joke-item">{categoryList}</span><br/> <span>Unlimited Jokes on {categoryList}</span></button></li>}
                className="list-item">
                    {close=>(
                        <>
                            
                            <div className="popup-container">
                                <button className="popup-btn" type="button" onClick={()=>close()}><IoMdClose size={20} /></button>
                                    <div className="main-names-container">
                                        <div className="main-name-container">
                                            <h1>{categoryList}</h1>
                                        </div>
                                        <div className="joke-container">
                                            <h1>{currentJoke}</h1>
                                            <button type="button" className="next-btn" onClick={handleNextClick}>Next Joke</button>
                                        </div>
                                    </div>
                                
                            </div>
                        </>
                    )}
                </Popup>
            </div>
        </>
        
    )

}

export default ReactPopUp