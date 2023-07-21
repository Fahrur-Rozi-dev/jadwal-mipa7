
'use client'


import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/id'; // Import lokal bahasa Indonesia
import subjectsData from '@/Data/Data';

function DigitalClock() {
  const [dayWIB, setDayWIB] = useState('');
  const [yearWIB, setYearWIB] = useState('');
  const [timeWIB, setTimeWIB] = useState('');

  useEffect(() => {
    const updateClock = () => {
      // Tentukan zona waktu UTC
      const utcNow = new Date();

      // Konversi waktu UTC ke zona waktu WIB
      const wibTimeZone = 'Asia/Jakarta';
      const wibNow = moment(utcNow).tz(wibTimeZone);

      // Setel lokal bahasa menjadi bahasa Indonesia
      wibNow.locale('id');

      // Format hari dalam WIB (dalam bahasa Indonesia)
      const dayWIB = wibNow.format('dddd');

      // Ambil tahun dalam WIB
      const yearWIB = wibNow.format('YYYY');

      // Format jam, menit, dan detik dalam WIB
      const timeWIB = wibNow.format('HH:mm:ss');

      setDayWIB(dayWIB);
      setYearWIB(yearWIB);
      setTimeWIB(timeWIB);
    };

    // Perbarui jam setiap detik (1000 milidetik)
    const interval = setInterval(updateClock, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Jam Digital WIB</h1>
      <p>Hari: {dayWIB}</p>
      <p>Tahun: {yearWIB}</p>
      <p>Waktu: {timeWIB}</p>
    </div>
  );
}

export default DigitalClock;
