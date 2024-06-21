import PropTypes from 'prop-types'

/*export const RecipeIngredientsType = PropTypes.shape({
    name: PropTypes.string.isRequired,    
    quantity: PropTypes.string.isRequired,
    metrics: PropTypes.string.isRequired
})

export const RecipeStepsType = PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(RecipeIngredientsType)
})

export const RecipeType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(RecipeStepsType).isRequired
})*/

export const RecipeIngredientsType = PropTypes.shape({
    name: PropTypes.string.isRequired,    
    gram: PropTypes.number.isRequired
})

export const RecipeStepsType = PropTypes.shape({    
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(RecipeIngredientsType).isRequired,    
})