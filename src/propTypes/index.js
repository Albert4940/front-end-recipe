import PropTypes from 'prop-types'

export const RecipeIngredientsType = PropTypes.shape({
    name: PropTypes.string.isRequired,    
    quantity: PropTypes.number.isRequired,
    metrics: PropTypes.string.isRequired
})

export const RecipeStepsType = PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(RecipeIngredientsType).isRequired
})

export const RecipeType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(RecipeStepsType).isRequired
})