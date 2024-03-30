import React, { useState, useEffect } from "react";
import "./Season1.css";
import video1 from "../../img/penalty.mp4";
import video2 from "../../img/winners.mp4";
import Footer from "../Footer/Footer";
import Winners from "./Winners";
import amigos from "../../img/Amigosfc.png"
import atfl from "../../img/ATFLboys.png"
import basturdmunich from "../../img/BasturdMunich.png"
import blacksaints from "../../img/BlackSaints.png"
import blaze from "../../img/BlazeFc.png"
import inferno from "../../img/infernoFc.png"
import s4united from "../../img/S4united.png"
import supernova from "../../img/supernova.png"
import teamace from "../../img/teamAce.png"
import brave from "../../img/BraveFc.png"
import vikings from "../../img/VikingFc.png"



const Season1 = () => {
  const cards = [
    { imageUrl: amigos, title: "Amigos FC" },
    { imageUrl: atfl, title: "ATFL Boys " },
    { imageUrl: basturdmunich, title: "Basturd Munich" },
    { imageUrl:blacksaints, title: "Black Saints" },
    { imageUrl: blaze , title: "Blaze FC" },
    { imageUrl: inferno, title: "Infero FC" },
    { imageUrl: s4united, title: "S4 United" },
    { imageUrl: supernova , title: "Supernova FC" },
    { imageUrl: teamace , title: "Teamace FC" },
    { imageUrl: brave, title: "Brave FC" },
    { imageUrl:vikings, title: "Vikings FC" },
    // Add more card objects as needed
  ];

  const videos = [
    {
      src: video1,
      title: "Semifinal-1",
      description: "Mulund Mavrick v Blaze FC Penalties",
    },
    {
      src: video2,
      title: "Winners",
      description: "ATFL Boys win against Blaze FC",
    },
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="season-1">
      <div className="teams">Teams</div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="vertical-card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <h3 className="card-title" style={{color:"white",fontSize:"30px",display:"flex",justifyContent:"center"}}>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className="video-carousel">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-slide ${
              index === currentVideoIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${video.src})` }}
          >
            <video autoPlay loop muted className="video">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <h2 className="title">{video.title}</h2>
              <p className="description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      
     <Winners />

      <Footer />
    </section>
  );
};

export default Season1;
