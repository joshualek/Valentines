import { Link } from 'react-router-dom';

const Letter = () => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="icon-box text-center border py-lg-7 px-3 rounded-4">
                <div className="icon-box-icon mb-3">
                    <img src="images/icons/briefcase-svgrepo-com.svg" alt="briefcase" width="50" height="50" />
                </div>
                <div className="icon-box-content ps-3">
                    <h4 className="fs-3 fw-medium text-capitalize">A Letter for You</h4>
                    <p>Click to open</p>
                </div>
            </div>
        </div>
    );
};

export default Letter;