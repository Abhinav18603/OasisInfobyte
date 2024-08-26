import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles

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
                    <h2 className="mb-5">Our Key Courses</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://png.pngtree.com/thumb_back/fh260/background/20210914/pngtree-ui-ux-development-design-background-concept-image_900165.jpg" className="feature-img" alt="Feature 1" />
                                <div className="feature-card-body">
                                    <h4>UI/UX Design</h4>
                                    <p>Our UI/UX Design Course is a comprehensive program designed to equip you with the skills and knowledge needed to create engaging and user-friendly digital experiences. Through this course, you will learn the fundamentals of user interface (UI) and user experience (UX) design, including principles of visual design, user research, wireframing, prototyping, and usability testing.</p>
                                    <Link to="/feature1" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" className="feature-img" alt="Feature 2" />
                                <div className="feature-card-body">
                                    <h4>Web Dev & Design</h4>
                                    <p>Our Web Design and Development Course is a comprehensive program designed to teach you how to build modern, responsive websites from scratch. This course covers both the creative and technical aspects of web development, providing you with the skills to design visually appealing layouts and implement them using the latest technologies.</p>
                                    <Link to="/feature2" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-card shadow-lg">
                                <img src="https://media.licdn.com/dms/image/D4D12AQFOu5LK7c_Aqw/article-cover_image-shrink_600_2000/0/1685338553716?e=2147483647&v=beta&t=tFuqP1vi-JVD14KtBcBjjbBDj0Mj0qELaqMJ6iHpzD4" className="feature-img" alt="Feature 3" />
                                <div className="feature-card-body">
                                    <h4> Data Analytics</h4>
                                    <p>Our Data Analytics Course is designed to equip you with the skills and knowledge needed to turn raw data into actionable insights. This course covers essential tools and techniques in data analysis, preparing you to make data-driven decisions in various industries.Gain proficiency in using tools like Excel, SQL, Python, and R for data manipulation and analysis</p>
                                    <Link to="/feature3" className="btn btn-outline-primary">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white text-center py-3">
                <p className="mb-0">© 2024 Abhinav. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
