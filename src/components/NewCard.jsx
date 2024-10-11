import React from 'react'
import '../style/newCard.css'
function NewCard({image,title,date,number ,views}) {
  return (
    <div className='newCard'>
          <div className="biznes-marafon-container">
      <div className="image-container">
        {/* Tasvir */}
        <img 
          src={image} 
          alt="Biznes Marafon" 
          className="biznes-image"
        />
        {/* Yozuvlar tasvir ustida chiqadi */}
        <div className="overlay">
          <h2 className="title">{title}</h2>
          <div className="date-views">
            <span className="date">{date}</span>
            <span className="views">{views}
              <i className="eye-icon">👁</i> {number}
            </span>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default NewCard
