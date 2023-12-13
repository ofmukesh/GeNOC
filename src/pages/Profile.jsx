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
    <div className="p-4 md:p-8">
      {/* cards */}
      <div className="md:flex flex-row gap-2 ">
        {/* card-1 */}
        <div className="md:w-1/2 sm:mt-0 mt-4 bg-gray-200 rounded p-4">
          {/* name */}
          <div className="mt-1 flex flex-row text-center">
            <div className="w-1/3 font-semibold">Name</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.name}</div>
          </div>
          {/* father name */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Father Name</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.fatherName}</div>
          </div>
          {/* DOB */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Date of Birth</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.dateOfBirth}</div>
          </div>
          {/* email */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Email</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.email}</div>
          </div>
          {/* mobile no. */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Mobile no.</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.mobileNo}</div>
          </div>
        </div>
        {/* card-2 */}
        <div className="md:w-1/2 sm:mt-0 mt-4 bg-gray-200 rounded p-4">
          {/* reg no. */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Registration no.</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.registrationNo}</div>
          </div>
          {/* roll no. */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Roll no.</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.rollNo}</div>
          </div>
          {/* branch */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Branch</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.branch}</div>
          </div>
          {/* Admission Year */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">Admission Year</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1"> {student.admissionYear}</div>
          </div>
          {/* last login */}
          <div className="mt-1 flex flex-row text-center text-gray-700">
            <div className="w-1/3 font-semibold">last login</div>
            <div className="w-1/3 font-semibold">:</div>
            <div className="w-1/3 ms-1">
              <i>{student.lastLogin}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
