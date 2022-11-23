import React from 'react';

// Footer component
export const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website {new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}