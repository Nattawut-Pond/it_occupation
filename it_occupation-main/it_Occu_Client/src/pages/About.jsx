import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              เกี่ยวกับเรา
            </h1>
          </div>

          <div className="text-center">
            <p className="mt-5 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              มาทำความรู้จักเกี่ยวกับเว็บอขงเราดีกว่า
            </p>
          </div>
          <button
            type="submit"
            className="gird mt-10 w-36 justify-items-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            <Link to="/findmyself">สำรวจเลย</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
