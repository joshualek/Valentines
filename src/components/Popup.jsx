import React, { useEffect } from "react";
import "../styles/Popup.css";

const Popup = ({ title, content, image, onClose }) => {

  useEffect(() => {
    // Store the scroll position
    const scrollY = window.scrollY;

    // Prevent scrolling by fixing the body in place
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Restore scrolling without visual jump
    return () => {
      const storedScrollY = Math.abs(parseInt(document.body.style.top, 10)); // Get stored scroll value
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: storedScrollY, behavior: "instant" });
    };
  }, []);


  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        {image && <img src={image} alt={title} className="popup-image" />}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
