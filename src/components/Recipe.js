import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const{
            image_url,
            title,
            source_url,
            publisher
        }=this.props.recipe;
        const {handleDetails}=this.props;

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img 
                        src={image_url} 
                        className="img-card-top"
                        style={{height:"14rem"}} 
                        alt="recipe" />
                        
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">
                                provided by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button
                                onClick={handleDetails} 
                                type="button" 
                                className="btn btn-primary text-capitalize">
                                    Details
                                </button>
                            <a 
                                href={source_url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="btn btn-success mx-2 text-capitalize">
                                    recipe url
                                </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}
