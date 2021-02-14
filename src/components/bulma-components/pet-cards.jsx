import React from 'react'
import { css } from '@emotion/css'; 

const styledCardContainer = css({
    maxWidth: "300px",
    maxHeight: "400px"
})

const cardImg = css({
    width: "300px",
    height: "225px"
})

const buttonContainer = css({
    textAlign: "right"
})

 const PetCards  = () => {  
 return (
    <div className={styledCardContainer}>
        <div class="card">
        <div class={`card-image ${cardImg}`}>
            <figure class="image is-4by3">
                <img src="" alt="Placeholder image"/>
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                {/* card-text */}
            </div>
            <div className={buttonContainer}>
                <button className="button">View</button>
            </div>
        </div>
        </div>
    </div>  
  )
} 

export default PetCards;