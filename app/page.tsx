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
      {/* <div className="pb-10 pbKhusus">halo</div> */}


  <div className='air air1'></div>
  <div className='air air2'></div>
  <div className='air air3'></div>
  <div className='air air4'></div>
</section>
    </main>
  )
}
