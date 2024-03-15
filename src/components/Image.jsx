import React, { Component } from "react";
import ralphImage from "../assets/characters/Ralph_Wiggum.png";
import groundskeeper from "../assets/characters/GroundskeeperWillie.png";
import abe from "../assets/characters/Abe_Simpson.png";
import apu from "../assets/characters/Apu.png";
import bart from "../assets/characters/Bart_Simpson.png";
import chief from "../assets/characters/Chief_Wiggum.webp";
import comic from "../assets/characters/Comic_Book_Guy.png";
import drNick from "../assets/characters/Dr_Nick.png";
import duffman from "../assets/characters/Duffman.png";
import frank from "../assets/characters/Frank_Grimes.webp";
import homer from "../assets/characters/Homer.png";
import lisa from "../assets/characters/Lisa_Simpson.png";
import marge from "../assets/characters/MargeSimpson.webp";
import mayor from "../assets/characters/Mayor_Quimby.webp";
import milhouse from "../assets/characters/Milhouse.webp";
import moe from "../assets/characters/Moe_Szyslak.png";
import mrBurns from "../assets/characters/mr_burns.webp";
import nelson from "../assets/characters/Nelson_Muntz.png";
import otto from "../assets/characters/Otto_Mann.webp";
import skinner from "../assets/characters/Principal_Skinner.png";
import rainier from "../assets/characters/Rainier_Wolfcastle.png";
import troy from "../assets/characters/Troy_McClure.webp";
import waylon from "../assets/characters/Waylon_Smithers.png";

//todas las imagenes las baje del CDN de la Api pq nunca me cargaron usando src y pues soy un hombre que resuelve :)

class Image extends Component {
  render() {
    const { image, alt, characterDirection } = this.props;
    return (
      <img
        src={
          alt === "Ralph Wiggum"
            ? ralphImage
            : alt === "Groundskeeper Willie"
            ? groundskeeper
            : alt === "Abe Simpson"
            ? abe
            : alt === "Apu Nahasapeemapetilon"
            ? apu
            : alt === "Bart Simpson"
            ? bart
            : alt === "Chief Wiggum"
            ? chief
            : alt === "Comic Book Guy"
            ? comic
            : alt === "Dr. Nick"
            ? drNick
            : alt === "Duffman"
            ? duffman
            : alt === "Frank Grimes"
            ? frank
            : alt === "Homer Simpson"
            ? homer
            : alt === "Lisa Simpson"
            ? lisa
            : alt === "Marge Simpson"
            ? marge
            : alt === "Mayor Quimby"
            ? mayor
            : alt === "Milhouse Van Houten"
            ? milhouse
            : alt === "Moe Szyslak"
            ? moe
            : alt === "Mr Burns"
            ? mrBurns
            : alt === "Nelson Muntz"
            ? nelson
            : alt === "Otto"
            ? otto
            : alt === "Principal Skinner"
            ? skinner
            : alt === "Rainier Wolfcastle"
            ? rainier
            : alt === "Troy McClure"
            ? troy
            : alt === "Waylon Smithers"
            ? waylon
            : image
        }
        alt={alt}
        className={characterDirection.toLowerCase()}
      ></img>
    );
  }
}

export default Image;
