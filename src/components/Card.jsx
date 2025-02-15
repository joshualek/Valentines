import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.css';

//const Card = ({ title, icon, link }) => {
const Card = () => {
    return (
        // <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        //     <div className="icon-box text-center border py-lg-7 px-3 rounded-4">
        //         <div className="icon-box-icon mb-3">
        //             <img src={icon} alt={title} width="50" height="50" />
        //         </div>
        //         <div className="icon-box-content ps-3">
        //             <h4 className="fs-3 fw-medium text-capitalize">{title}</h4>
        //             <Link to={link} className="btn btn-primary">Open</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="../src/assets/latos.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};

export default Card;