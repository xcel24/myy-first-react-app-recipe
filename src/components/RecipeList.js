import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {

    render() {
        const {recipes,handleDetails,handleChange,handleSubmit,value,error}=this.props;
        return (
            <React.Fragment>
                <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 text-center text-uppercase mb-3">
                             <h1 className="text-slanted">Recipe List</h1>
                        </div>
                    </div>
                    <div className="row">
                        {error?(<h1 className="text-center text-danger">{error}</h1>): 
                            (recipes.map(recipe=>{
                                    return(
                                        <Recipe
                                            handleDetails={()=>handleDetails(0,recipe.recipe_id)}
                                            key={recipe.recipe_id}
                                            recipe={recipe} />
                                    )
                                }))
                        }
                    </div>
                </div>   
            </React.Fragment>
        )
    }
}
