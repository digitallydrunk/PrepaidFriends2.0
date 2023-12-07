import React from 'react';
import * as Icon from 'react-feather';

const ChangePassword = () => {
    return (
        <div>
            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
            <form>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <label className="form-label font-medium">Old password :</label>
                        <div className="form-icon relative mt-2">
                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="" />
                        </div>
                    </div>

                    <div>
                        <label className="form-label font-medium">New password :</label>
                        <div className="form-icon relative mt-2">
                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="" />
                        </div>
                    </div>

                    <div>
                        <label className="form-label font-medium">Re-type New password :</label>
                        <div className="form-icon relative mt-2">
                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                            <input type="password" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="" />
                        </div>
                    </div>
                </div>

                <button className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
            </form>
        </div>
    )
}
export { ChangePassword }