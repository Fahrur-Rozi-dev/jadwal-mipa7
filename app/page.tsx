import DigitalClock from "@/Components/GetTime";
import SubjectTable from "@/Components/Jadwal";
import TodayScheduleTable from "@/Components/JadwalHariIni";
import './globals.css'

export default function Home() {
  return (
    <main className="">
      <div>tes</div>
      <DigitalClock />
      {/* <SubjectTable /> */}
      <br />
      <TodayScheduleTable />
    </main>
  )
}
