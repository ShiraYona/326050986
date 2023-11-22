import {useEffect,useState} from 'react'
import { Fieldset } from 'primereact/fieldset';

const All=(url)=>{
    const[data,setData]=useState([])


    useEffect(()=>{fatchData()},[])
async function fatchData(){
    await fetch(url)
    .then((res)=>{res.json()  })  
    .then((myData)=>console.log(myData))
    .then((res)=>setData({data:res.result}))
    .then(()=>console.log(data))
    .catch((err)=>(console.log(err)))
}
 
return(
<>

{data&&  
<Fieldset legend="Header" toggleable collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
 {data.map((i)=>{
        <>
        <h1>{i.hebrew}</h1>
        <h5>תאור:{i.description}</h5>
        <h5>תאריך:{i.start}</h5>
        </>
        }
    )}
</Fieldset>}</>
//    { data && data.map((i)=>{
       
//         <>
//         <h1>{i.hebrew}</h1>
//         <h5>תאור:{i.description}</h5>
//         <h5>תאריך:{i.start}</h5>
//         </>
//         }
//     }
)}


export default All   
