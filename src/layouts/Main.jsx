import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style.css';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="layout">
                <main>
                    <Outlet />
                </main>
            <Footer />
            </div>
        </div>
    )
}

export default Main;

// This file is a layout component.
// It defines the common layout structure (e.g., header, footer, sidebar) that is shared across multiple pages.
// It uses the Outlet component from react-router-dom to render child routes.