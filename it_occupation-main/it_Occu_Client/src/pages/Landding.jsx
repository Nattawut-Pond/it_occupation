import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "ยอดผู้เข้าชมเว็บของเรา", value: "44 ล้าน" },
  { id: 2, name: "ยอด...", value: "119 ล้าน" },
  { id: 3, name: "ยอด", value: "46k" },
];

export default function Landding() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 sm:container">
        <div className="text-center ">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            ยินดีต้อนรับ
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            สู่เว็บไซต์ของเรา
          </p>
        </div>
        <div className="border-b border-gray-300 mt-28"></div>

        <div className="mt-20 text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            ค้นหาตัวเองดูไหม ?
          </h1>
          <p className="mt-8 mb-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            การค้นหาตัวเองก็เป็นอีกหนึ่งปัจจัยในการทำงานนะ
          </p>
          <Link
            to="/findmyself"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
        <div className="border-b border-gray-300 mt-28"></div>
        <div className="mt-20 text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            เกี่ยวกับเรา
          </h1>
          <p className="mt-8 mb-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            มาทำความรู้จักกับเราดีกว่า
          </p>
          <Link
            to="/about"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
      <div className="bg-white py-1 rounded-md sm:py-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 justify-items-center text-center lg:grid-cols-3 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-15 flex max-w-xs flex-col gap-y-4 bg-gray-300 p-16 rounded-2xl"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Footer />
    </>
  );
}
