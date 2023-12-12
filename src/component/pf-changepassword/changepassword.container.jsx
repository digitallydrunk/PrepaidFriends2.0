import React, { useState } from "react";
import * as Icon from "react-feather";
import { notification, message } from "antd";
import axios from "axios";
import { useCookies } from "react-cookie";
import { URLs } from "../../routes/urls";
const ChangePassword = ({ handleTabClick }) => {
  const [cookies] = useCookies(["pfAuthToken"]);
  const [data, setData] = useState({
    password: "",
    password_confirmation: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "/api/change-password-api",
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.pfAuthToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          notification.success({
            message: "Success",
            description: "Password changed successfully",
          });
          handleTabClick(0);
        } else {
          message.error("Something went wrong! . Please try again.");
        }
      })
      .catch((error) => {
        message.error(error.response.data.error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          {/* <div>
            <label className="form-label font-medium">Old password :</label>
            <div className="form-icon relative mt-2">
              <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>

              <input
                type="password"
                className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                placeholder="Old password"
                required={true}
              />
            </div>
          </div> */}

          <div>
            <label className="form-label font-medium">New password :</label>
            <div className="form-icon relative mt-2">
              <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
              <input
                type="password"
                className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                placeholder="New password"
                required={true}
                name="password"
                value={data?.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="form-label font-medium">
              Re-type New password :
            </label>
            <div className="form-icon relative mt-2">
              <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
              <input
                type="password"
                className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                placeholder="Re-type New password"
                required={true}
                name="password_confirmation"
                value={data?.password_confirmation}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">
          {isLoading ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};
export { ChangePassword };
