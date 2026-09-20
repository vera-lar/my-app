'use client';
import { useEffect, useState } from "react";
const VeraPage : React.FC = () => {
    const color = ['blue', 'white', 'pink', 'yellow'];
    const[boxes,setboxes] = useState<number>(0);
    const[index, setindex] = useState<number>(0);
    useEffect(() => {
        if(boxes > 3){
            setboxes(0);
        }
    }, [boxes])
    return(
        <div className="flex justify-center items-center h-screen w-full bg-white ">
          <div className="flex justify-center items-center gap-5 flex-col bg-white shadow-2xl w-80 h-80 ">
            <div className="flex justify-center items-center w-40 h-40 rounded-2xl bg-blue-600" style={{
                backgroundColor: color[boxes]

            }}>{color[index]}</div>
            <h1 className="text-black">{boxes}</h1>
            
           <button className="p-2 rounded shadow-2xl bg-blue-400" onClick={()=>setboxes((prev: number) => prev + 1)}>change box</button>
         </div>
        </div>
    )
}
export default VeraPage;