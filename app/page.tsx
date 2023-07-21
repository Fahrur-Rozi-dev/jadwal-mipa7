import DigitalClock from "@/Components/GetTime";
import SubjectTable from "@/Components/Jadwal";
import TodayScheduleTable from "@/Components/JadwalHariIni";
import './globals.css'
import Development from "@/Components/alert";
import ColorInfo from "@/Components/ColorInfo";

export default function Home() {
  return (
    <main className="">
  <section>
      <Development />
      <DigitalClock />
      {/* <SubjectTable /> */}
      <br />
      <TodayScheduleTable />
      <div className="font-bold">
      <div className="text-center mt-5 mb-5">Penjelasan Warna</div>
      <div className="ml-5">
      <ColorInfo color='#ccf9cc' description="Hijau berarti Sudah selesai" />
      <ColorInfo color='#fdfdcd' description="Kuning berarti Sedang Berlangsung" />
      <ColorInfo color='#f3f3f3' description="Putih berarti Belum selesai" />
      </div>
    </div>


  <div className='air air1'></div>
  <div className='air air2'></div>
  <div className='air air3'></div>
  <div className='air air4'></div>
  <div className="pbKhusus"></div>
</section>
    </main>
  )
}
