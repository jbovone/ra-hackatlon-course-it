import React from "react"
import { css } from "@emotion/css"
import PetCard from "./bulma-components/pet-cards"
const textoPrueba = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat porta justo."
const img = "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg"

const PetsContainer = css({
    textAlign: "center",
    background: "#767AF9"
}) 

export default function PetList({pets}){
    return (
        <div className={PetsContainer}>
            {pets.map((pet) => {
                return <PetCard img={img} name={"Perro Ejemplo"} info={textoPrueba} />
            })}
        </div>
    )
}