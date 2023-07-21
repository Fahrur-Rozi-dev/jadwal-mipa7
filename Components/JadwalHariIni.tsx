'use client'

// TodayScheduleTable.tsx
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/id'; // Import lokal bahasa Indonesia
import subjectsData from '@/Data/Data';// Impor subjectsData dari file terpisah
import "@/app/globals.css"

interface Subject {
  subject: string;
  time: string;
}

function TodayScheduleTable() {
  const [dayWIB, setDayWIB] = useState('');

  useEffect(() => {
    const updateDay = () => {
      const utcNow = new Date();
      const wibTimeZone = 'Asia/Jakarta';
      const wibNow = moment(utcNow).tz(wibTimeZone);
      wibNow.locale('id');

      const dayWIB = wibNow.format('dddd');
      const currentTime = wibNow.format('HH:mm:ss'); // Format waktu dengan detik
      setDayWIB(dayWIB);
    };

    const interval = setInterval(updateDay, 1000);

    return () => clearInterval(interval);
  }, []);

  const todaySchedule: Subject[] = subjectsData[dayWIB] || [];

  return (
    <div className="m-1 pbKhusus">
      <h2 className="text-xl font-bold font-sans mb-6 text-white text-center">Jadwal Pelajaran Hari Ini ( {dayWIB} )</h2>
      {todaySchedule.length > 0 ? (
        <table className="w-full border-collapse border border-gray-700 bg-white">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2">#</th>
              <th className="border border-gray-700 p-2">Mata Pelajaran</th>
              <th className="border border-gray-700 p-2">Jam</th>
            </tr>
          </thead>
          <tbody>
            {todaySchedule.map((subject, index) => (
              <tr
                key={index}
                className={getSubjectStatusClass(subject)}
              >
                <td className="border border-gray-700 p-2 text-center">{index + 1}</td>
                <td className="border border-gray-700 p-2 text-center font-extrabold">{subject.subject}</td>
                <td className="border border-gray-700 p-2 text-center font-extrabold">{subject.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
        <p className="mb-4">Tidak ada jadwal pelajaran untuk hari ini</p>
        <div>jika jadwal tidak muncul silahkan refresh browser anda</div>
      </div>
      )}
    </div>
  );
}

// Fungsi untuk memeriksa status mata pelajaran (belum dimulai, sedang berlangsung, atau telah selesai)
function getSubjectStatusClass(subject: Subject): string {
  const currentTime = moment().format('HH:mm:ss'); // Format waktu saat ini dengan detik
  const [startTime, endTime] = subject.time.split(' - ');
  if (currentTime < startTime) {
    return 'bg-gray-200'; // Pelajaran belum dimulai
  } else if (currentTime >= startTime && currentTime <= endTime) {
    return 'bg-yellow-200'; // Pelajaran sedang berlangsung
  } else {
    return 'bg-green-200'; // Pelajaran telah selesai
  }
}

export default TodayScheduleTable;