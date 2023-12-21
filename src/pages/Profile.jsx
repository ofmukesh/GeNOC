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
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <h6 style={{ writingMode: 'vertical-rl' }} className="text-5xl font-bold rotate-180 mr-12">Your Profile</h6>
        <div className="w-10/12 bg-gray-200 p-4 rounded-md">
          <div className="card mb-3">
            <div className="flex items-center">
              <div className="w-full items-center justify-center">
                <div className="p-4">
                  <h6 className="text-3xl font-bold my-4 underline">Personal Information</h6>
                  <div className="flex flex-wrap">
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Name</p>
                      <p className="text-gray-600">{student.name}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Father Name</p>
                      <p className="text-gray-600">{student.fatherName}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Date of Birth</p>
                      <p className="text-gray-600">{student.dateOfBirth}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Email</p>
                      <p className="text-gray-600">{student.email}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Mobile No.</p>
                      <p className="text-gray-600">{student.mobileNo}</p>
                    </div>
                  </div>
                  <h6 className="text-3xl font-bold my-4 underline">Academic Information</h6>
                  <div className="flex flex-wrap">
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Registration No.</p>
                      <p className="text-gray-600">{student.registrationNo}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Roll No.</p>
                      <p className="text-gray-600">{student.rollNo}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Branch</p>
                      <p className="text-gray-600">{student.branch}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Admission Year</p>
                      <p className="text-gray-600">{student.admissionYear}</p>
                    </div>
                    <div className="w-1/2 my-3 text-center flex items-center justify-between px-8">
                      <p className="font-semibold text-xl">Last Login</p>
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
