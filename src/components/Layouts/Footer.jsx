/** @format */
import logo from "../../assets/logo/logo-ariya.png";
import Index from "../Elements/NavMenu/Index";
function Footer() {
  return (
    <div className="w-full">
      <div
        className="mb-4 px-3
      "
      >
        <h1 className="flex items-center gap-2 font-audiowide text-xl mb-1">
          <img src={logo} alt="" className="w-6" />
          AERES
        </h1>
        <p className="text-sm">Fullstack Developer & Graphic Designer</p>
        <p className="text-sm">
          Creating clean, scalable, <span className="text-blue-700">and</span>{" "}
          impactful digital experiences.
        </p>
      </div>
      <div className="flex justify-between px-3">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl mb-1">🔗 Quick Links</h1>
            <ul className="px-1">
              <li>
                <a
                  href="#home"
                  className="flex gap-2 items-center text-sm hover:text-white/10"
                >
                  <i className="bx bx-home-circle"></i> HOME
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex gap-2 items-center text-sm hover:text-white/10"
                >
                  <i className="bx  bx-spanner"></i> SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="flex gap-2 items-center text-sm hover:text-white/10"
                >
                  <i className="bx  bx-currency-notes"></i> RESUME
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex gap-2 items-center text-sm hover:text-white/10"
                >
                  <i className="bx  bx-envelope-open"></i> CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="flex text-xl items-center gap-2 mb-1">
              <i className="bx  bx-file-cog"></i> Tools & Tech Stack
            </h1>
            <ul className="px-1 text-sm">
              <p className="font-sm items-center flex gap-2">
                <i className="bx  bx-code"></i> React
              </p>
              <p className="font-sm items-center flex gap-2">
                <i className="bx  bx-chip"></i> Vite
              </p>
              <p className="font-sm items-center flex gap-2">
                <i className="bx  bx-layers"></i> Node.js
              </p>
              <p className="font-sm items-center flex gap-2">
                <i className="bxl  bx-figma-alt"></i> Figma
              </p>
              <p className="font-sm items-center flex gap-2">
                <i className="bxrds  bx-palette"></i> Adobe Ilustrator /
                Coreldraw
              </p>
              <p className="font-sm items-center flex gap-2">
                <i className="bxl  bx-blender"></i> Blender
              </p>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <h1 className="text-xl flex items-center gap-2 mb-1">
              <i className="bx  bx-group"></i> Contact & Social
            </h1>
            <ul className="px-1 text-sm">
              <li>
                <p className="flex items-center gap-2">
                  <i className="bxl  bx-gmail"></i> Email:
                  aryarezasaputra@email.com
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <i className="bxl  bx-whatsapp"></i> WhatsApp: +62 81263618443
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <i className="bxl  bx-linkedin"></i> Link in:{" "}
                  <a
                    href="https://www.linkedin.com/in/arya-reza-saputra-9264ab39b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-500"
                  >
                    ariya reza saputra
                  </a>
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <i className="bxl  bx-instagram-alt"></i> Instagram:{" "}
                  <a
                    href="https://www.instagram.com/aryarzs?igsh=MWYyeTZ6OGw3dTR6eg%3D%3D&utm_source=qr"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-500"
                  >
                    ariyarzs
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl mb-1">🛠 Services</h1>
            <ul className="text-sm px-1">
              <li>
                <p>Web Development</p>
              </li>
              <li>
                <p>UI/UX Design</p>
              </li>
              <li>
                <p>Branding & Logo</p>
              </li>
              <li>
                <p>Responsive Website</p>
              </li>
              <li>
                <p>Performance Optimization</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-2 w-full mt-4 bg-white/10">
        <p>
          © 2025 AERES. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Footer;
