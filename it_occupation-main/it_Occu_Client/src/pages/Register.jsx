import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  // ฟังก์ชันตรวจสอบความตรงกันของรหัสผ่าน
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));

    if (name === "password") {
      handlePasswordChange(event);
    }
    if (name === "confirmPassword") {
      handleConfirmPasswordChange(event);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const body = {
      email: inputs.email,
      password: inputs.password,
      fname: inputs.fname,
      lname: inputs.lname,
    };

    
    toast.promise(
      axios.post("http://localhost:3000/api/register", body),
      {
        loading: 'กำลังสมัครสมาชิก...',
        success: <b>สมัครสมาชิกสำเร็จ!</b>,
        error: <b>เกิดข้อผิดพลาดในการสมัครสมาชิก</b>,
      }
    )
    .then((response) => {
      if (response.data.message === "Create user success") {
        // alert("Register success");
        localStorage.setItem("userInfo", JSON.stringify(body));
        navigate("/login");
      } else {
        // alert("Register fail");
        // toast.error("Register fail")
        navigate("/register");
      }
    })
    .catch((error) => {
      // console.log(error);
      toast.error(error)
    });

    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/register",
    //     body
    //   );
    //   console.log(response.data.userInfo);
    //   if (response.data.message === "Create user success") {
    //     alert("Register success");
    //     localStorage.setItem("userInfo", JSON.stringify(body));
    //     navigate("/login");
    //   } else {
    //     alert("Register fail");
    //     navigate("/register");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              สมัครสมาชิก
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    className="grow"
                    placeholder="ชื่อจริง"
                    id="fName"
                    name="fname"
                    type="text"
                    onChange={handleChange}
                    value={inputs.fname || ""}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    className="grow"
                    placeholder="นามสกุล"
                    id="lName"
                    name="lname"
                    type="text"
                    onChange={handleChange}
                    value={inputs.lname || ""}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    className="grow"
                    placeholder="อีเมล"
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={inputs.email || ""}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="grow"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="รหัสผ่าน"
                    onChange={handleChange}
                    value={inputs.password || ""}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="grow"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="ยืนยันรหัสผ่าน"
                    onChange={handleChange}
                    value={inputs.confirmPassword || ""}
                    required
                  />
                </label>
              </div>
              {!passwordMatch && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match!
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
