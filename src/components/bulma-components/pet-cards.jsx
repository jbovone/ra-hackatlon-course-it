import React from 'react'
import { css } from '@emotion/css'; 

const styledCardContainer = css`
max-width: 280px;
max-height: 400px;
display: inline-block;
margin: 10px;
margin-bottom: 100px;
@media screen and (min-width: 400px){
    margin-bottom: 40px
}` 

const cardImg = css({
    width: "280px",
    height: "200px",
    margin: "auto",
    marginBottom: "10px"
})

const buttonContainer = css({
    textAlign: "right"
})

 const PetCards  = ({name, info, img}) => {  
 return (
    <div className={styledCardContainer}>
        <div class="card">
        <div class={`card-image ${cardImg}`}>
            <figure class="image is-4by3">
                <img src={img} alt="Placeholder image"/>
            </figure>
        </div>
        <div class="card-content">
            <p><strong>{name}</strong></p>
            <div class="content">
                {info}
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