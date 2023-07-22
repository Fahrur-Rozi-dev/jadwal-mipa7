


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
      { subject: 'Upacara/Perwalian', time: '07:00 - 07:45' },
      { subject: 'Fisika', time: '07:45 - 08:30' },
      { subject: 'Fisika', time: '08:30 - 09:15' },
      { subject: 'Biologi', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'Biologi', time: '10:15 - 11:00' },
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
      { subject: 'Matematika (Minat)', time: '08:30 - 09:15' },
      { subject: 'Matematika (Minat)', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'Bahasa Inggris', time: '10:15 - 11:00' },
      { subject: 'Matematika (Wajib)', time: '11:00 - 11:45' },
      { subject: 'SHOLAT', time: '11:45 - 12:15' },
      { subject: 'Matematika (Wajib)', time: '12:15 - 13:00' },
      { subject: 'Aqidah akhlak', time: '13:00 - 13:45' },
      { subject: 'Aqidah akhlak', time: '13:45 - 14:30' },
    ],
    Rabu: [
      { subject: 'PJOK', time: '07:00 - 07:45' },
      { subject: 'PJOK', time: '07:45 - 08:30' },
      { subject: 'Bahasa Jawa', time: '08:30 - 09:15' },
      { subject: 'Bahasa Inggris', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'Bahasa Inggris', time: '10:15 - 11:00' },
      { subject: 'Sejarah', time: '11:00 - 11:45' },
      { subject: 'SHOLAT', time: '11:45 - 12:15' },
      { subject: 'Sejarah', time: '12:15 - 13:00' },
      { subject: 'Prakarya', time: '13:00 - 13:45' },
      { subject: 'Prakarya', time: '13:45 - 14:30' },
    ],
    Kamis: [
      { subject: 'Quran Hadist', time: '07:00 - 07:45' },
      { subject: 'Quran Hadist', time: '07:45 - 08:30' },
      { subject: 'Biologi', time: '08:30 - 09:15' },
      { subject: 'Biologi', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'Bahasa Indonesia', time: '10:15 - 11:00' },
      { subject: 'Bahasa Indonesia', time: '11:00 - 11:45' },
      { subject: 'SHOLAT', time: '11:45 - 12:15' },
      { subject: 'FIKIH', time: '12:15 - 13:00' },
      { subject: 'FIKIH', time: '13:00 - 13:45' },
      { subject: 'SKI', time: '13:45 - 14:30' },
    ],
    Jumat: [
      { subject: 'Fisika', time: '07:00 - 07:45' },
      { subject: 'Fisika', time: '07:45 - 08:30' },
      { subject: 'Kimia', time: '08:30 - 09:15' },
      { subject: 'Kimia', time: '09:15 - 10:00' },
      { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
      { subject: 'Ekonomi', time: '10:15 - 11:00' },
      { subject: 'Ekonomi', time: '11:00 - 11:45' },
    ],
    Sabtu: [
        { subject: 'Bahasa Indonesia', time: '07:00 - 07:45' },
        { subject: 'Bahasa Indonesia', time: '07:45 - 08:30' },
        { subject: 'Matematika (Wajib)', time: '08:30 - 09:15' },
        { subject: 'Matematika (Wajib)', time: '09:15 - 10:00' },
        { subject: 'ISTIRAHAT', time: '10:00 - 10:15' },
        { subject: 'Kimia', time: '10:15 - 11:00' },
        { subject: 'Kimia', time: '11:00 - 11:45' },
        { subject: 'SHOLAT', time: '11:45 - 12:15' },
        { subject: 'Matematika (Minat)', time: '12:15 - 13:00' },
        { subject: 'Matematika (Minat)', time: '13:00 - 13:45' },
        { subject: 'Prakarya', time: '13:45 - 14:30' },
        { subject: 'Prakarya', time: '14:30 - 15:15' },

    ],
    Minggu: [
        { subject: 'LIBUR', time: '00:00 - 23:59' },
    ],

    // Tambahkan pelajaran dan jadwal harinya di sini sesuai kebutuhan
  };
  
  export default subjectsData;
  