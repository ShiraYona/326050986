import {useEffect,useState} from 'react'

const Prasha=(url)=>{
    const[data,setData]=useState()

    useEffect(
        fetch(url)
        .then((res)=>{
            if(res.ok)
                return res.json()
            throw res
        })        
        .then((myData)=>console.log(myData))
        .then((myData)=>setData(myData))
        .then(()=>console.log(data))
        .catch((err)=>(console.log(err)))
        .then(()=>showData())
)
function showData(){
    data.map((i)=>{
        return(
        i.className==="parashat"&&
        <>
        <h1>{i.hebrew}</h1>
        <h5>תאור:{i.description}</h5>
        <h5>תאריך:{i.start}</h5>
        </>
        )}
    )
}
}
export default Prasha