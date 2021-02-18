import React from "react";
import { css } from "@emotion/css";
import PetCard from "./pet-cards";

const PetsContainer = css({
  textAlign: "center",
  background: "#767AF9",
});

export default function PetList({ pets }) {
  return (
    <div className={PetsContainer}>
      {pets.map((pet) => {
        return (
          <PetCard img={pet.image} name={pet.name} info={pet.description} />
        );
      })}
    </div>
  );
}
