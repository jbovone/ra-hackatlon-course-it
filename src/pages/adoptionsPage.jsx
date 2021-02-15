import React from "react"
import {css} from "@emotion/css"
import PetList from "../components/PetList"

const styledH1 = css({
    fontFamily: "Roboto",
    background: "#767AF9",
    fontSize: "5em",
    padding: "20px"
})

const titleText = css({
    marginLeft: "70px",
    color: "white",
})
export default function AdoptionsPage(pets){
    return (
        <>
            <h1 className={styledH1}><strong className={titleText}>Adopt a partner...</strong></h1>
            <PetList {...pets} />
        </>     
    )
}