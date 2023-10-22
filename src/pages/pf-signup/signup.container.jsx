import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo_icon_64 from '../../assets/images/logo-icon-64.png';
import {PFInput} from '../../component/input/input.container';

export function Signup() {
  const [formData, setFormData] = useState({
    RegisterFirstName: '',
    RegisterLastName: '',
    LoginEmail: '',
    BusinessName: '',
    AcceptTandC: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.RegisterFirstName.trim()) {
      newErrors.RegisterFirstName = 'First name is required';
    }

    if (!formData.LoginEmail.trim()) {
      newErrors.LoginEmail = 'Email is required';
    } else if (!isValidEmail(formData.LoginEmail)) {
      newErrors.LoginEmail = 'Invalid email format';
    }

    if (!formData.BusinessName.trim()) {
      newErrors.BusinessName = 'Business name is required';
    }

    if (!formData.AcceptTandC) {
      newErrors.AcceptTandC = 'You must accept the Terms and Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link to="/index">
                <img src={Logo_icon_64} className="mx-auto" alt="" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form onSubmit={handleSubmit} className="text-start">
                <div className="grid grid-cols-1">
                  <PFInput
                    label="Enter First Name"
                    id="RegisterFirstName"
                    name="RegisterFirstName"
                    type="text"
                    required
                    placeholder="Enter your first name"
                    value={formData.RegisterFirstName}
                    onChange={handleChange}
                  />
                  {errors.RegisterFirstName && <p className="text-red-500">{errors.RegisterFirstName}</p>}
                  <PFInput
                    label="Enter Last Name"
                    id="RegisterLastName"
                    name="RegisterLastName"
                    type="text"
                    required
                    placeholder="Enter your last name"
                    value={formData.RegisterLastName}
                    onChange={handleChange}
                  />
                  {errors.RegisterLastName && <p className="text-red-500">{errors.RegisterLastName}</p>}
                  <PFInput
                    label="Email Address"
                    id="LoginEmail"
                    name="LoginEmail"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.LoginEmail}
                    onChange={handleChange}
                  />
                  {errors.LoginEmail && <p className="text-red-500">{errors.LoginEmail}</p>}
                  <PFInput
                    label="Business Name"
                    id="BusinessName"
                    name="BusinessName"
                    type="text"
                    required
                    placeholder="Enter your business name"
                    value={formData.BusinessName}
                    onChange={handleChange}
                  />
                  {errors.BusinessName && <p className="text-red-500">{errors.BusinessName}</p>}
                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="AcceptT&C"
                        name="AcceptTandC"
                        checked={formData.AcceptTandC}
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">
                        I Accept <Link className="text-indigo-600">Terms And Condition</Link>
                      </label>
                    </div>
                    {errors.AcceptTandC && <p className="text-red-500">{errors.AcceptTandC}</p>}
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Register"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account ? </span>
                    <Link to="/auth-login" className="text-black dark:text-white font-bold inline-block">
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
