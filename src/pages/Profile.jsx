import React, { useEffect, useState } from "react";
import getStudetnInfo from "../api/student/getInfo";
import Laoder from "../components/common/Loader";

const Profile = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    getStudetnInfo().then((data) => setStudent(data));
  });

  if (!student) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Laoder className="mt-[-120px]" />
      </div>
    );
  }

  console.log(student);
  return (
    <section className="min-h-screen">
      <div className="container mx-auto flex justify-center md:mt-20 my-2">
        <div className="w-full mx-2 md:w-10/12 bg-gray-200 p-4 rounded-md">
          <div className="card mb-3">
            <div className="flex items-center">
              <div className="w-full items-center justify-center">
                <div className="p-2">
                  <h6 className="text-[18px] font-bold mt-2">
                    Personal Information
                  </h6>
                  <hr className="border-[1px] border-gray-400 mb-2" />
                  <div className="md:flex flex-wrap">
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Name</p>
                      <p className="text-gray-600">{student.name}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Father Name</p>
                      <p className="text-gray-600">{student.fatherName}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Date of Birth</p>
                      <p className="text-gray-600">{student.dateOfBirth}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Email</p>
                      <p className="text-gray-600">{student.email}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Mobile No.</p>
                      <p className="text-gray-600">{student.mobileNo}</p>
                    </div>
                  </div>
                  <h6 className="text-[18px] font-bold mt-5">
                    Academic Information
                  </h6>
                  <hr className="border-[1px] border-gray-400 mb-2" />
                  <div className="md:flex flex-wrap">
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Registration No.</p>
                      <p className="text-gray-600">{student.registrationNo}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Roll No.</p>
                      <p className="text-gray-600">{student.rollNo}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Branch</p>
                      <p className="text-gray-600">{student.branch}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Admission Year</p>
                      <p className="text-gray-600">{student.admissionYear}</p>
                    </div>
                    <div className="md:w-1/2 my-2 text-center flex items-center justify-between md:px-8">
                      <p className="text-black">Last Login</p>
                      <p className="text-gray-600">{student.lastLogin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
