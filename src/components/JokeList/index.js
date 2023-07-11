import { Component } from "react";
import ReactPopup from "../ReactPopUp"
import "./index.css"

class JokeList extends Component{
    state={categories:[],joke:"",loading:false,currentJoke:""}

    componentDidMount(){
        this.getCategoryList()
    }

    getCategoryList=async ()=>{

        const url="https://api.chucknorris.io/jokes/categories"
        const options={
            method:"GET",
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if(response.ok===true){
            this.setState({categories:data})
        }
        
    }


    handleCategoryClick=async category=>{
        const url=`https://api.chucknorris.io/jokes/random?category=${category}`
        const options={
            method:"GET",
        }

        const response=await fetch(url,options)
        const fetchedData=await response.json()
        this.setState({currentJoke:fetchedData.value})

    }

    handleNextJokeClick=async ()=>{
        const {categories}=this.state
        const randomCategory=categories[Math.floor(Math.random()*categories.length)]

        const url=`https://api.chucknorris.io/jokes/random?category=${randomCategory}`
        const options={
            method:"GET",
        }
        const response=await fetch(url,options)
        const data=await response.json()
        this.setState({currentJoke:data.value})
    }

    

    render(){
        const {categories,currentJoke}=this.state
        
        return(
            <div className="app-container">
                <div className="heading-container">
                    <h1 className="main-heading">Chuck Norries</h1>
                </div>
                <ul className="main-jokes-container">{categories.map((category)=>(
                    <ReactPopup categoryList={category} handleClick={this.handleCategoryClick} handleNextClick={this.handleNextJokeClick} currentJoke={currentJoke} />
                    ))}
                </ul>
            </div>
        )
    }

}

export default JokeList