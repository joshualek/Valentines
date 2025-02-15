import '../styles/style.css';

const Footer = () => {
    return (
        <div className="footer-bottom py-3 text-center" style={{ backgroundColor: 'var(--bs-light)' }}>
            <div className="container-lg">
                <p className="m-0">© 2025
                <a href="https://www.linkedin.com/in/joshualek" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <span style={{ color: 'var(--bs-secondary)' }}> Joshua Lek.</span>
                </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;