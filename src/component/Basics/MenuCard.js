import React from 'react'

//  after sending props or data - we have to use it  
const MenuCard = ({menuDataVar}) => {
    console.log(menuDataVar);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuDataVar.map((curElem) => {
        // destructuring
        const {id, name, category, image, description} = curElem;
         return (
        
        <>
            <div className='card-container' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{name}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>
                    {description}
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={image} alt="images" className='card-media'/>
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
        </>
         )
    })}
    </section>
    </>
  )
}

export default MenuCard