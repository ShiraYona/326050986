import { useState } from "react"
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import { Calendar } from 'primereact/calendar';



function Date(){
    const[startDate,setStartDate]=useState()
    const[endDate,setEndDate]=useState()

    const navigate= useNavigate();


      // const inputRefStart = useRef(null);
    // const inputRefEnd = useRef(null);

    // async function handleClickStart() {
    //     // console.log(inputRefStart.current.value);
    //     const s=inputRefStart.current.value
    //     setStartDate(s)
    //     console.log(startDate);
    //   }
    //   async function handleClickEnd() {
    //     console.log(inputRefEnd.current.value);
    //     setEndDate(inputRefEnd.current.value)
    //   }





   
return(
    <>
    <h5>תאריך התחלה</h5>
   <Calendar value={startDate} onChange={(e) => setStartDate(e.value)}></Calendar>
    <h5>תאריך סיום</h5>
    <Calendar value={startDate} onChange={(e) => setStartDate(e.value)}></Calendar>
  
    <br></br>
    <button onClick={()=>navigate("/prasha",startDate&&endDate&&{url:`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`})}>הצג פרשות שבוע</button>

    <button onClick={()=>navigate("/all",startDate&&endDate&&{url:`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`})}>הצג הכל</button>
    </>
)

 }
export default Date
// 