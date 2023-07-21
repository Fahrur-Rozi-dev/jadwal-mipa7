'use client'

import React from 'react';
import subjectsData from '@/Data/Data'; // Assuming you have defined the Subject interface in 'subjectsData.ts'

// Define interfaces for props
interface SubjectTableProps {
  day: string;
  subjects: Subject[];
}

interface Subject {
  subject: string;
  time: string;
}

// Komponen SubjectTable untuk menampilkan tabel
const SubjectTable: React.FC<SubjectTableProps> = ({ day, subjects }) => {
  return (
    <div className="text-center m-1">
      <h3 className="bg-slate-700 text-white p-4 text-xl mb-1 border outline-white">{day}</h3>
      <table className="w-full border-collapse border border-gray-700 bg-white">
        <thead>
          <tr>
            <th className="border border-gray-700 p-2 bg-slate-700 text-white">Mata Pelajaran</th>
            <th className="border border-gray-700 p-2 bg-slate-700 text-white">Waktu</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td className="border border-gray-700 p-2 text-center font-extrabold">{subject.subject}</td>
              <td className="border border-gray-700 p-2 text-center font-extrabold">{subject.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Komponen SubjectList untuk menampilkan semua tabel sebagai list
const SubjectList: React.FC = () => {
  return (
    <div className="text-center font-extrabold mt-5 mb-5">
      <h1>Jadwal Pelajaran</h1>
      {Object.keys(subjectsData).map((day) => (
        <SubjectTable key={day} day={day} subjects={subjectsData[day]} />
      ))}
    </div>
  );
};

export default SubjectList;


