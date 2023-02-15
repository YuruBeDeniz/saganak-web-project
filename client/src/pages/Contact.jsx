import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //const handleChange = e => setContact({...contact, value: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = { contact };
    axios.post("/api/email/send-email", requestBody)
      .then(response => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
    setContact("");  
  }

  return (
    <div className='flex flex-col items-center'> 
    <form onSubmit={handleSubmit} className="w-full max-w-lg mb-36 ml-12">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-first-name">
            Name
          </label>
          <input 
            value={contact.name} 
            onChange={e => setContact({...contact, name: e.target.value})} 
            type="text" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            placeholder="Name" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-first-name">
            Subject
          </label>
          <input 
            value={contact.subject} 
            onChange={e => setContact({...contact, subject: e.target.value})} 
            type="text" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            placeholder="Subject" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-password">
            E-mail
          </label>
          <input value={contact.email} 
            onChange={e => setContact({...contact, email: e.target.value})} 
            type="email" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="email"
            placeholder="Email"
            />
          {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-password">
            Message
          </label>
          <textarea 
            value={contact.message} 
            onChange={e => setContact({...contact, message: e.target.value})} 
            type="text" 
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"
            placeholder="Your message"></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}

  </div>
  )
}
