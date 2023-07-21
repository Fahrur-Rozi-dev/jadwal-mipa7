'use client'
import React from 'react';
import subjectsData from '@/Data/Data'; // Impor subjectsData dari file terpisah

function SubjectTable() {
  return (
    <div>
      <h2>Tabel Mata Pelajaran</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Hari</th>
            <th>Mata Pelajaran</th>
            <th>Jam</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(subjectsData).map((day, index) => (
            subjectsData[day].map((subject, subIndex) => (
              <tr key={`${index}-${subIndex}`}>
                <td>{subIndex + 1}</td>
                <td>{day}</td>
                <td>{subject.subject}</td>
                <td>{subject.time}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectTable;



