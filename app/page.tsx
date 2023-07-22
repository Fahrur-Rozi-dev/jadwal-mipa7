import DigitalClock from "@/Components/GetTime";
import TodayScheduleTable from "@/Components/JadwalHariIni";
import './globals.css'
import Development from "@/Components/alert";
import ColorInfo from "@/Components/ColorInfo";
import SubjectList from "@/Components/SemuaMapel";


export default function Home() {
  return (
    <main className="">
  <section>
      <Development />
      <div className="font-sans font-bold text-xl text-center mt-5 bg-white p-5 mx-8 rounded-xl">
        <div>JADWAL PELAJARAN</div>
        <div>XI - MIPA 7</div>
      </div>
      <br />
      <TodayScheduleTable />
      <div className="font-bold bg-slate-800 text-white m-3 pb-8 pt-1 rounded-xl mt-10">
      <div className="text-center mt-5 mb-5">Penjelasan Warna</div>
      <div className="ml-5">
      <ColorInfo color='#ccf9cc' description="Hijau berarti Sudah selesai" />
      <ColorInfo color='#fdfdcd' description="Kuning berarti Sedang Berlangsung" />
      <ColorInfo color='#f3f3f3' description="Putih berarti Belum selesai" />
      </div>
    </div>
    <DigitalClock />


    <SubjectList />


  <div className='air air1'></div>
  <div className='air air2'></div>
  <div className='air air3'></div>
  <div className='air air4'></div>
  <div className="pbKhusus"></div>
</section>
    </main>
  )
}
