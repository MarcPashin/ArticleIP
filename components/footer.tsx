// Footer.tsx
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.instagram.com/hireai.pro/" className="text-gray-400 hover:text-white" aria-label="Instagram">
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/h1reai/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                </div>
                <div className="mb-4">
                    <p>marc@hireai.pro</p>
                </div>
                <div>
                    <p>&copy;2024 HireAI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
