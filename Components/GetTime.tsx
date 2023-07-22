
'use client'

// DigitalClock.js

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/id'; // Import lokal bahasa Indonesia
import './time.css'

function DigitalClock() {
  const [dayWIB, setDayWIB] = useState('');
  const [yearWIB, setYearWIB] = useState('');
  const [dateWIB, setDateWIB] = useState('');
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

      // Format tanggal dalam WIB (dalam bahasa Indonesia)
      const dateWIB = wibNow.format('LL');

      // Format jam, menit, dan detik dalam WIB
      const timeWIB = wibNow.format('HH:mm:ss');

      setDayWIB(dayWIB);
      setYearWIB(yearWIB);
      setDateWIB(dateWIB);
      setTimeWIB(timeWIB);
    };

    // Perbarui jam setiap detik (1000 milidetik)
    const interval = setInterval(updateClock, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-3 rounded-xl bg-slate-800 mt-10 pt-4">
    <div className='container'>
      <div className='display-date gap-2 text-white font-sans'>
      <span>{dayWIB}</span>
      <span>{dateWIB}</span>
      </div>
      <div className='container2'>
      <span className='display-time'>{timeWIB}</span>
      </div>
    </div>

    </div>
  );
}

export default DigitalClock;
