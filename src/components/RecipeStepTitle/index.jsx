import React from "react"
import PropTypes from "prop-types"

export default class RecipeStepTitle extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render(){
        const {title} = this.props
        
        return(
            <div className="title">
                <h2>{title}</h2>
            </div> 
        )
    }
}