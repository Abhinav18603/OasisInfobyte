import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles

// Import images
import feature1Image from '../assets/images/feature1.png';
import feature2Image from '../assets/images/feature2.png';
import feature3Image from '../assets/images/feature3.png';

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section text-center text-white">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="display-4 mb-4">Welcome to Our Amazing App</h1>
                        <p className="lead mb-4">
                            Discover innovative solutions and explore a variety of features designed to make your experience exceptional.
                        </p>
                        <Link to="/register" className="btn btn-light btn-lg mx-2">Get Started</Link>
                        <Link to="/login" className="btn btn-primary btn-lg mx-2">Login</Link>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="features-section py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Our Key Features</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                {/* Use imported image */}
                                <img src={feature1Image} className="img-fluid" alt="Feature 1" />
                                <div className="feature-card-body">
                                    <h4>Feature 1</h4>
                                    <p>Discover how Feature 1 can enhance your productivity and streamline your workflow.</p>
                                    <Link to="/feature1" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                {/* Use imported image */}
                                <img src={feature2Image} className="img-fluid" alt="Feature 2" />
                                <div className="feature-card-body">
                                    <h4>Feature 2</h4>
                                    <p>Explore Feature 2 and see how it integrates seamlessly into your daily tasks.</p>
                                    <Link to="/feature2" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                {/* Use imported image */}
                                <img src={feature3Image} className="img-fluid" alt="Feature 3" />
                                <div className="feature-card-body">
                                    <h4>Feature 3</h4>
                                    <p>Learn about Feature 3 and how it offers unique benefits tailored to your needs.</p>
                                    <Link to="/feature3" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white text-center py-3">
                <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
