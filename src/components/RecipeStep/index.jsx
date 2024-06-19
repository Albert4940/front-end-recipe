import React from 'react'

import RecipeStepTitle from "../RecipeStepTitle"
import RecipeStepDescription from "../RecipeStepDescription"
import RecipeStepIngredients from "../RecipeStepIngredients"
import RecipeStepImage from "../RecipeStepImage"

export default class RecipeStep extends React.PureComponent{

    render(){        
        
        const {name,description,image,ingredients,index} = this.props
        
        return (
            index === "last" ? (
                <div className="item">
                    <div className="title">
                        <h2>It's finish, great job!</h2>
                    </div>            
                </div>
            ) : 
            <div className="item" data-before-content={String(index + 1).padStart(2, '0')}>
                {/* <div className="title">
                    <h2>{name}</h2>
                </div>   */}
                <RecipeStepTitle title={name}/>
                <div className="body">
                    <div className="body-content" style={{width: "60%"}}>
                        <RecipeStepDescription description={description} />
                        {
                            ingredients.length > 0 &&  
                            <RecipeStepIngredients ingredients={ingredients} />
                        }
        
                    </div>
                    <div className="img" style={{width: "40%",marginLeft: "5px"}}>
                        <RecipeStepImage image={image} />
                    </div>
                </div> 
            </div>
         )
    }
}