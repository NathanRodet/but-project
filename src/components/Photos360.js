import React from "react";
import { WindowSize } from "react-fns";

import { Pannellum } from "pannellum-react";

//import G02b from "../media/photos360/big/G02.jpg";
//import G07b from "../media/photos360/big/G07.jpg";
//import G04b from "../media/photos360/big/G04.jpg";

import G02s from "../media/photos360/small/G02.jpg";
import G07s from "../media/photos360/small/G07.jpg";
import G04s from "../media/photos360/small/G04.jpg";

const Photos360 = () => {
  return (
    <div className="photos360">
      <h2>Les photos 360 de l'IUT</h2>
      <h3 className="text360">
        {" "}
        Quelques photos en 360° qui ont été prise lors de TP de première année à
        l'IUT
      </h3>
      <p>
        Pour les afficher, cliquez sur "Load panorama". Vous pouvez avoir
        certaine info en cliquant sur les <i class="fas fa-info-circle" />{" "}
        présent sur les images
      </p>
      <div className="div360">
        <div className="G07">
          <Pannellum
            width="90%"
            height="500px"
            image={G07s}
            pitch={10}
            yaw={180}
            hfov={110}
            previewTitle="Salle G07"
            title="Salle G07"
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={10}
              yaw={-10}
              text="Baie de brassage qui permet de cabler les différents équipements"
            />

            <Pannellum.Hotspot
              type="info"
              pitch={-30}
              yaw={110}
              text="Maquette d'un TP de câblage de première année"
            />

            <Pannellum.Hotspot
              type="info"
              pitch={-20}
              yaw={-120}
              text="TP de téléphonie de première année"
            />
          </Pannellum>
        </div>

        <div className="G04">
          <Pannellum
            width="90%"
            height="500px"
            image={G04s}
            pitch={10}
            yaw={180}
            hfov={110}
            previewTitle="Salle G04"
            title="Salle G04"
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={-20}
              yaw={-150}
              text="TP de signal de première année"
            />
          </Pannellum>
        </div>

        <div className="G02">
          <Pannellum
            width="90%"
            height="500px"
            image={G02s}
            pitch={10}
            yaw={180}
            hfov={110}
            previewTitle="Salle G02"
            title="Salle G02"
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={-10}
              yaw={110}
              text="Osciloscope et générateur de signal utilisé lors des TP d'électronique ou de signal"
            />

            <Pannellum.Hotspot
              type="info"
              pitch={-20}
              yaw={-120}
              text="TP de téléphonie de première année"
            />
          </Pannellum>
        </div>
      </div>
    </div>
  );
};

export default Photos360;
