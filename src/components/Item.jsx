const Item = ({name,description,image,ingredients,index}) => {
 return (
    index === "last" ? (
        <div className="item">
            <div className="title">
                <h2>It's finish, great job!</h2>
            </div>            
        </div>
    ) : 
    <div className="item" data-before-content={String(index + 1).padStart(2, '0')}>
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
            <div className="img" style={{width: "40%",marginLeft: "5px"}}>
                <img src={image} alt="" style={{width: "100%", borderRadius:"5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}/>
            </div>
        </div> 
    </div>
 )
}

export default Item