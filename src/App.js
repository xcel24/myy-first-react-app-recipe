import React,{Component} from 'react';
import './App.css';

//Temp List 
import {recipes} from './tempList';

import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

class App extends Component{

  state={
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=5e8c3d6a3ae713ddd04c2e2d6f4f40e9",
    base_url:"https://www.food2fork.com/api/search?key=5e8c3d6a3ae713ddd04c2e2d6f4f40e9",
    details_id:35385,
    pageIndex:1,
    search:"",
    query:"&q=",
    error:""
  };

  async getRecipes(){
    try{
      const data=await fetch(this.state.url);
      const jsonData=await data.json();

      if(jsonData.recipes.length===0){
        this.setState(()=>{
          return{
            error:'Sorry No result Found!'
          }
        })
      }

      else{
        this.setState(()=>{
          return{
            recipes:jsonData.recipes
          }
        })
      }
    }

    catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.getRecipes();
  }

  displayPage=(index)=>{

    switch(index){
      default:
      
      case 1:
        return(<RecipeList 
          error={this.state.error}
          value={this.state.search}
          recipes={this.state.recipes}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          handleDetails={this.handleDetails} />)
      
      case 0:
        return(<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)
    }

  }

  handleIndex=index=>{
    this.setState({
      pageIndex:index
    })
  }


  handleDetails=(index,id)=>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }

  handleChange=(e)=>{
    this.setState({
      search:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    const{base_url,query,search}=this.state;

    this.setState(()=>{
      return{
        url: `${base_url}${query}${search}`,
        search:""
      }
    },()=>{
      this.getRecipes();
    })
    
  }

  render(){
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}       
      </React.Fragment>
    );
  }
}

export default App;
