import React, { useState } from 'react';
import Popup from './Popup';
import '../styles/style.css';
import '../styles/Card.css';
import '../styles/Popup.css';

const Card = ({ title, description, IMAGE, backgroundColor, fontColor, onClick }) => {
    return (
        <div className="card-container card h-100 text-center" style={{ backgroundColor }}>
            <div className="d-flex justify-content-center">
                <img className="card-img" src={IMAGE} alt="Card image cap" />
            </div>
            <div className="card-body" style={{ color: fontColor }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a className="custom-btn mt-auto" onClick={onClick} style={{ color: fontColor }}>Open Me!</a>
            </div>
        </div>
    );
};

const CardsContainer = () => {
    const [popupData, setPopupData] = useState(null);

    const cardData = [
        {
            title: "Letter",
            description: "If you know me by now, I love digital letters, so here's another one!",
            IMAGE: "/assets/Letter.png",
            backgroundColor: "var(--bs-light)",
            fontColor: "var(--bs-dark)",
            cardContent: (
                <p>Mi amor, I am so grateful to have you in another year of my life. 
                    <br />
                    I love you so much and I can't wait to see you soon. Before that, 
                    <br />
                    <span style={{color: 'var(--bs-primary)'}}>Will You Be My Valentine?</span>
                </p>
            )
        },
        {
            title: "Song",
            description: "Nothing speaks volumes louder than a song, so here's a song that I picked from our playlist!",
            IMAGE: "/assets/Song.png",
            backgroundColor: "var(--bs-secondary)",
            fontColor: "var(--bs-light)",
            cardContent: (
                <iframe width="100%" height="337.5" src="https://www.youtube.com/embed/HgTlZsjVQDQ" title="Father John Misty - Real Love Baby (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )
        },
        {
            title: "Gift",
            description: "We both love little surprises, so here's a digital present for you <3",
            IMAGE: "/assets/Gift.png",
            backgroundColor: "var(--bs-primary)",
            fontColor: "var(--bs-light)",
            cardContent: (
                <div className="popup-container">
                    <img src="assets/Roses.png" alt="Gift" className="popup-image" />
                    <p>I got you a bouquet of 100 roses, I hope you love it!</p>
                </div>
            ),
        },
    ];
    const openPopup = (data) => {
        setPopupData(data);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    return (
        <div className="container-fluid py-lg-6">
            <div className="row d-flex justify-content-between">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-4 col-12 d-flex">
                        <Card {...card} onClick={() => openPopup(card)} />
                    </div>
                ))}
            </div>
            {popupData && <Popup title={popupData.title} content={popupData.cardContent} image={popupData.IMAGE} onClose={closePopup} />}
        </div>
    );

};

export default CardsContainer;
