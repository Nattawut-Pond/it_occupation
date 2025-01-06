import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { id: 1, name: "ร่วมแบบทดสอบเมื่อวานกว่า", value: "10" },
  { id: 2, name: "มีคนเข้าร่วมแบบทดสอบแล้วกว่า", value: "100" },
  { id: 3, name: "การันตีกว่า", value: "97%" },
];


export default function FindMyself() {

  const [careers, setCareer] = useState([]);

  const getCareer = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/occupation");
      setCareer(response.data.results);
      // console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getCareer();
  }, []); // เพิ่ม dependency array เพื่อหลีกเลี่ยง loop

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <div className="text-center mt-10">
              <h1 className="text-balance text-md font-semibold tracking-tight text-gray-900 sm:text-2xl">
                ค้นหาตัวเอง
              </h1>
              <p className="mt-8 text-pretty text-gray-500 ">
                ลองค้นหาตัวเองดูสิว่าเรานั้นสามารถไปทางด้านใดกันได้บ้าง
              </p>
            </div>
          </div>
          <Link
            to="/question"
            className="rounded-md mt-5 bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            เริ่มสำรวจ
          </Link>

          <div className="bg-white mt-5 rounded-xl p-10 shadow-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-32 gap-y-1 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4 gap-x-10"
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
          <div className="text-2xl text-start mx-12 mt-10 col-span-3">
              <p>อาชีพที่เกี่ยวข้องกับไอที</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 mt-12 rounded-xl bg-white">
            
            {careers.map((career) => (
              <div
                key={career.id}
                className="bg-white shadow-md rounded-lg p-6 border"
              >
                <img
                  src={career.image}
                  alt={career.title}
                  className="rounded-lg mb-4 h-64 mx-auto bg-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {career.title}
                </h3>
                <p className="text-gray-600 mt-2">{career.description}</p>

                <div className="text-right mt-4">
                  <button className="inline-block bg-orange-600  text-white rounded-md px-3 py-2 text-sm font-semibold hover:bg-orange-400" onClick={() => document.getElementById(career.id).showModal()}>อ่านเพิ่มเติม</button>
                  <dialog id={career.id} className="modal transition-opacity duration-500">
                  <div className="modal-box w-11/12 max-w-5xl  shadow-xl">
                    <h3 className="font-bold text-lg text-start">{career.title}</h3>
                    <img
                  src={career.image}
                  alt={career.title}
                  className="rounded-lg mb-4 mx-auto bg-cover"
                />
                    <p className="py-4 text-start">{career.moreInfo}</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn bg-red-500 text-white">ปิด</button>
                      </form>
                    </div>
                  </div>
                </dialog>
                </div>
              </div>
            ))}

          
          </div>
        </div>
      </div>
      <Footer />
      {/* <Toaster
        position="bottom-right"
        reverseOrder={false}
      /> */}
    </div>
  );
}
