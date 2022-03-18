import React from 'react'
import { Carousel } from "react-bootstrap";

function LandPage() {
  return (
    <div>
            <h1 style={{ color: "#012a4a" , textAlign:"center"}}>
                
                Bienvenue au ?. <hr/>
            </h1>
            <h2 style={{paddingLeft:"100px", paddingRight:"100px"}}>
                <li>Louer le bien qui me ressemble</li>   
            </h2>
            <h4 style={{paddingLeft:"100px", paddingRight:"100px"}}>
                <li>A la recherche d’un logement pour y vivre ou pour vos bagages ?</li>   
            </h4>
            
            <p style={{paddingLeft:"100px", paddingRight:"100px"}}>
            Notre site contient des annonces d'appartements, de maisons ou de terrains à
             votre disposition pour répondre votre projet d'achat immobilier.
            </p>
            <Carousel style={{ textAlign: "center" }}>
                <Carousel.Item>
                    <img
                        className=" w-40 p-3"
                        src='https://image.freepik.com/vecteurs-libre/agent-immobilier-main-donnant-cle-acheteur-maison-offre-achat-maison-location-biens-immobiliers-concept-illustration-moderne_143407-946.jpg'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-35 p-3"
                        src="https://media.gettyimages.com/vectors/cartoon-house-for-rent-vector-id166007764"
                        
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-40 p-3"
                        src="https://flux-r.com/wp-content/uploads/2020/02/const_image1_1508652832.jpg"
                    />
                </Carousel.Item>
            </Carousel>

           
        </div>
    );
};

export default LandPage