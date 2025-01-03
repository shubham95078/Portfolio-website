import React, { useState } from "react";
import Swal from 'sweetalert2'
const Contactform = () => {
  const [result,setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4793826-2940-4e1f-9cc5-6a1e26d81213");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Sucess",
        text: "Message sent successfully",
        icon: "success"
      });;
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className=" container h-screen flex flex-col  items-center text-white absolute top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <form onSubmit = {onSubmit} className="bg-slate-800 rounded absolute flex flex-col items-center gap-4   m-2 p-4">
        <h2 className=" text-4xl tracking-tighter pb-20 ">
          Contact Form
        </h2>
        <div className="flex  flex-wrap text-2xl p-2 items-center gap-2">
          <label className="px-8  ">Full Name</label>
          <input
            className="rounded m-1 px-2 py-1 text-neutral-900 placeholder:text-lg placeholder:text-slate-300 placeholder:font-semibold"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>
        
        <div className="flex  flex-wrap text-2xl p-2 items-center gap-2">
          <label className="px-2">Email Address</label>
          <input
            className="rounded m-1 px-2 py-1 text-neutral-900 placeholder:text-lg placeholder:text-slate-300 placeholder:font-semibold"
            type="email"
            placeholder="Your Mail Address"
            name="email"
            required
          />
        </div>
        
        <div className="flex  flex-wrap text-2xl p-2 items-center gap-2">
          <label className="px-2">Your Message</label>
          
          <textarea
            className="rounded m-2 p-2 w-2/3 lg:w-full text-neutral-900 placeholder:text-lg placeholder:text-slate-300 placeholder:font-semibold  overflow-y-auto"
            placeholder="Type your message here"
            name = "message"
            required
          ></textarea>
         
        </div>
        
        <button type="submit" className="border-2 relative flex m-2 font-semibold p-3 rounded-lg bg-blue-600 border-blue-700  hover:bg-blue-500 ">
          Send Message
        </button> 
      </form>
    </section>
  );
};

export default Contactform;
