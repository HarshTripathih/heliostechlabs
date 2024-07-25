import React from "react";
import { Link } from "react-router-dom";
import helioslogo from "../../assets/logo_helios.png";

const Footerpage: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={helioslogo} alt="Helios Tech Labs" className="w-32" />
            </div>
            <p className="mb-4">
              <strong>A unit of Paisso Technology Private Limited</strong>
            </p>
            <p>
              Helios specializes in IT Software Solutions and Digital Services.
              We succeed by having satisfied customers and mutual success.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-red-500 hover:text-red-400">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://crm.heliostechlabs.com/"
                  className="hover:underline"
                >
                  Zoho Development
                </a>
              </li>
              <li>
                <Link
                  to="/it-strategy-consulting-services"
                  className="hover:underline"
                >
                  IT Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/blockchain-development-company"
                  className="hover:underline"
                >
                  Blockchain Development Company
                </Link>
              </li>
              <li>
                <Link to="/application-development" className="hover:underline">
                  Application Development
                </Link>
              </li>
              <li>
                <Link to="/application-maintenance" className="hover:underline">
                  Application Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/application-modernization"
                  className="hover:underline"
                >
                  Application Modernization
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fa fa-map-marker-alt text-xl"></i>
                <span className="ml-2">
                  C127, 1st Floor, Industrial Area, Phase 8, Mohali, Punjab
                  160071 (India)
                </span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone-alt text-xl"></i>
                <span className="ml-2">
                  <a href="tel:9855484488" className="hover:underline">
                    India : +91-9855484488
                  </a>
                  <br />
                  <a href="tel:8097080066" className="hover:underline">
                    India : +91-8097080066
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope text-xl"></i>
                <span className="ml-2">
                  <a
                    href="mailto:sarah@heliostechlabs.com"
                    className="hover:underline"
                  >
                    sarah@heliostechlabs.com
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-clock text-xl"></i>
                <span className="ml-2">
                  Opening Hours: 09:00 am - 06:30 pm IST
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            {/* Optional Newsletter Section */}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4">
        <p>&copy; 2024 Helios Tech Labs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footerpage;
