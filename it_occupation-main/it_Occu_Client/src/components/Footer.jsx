import React from "react";

const Footer_1 = [
  { name: "หน้าหลัก", href: "/" },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex space-x-4 mt-4">
              {/* <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
             
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            <div>
            
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Submit ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
           
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
          
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="text-center text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;
