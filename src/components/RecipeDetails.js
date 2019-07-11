import React, { Component } from 'react';
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {

    state={
        recipe:recipe,
        url:`https://www.food2fork.com/api/get?key=5e8c3d6a3ae713ddd04c2e2d6f4f40e9&rId=${this.props.id}`
    }


  async componentDidMount(){

    const {id}=this.props;
    const url=`https://www.food2fork.com/api/get?key=5e8c3d6a3ae713ddd04c2e2d6f4f40e9&rId=${id}`;

   try{
      const data=await fetch(this.state.url);
      const jsonData=await data.json();

      this.setState((state,props)=>{
            return {
                recipe:jsonData.recipe
            }
      },()=>{

      });

    }
    catch(error){
      console.log(error);
    }
  }

    render() {

        const {image_url,publisher,publisher_url,source_url,title,ingredients}=this.state.recipe;
        const {handleIndex}=this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button
                                onClick={()=>handleIndex(1)} 
                                type="button" 
                                className="btn btn-warning mb-5 text-capitalize">
                                    back to recipe
                                </button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-slanted text-capitalize">published by {publisher}</h6>

                            <a 
                                href={publisher_url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="btn btn-primary mt-2 text-capitalize">
                                    publisher web page
                            </a>
                            <a 
                                href={source_url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="btn btn-success  mt-2 mx-3 text-capitalize">
                                    recipe url
                            </a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {
                                    ingredients.map((item,index)=>{
                                        return(
                                            <li key={index} className="list-group-item text-slanted">{item}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
