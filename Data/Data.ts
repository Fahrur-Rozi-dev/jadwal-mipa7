


// subjectsData.ts
interface Subject {
    subject: string;
    time: string;
  }
  
  interface SubjectsData {
    [day: string]: Subject[];
  }
  
  const subjectsData: SubjectsData = {
    Senin: [
      { subject: 'Fisika', time: '07:00 - 07:45' },
      { subject: 'Fisika', time: '07:45 - 08:30' },
      { subject: 'Biologi', time: '08:30 - 09:15' },
      { subject: 'Biologi', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'SKI', time: '10:15 - 11:00' },
      { subject: 'SKI', time: '11:00 - 11:45' },
      { subject: 'SHOLAT', time: '11:45 - 12:15' },
      { subject: 'Bahasa Arab', time: '12:15 - 13:00' },
      { subject: 'Bahasa Arab', time: '13:00 - 13:45' },
      { subject: 'PPKN', time: '13:45 - 14:30' },
      { subject: 'PPKN', time: '14:30 - 15:15' },
    ],
    Selasa: [
      { subject: 'Seni Budaya', time: '07:00 - 07:45' },
      { subject: 'Seni Budaya', time: '07:45 - 08:30' },
      { subject: 'Matematika (Wajib)', time: '09:15 - 10:45' },
      { subject: 'Matematika (Wajib)', time: '09:15 - 10:45' },
      { subject: 'Matematika (Minat)', time: '09:15 - 10:45' },
      { subject: 'Matematika (Minat)', time: '09:15 - 10:45' },
      { subject: 'Bahasa Inggris', time: '09:15 - 10:45' },
      { subject: 'Aqidah akhlak', time: '09:15 - 10:45' },
      { subject: 'Aqidah akhlak', time: '09:15 - 10:45' },
    ],
    Rabu: [
      { subject: 'Biologi', time: '07:30 - 09:00' },
    ],
    Kamis: [
      { subject: 'Kimia', time: '07:30 - 09:00' },
      { subject: 'Ekonomi', time: '09:15 - 10:45' },
      { subject: 'Sejarah', time: '11:00 - 12:30' },
    ],
    Jumat: [
      { subject: 'Pendidikan Jasmani', time: '07:30 - 09:00' },
      { subject: 'B Arab', time: '09:00 - 12:00' },
      { subject: 'B Indonesia', time: '15:00 - 15:45' },
      { subject: 'B Inggris', time: '15:45 - 16:00' },
      { subject: 'B Indonesia', time: '16:01 - 18:00' },
      { subject: 'B Indonesia', time: '16:01 - 20:00' },
      { subject: 'B Indonesia', time: '20:00 - 21:00' },
      { subject: 'B Indonesia', time: '20:00 - 21:00' },
      { subject: 'B Indonesia', time: '20:00 - 21:00' },
      { subject: 'B Indonesia', time: '20:00 - 21:00' },
    ],
    Sabtu: [
        { subject: 'Quran Hadist', time: '07:00 - 07:45' },
        { subject: 'Quran Hadist', time: '07:30 - 09:00' },
        { subject: 'Matematika (Wajib)', time: '07:30 - 09:00' },
        { subject: 'Matematika (Wajib)', time: '07:30 - 09:00' },
        { subject: 'Bahasa Indonesia', time: '07:30 - 09:00' },
        { subject: 'Bahasa Indonesia', time: '07:30 - 09:00' },
        { subject: 'Matematika (Minat)', time: '07:30 - 09:00' },
        { subject: 'Matematika (Minat)', time: '07:30 - 09:00' },

    ],
    Minggu: [
        { subject: 'LIBUR', time: '00:00 - 24:00' },
    ],

    // Tambahkan pelajaran dan jadwal harinya di sini sesuai kebutuhan
  };
  
  export default subjectsData;
  