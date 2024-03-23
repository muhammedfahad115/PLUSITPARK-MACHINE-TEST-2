import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [assembly, setAssembly] = useState('');
  const [constituency, setConstituency] = useState('');
  const [district, setDistrict] = useState('');
  const [panchayath, setPanchayath] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [corporation, setCorporation] = useState('');

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className=' flex justify-center items-center h-screen'>
    <div className="bg-gray-600  text-black p-7 rounded-md ">
      <form onSubmit={handleSubmit} className="space-y-4 flex gap-7  ">
        <div>
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        {/* Dropdowns with example options */}

        <div>
          <label htmlFor="assembly" className="block">Assembly</label>
          <select
            id="assembly"
            value={assembly}
            onChange={(e) => setAssembly(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Assembly</option>
            <option value="123">123</option>
          </select>
        </div>
        </div>
        <div>
        <div>
          <label htmlFor="constituency" className="block">Constituency</label>
          <select
            id="constituency"
            value={constituency}
            onChange={(e) => setConstituency(e.target.value)}
            className="block  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Constituency</option>
            <option value="123">123</option>
          </select>
        </div>
        <div>
          <label htmlFor="district" className="block">District</label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select District</option>
            <option value="123">123</option>
          </select>
        </div>
        <div>
          <label htmlFor="panchayath" className="block">Panchayath</label>
          <select
            id="panchayath"
            value={panchayath}
            onChange={(e) => setPanchayath(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Panchayath</option>
            <option value="123">123</option>
          </select>
        </div>
        <div>
          <label htmlFor="municipality" className="block">Municipality</label>
          <select
            id="municipality"
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Municipality</option>
            <option value="123">123</option>
          </select>
        </div>
        <div>
          <label htmlFor="corporation" className="block">Corporation</label>
          <select
            id="corporation"
            value={corporation}
            onChange={(e) => setCorporation(e.target.value)}
            className="block  w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Corporation</option>
            <option value="123">123</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Sign Up
          </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
