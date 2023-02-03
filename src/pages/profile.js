import React, { useState, useEffect } from "react";
import $api from "./api/axios";
import { toast } from "../helpers";
import Nav from "../layouts/Nav";
import { ClipLoader } from "react-spinners";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      $api
      .get("/profile").then(({ data }) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((err) => {
        let message;

        if (err && err.response) {
          const { data } = err.response;
          message = data.message;
        }

        toast.error(message || "Unable to fetch profile");
      });
    };
    fetchUserDetails();
  }, []);

  // const handleInput = (e) => {
  //   console.log(e.target.name, " : ", e.target.value);
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await $api
      .put(
        process.env.NEXT_PUBLIC_BASE_URL + `${user.id}`,
        user
      );
    } catch (err) {
      let message;

        if (err && err.response) {
          const { data } = err.response;
          message = data.message;
        }

        toast.error(message || "Profile update failed");
    }
  };
  return (
    <>
      <Nav />
      <div className="bg-gray-100 w-full font-ubuntu h-screen px-6 py-8">
        <div className="rounded-lg shadow p-8 bg-white">
          <div className="py-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold block">Farmer's Profile</span>
            </div>
          </div>
          <div className="">
            {loading ? (
              <div className="my-20 text-center">
              <ClipLoader
                color={"#166434"}
                size={30}
                aria-label="Loading Spinner"
              />
              <p className="mt-2 text-gray-500">Loading...</p>
            </div>
            ) : (
            <form onSubmit={handleSubmit}>
              <div className="pb-6">
                <label
                  htmlFor="fullname"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Fullname
                </label>
                <input
                  className="
                      block           
                      w-full
                      h-auto
                      p-2
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  name="name"
                  type="text"
                  value={user?.first_name}
                  placeholder={"name"}
                  // onChange={handleInput}
                  disabled
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="phonenumber"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Phone Number
                </label>
                <input
                  className="
                                    block           
                                    w-full
                                    h-auto
                                    p-2
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                  name="name"
                  type="tel"
                  value={user?.phone}
                  placeholder={"telephone"}
                  disabled
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="Date Of Birth"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Address
                </label>
                <input
                  className="
                                    block           
                                    w-full
                                    h-auto
                                    p-2
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                  name="name"
                  type="number"
                  value={user?.profile?.dob_day + "-" + user?.profile?.dob_month + "-" + user?.profile?.dob_year}
                  placeholder={user?.profile?.dob_day + "-" + user?.profile?.dob_month + "-" + user?.profile?.dob_year}
                  disabled
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="Gender"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Gender
                </label>
                <input
                  className="
                                    block           
                                    w-full
                                    h-auto
                                    p-2
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                  name="gender"
                  type="text"
                  value={user?.profile?.gender}
                  placeholder={user?.profile?.gender}
                  disabled
                />
              </div>
              {/* <div className="mt-4">
                <input
                  className="w-full text-white bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                  value="Update Profile"
                />
              </div> */}
            </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
Profile.requireAuth = true;
