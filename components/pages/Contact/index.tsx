"use client";
import React, { useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
function Contact() {
  const router = useRouter();
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitEvent = (e: any) => {
    e.preventDefault();
    const whatsappURL = `https://api.whatsapp.com/send/?phone=6281336920647&text=${encodeURIComponent(
      `name: ${formData.name}${formData.message}`
    )}&type=phone_number&app_absent=0`;
    router.push(whatsappURL);
  };
  return (
    <div className="my-20 ">
      {/* title */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="max-w-max mx-auto"
      >
        <h1 className="text-3xl text-black font-extrabold">
          Contact <span className="text-primary ">Me</span>
        </h1>
      </div>
      {/* form */}
      <form
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="md:w-[45%] w-full px-3 md:mb-5 mb-28 mx-auto mt-8 md:mt-5"
      >
        <div className="w-full  flex md:flex gap-2">
          <div className="flex-1 hidden out-shadow px-2  rounded-md min-h-max py-4  md:flex justify-center items-center">
            <div className="text-sm  flex justify-center flex-col items-center text-center">
              <span className="text-primary  text-sm md:text-lg">
                <FaRegAddressCard />
              </span>
              <h2 className="text-xs text-black mt-1 font-semibold">Adress</h2>
              <p className="text-xs text-gray-700">
                Jember,East Java,Indonesia
              </p>
            </div>
          </div>
          <div className="flex-1 out-shadow  rounded-md min-h-max py-4  flex justify-center items-center">
            <div className="text-sm flex justify-center flex-col items-center text-center">
              <span className="text-primary  text-lg">
                <MdOutlineLocalPhone />
              </span>
              <h2 className="text-xs mt-1 text-black font-semibold">
                Phone Number
              </h2>
              <p className="text-xs text-gray-700">+6281336920647</p>
            </div>
          </div>
          <div className="flex-1 out-shadow  rounded-md min-h-max py-4  flex justify-center items-center">
            <div className="text-sm  flex justify-center flex-col items-center text-center">
              <span className="text-primary  text-lg">
                <MdMailOutline />
              </span>
              <h2 className="text-xs mt-1 text-black font-semibold">Email</h2>
              <p className="text-xs text-gray-700">Abdulmukti@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="w-full py-3 px-5  mt-4 rounded-lg out-shadow">
          <div className="w-full overflow-hidden inner-shadow px-5 py-1.5 rounded-full">
            <input
              name="name"
              value={formData?.name}
              onChange={handleChange}
              type="text"
              className="w-full text-gray-900 bg-transparent border-none placeholder:text-sm placeholder:font-medium   outline-none text-sm placeholder:text-gray-400"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full overflow-hidden my-4 inner-shadow px-5 py-1.5 rounded-full">
            <input
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
              className="w-full text-gray-900 border-none bg-transparent placeholder:text-sm placeholder:font-medium focus:border-1 focus:border-red-200 text-sm placeholder:text-gray-400"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-full overflow-hidden my-4 inner-shadow px-5 py-1.5 rounded-xl">
            <textarea
              name="message"
              value={formData?.message}
              onChange={handleChange}
              className="w-full mt-2 text-gray-900 h-36 border-none  bg-transparent placeholder:text-sm placeholder:font-medium  text-sm placeholder:text-gray-400"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            onClick={submitEvent}
            className="w-max font-semibold  overflow-hidden my-1  out-shadow px-10 py-2 text-gray-700 text-sm rounded-full"
          >
            Send Message
          </button>
        </form>
      </form>
    </div>
  );
}

export default Contact;
