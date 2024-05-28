const Item = ({name,description,image,ingredients}) => {
 return (
    <div class="item">
        <div className="title">
            <h2>{name}</h2>
        </div>  
        <div className="body">
            <div className="body-content" style={{width: "60%"}}>
                <h3 className="sub-title">Description</h3>
                <p className="description">
                    {description} 
                </p>
                {ingredients.length > 0 && 
                    (<>
                        <h3>Related Ingredients</h3>
                        <ul>
                            {ingredients.map(item => (<li>{item.name} - {item.gram} Gr</li>))}
                        </ul>
                    </>)
                }

            </div>
            <div className="img" style={{width: "40%"}}>
                <img src={image} alt="" style={{width: "100%"}}/>
            </div>
        </div> 
    </div>
 )
}

export default Item