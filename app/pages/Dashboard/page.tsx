'use client';
import { useCallback, useEffect,useRef,useState } from "react";
const DifferentColors: React.FC=() =>{
    const containerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const colors = ['green','black', 'blue', 'white', 'pink'];
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);
    useEffect(()=>{
        containerRef.current!.onmouseenter = () => changeColor();
        containerRef.current!.style.backgroundColor = colors[count] ;
    }, [count]) 
    const changeColor = ()=> {
        if(count <= 4){
            setCount(count + 1);
        }else{
            setCount(0);
        }
    }
   useEffect(() => {
      rightRef.current!.onmouseenter = () => displayColors();
      rightRef.current!.style.backgroundColor = colors[color];
     }, [color])
     const displayColors = () => {
        if(color <= 4){
         setColor(color + 1);
        }else{
          setColor(0);
        }
      }
    return(
        <div className="w-full h-screen">
           <div 
            ref={containerRef} 
           className="w-1/2 h-full bg-amber-50 flex justify-center">
           </div>
           <div 
            ref={rightRef} 
           className="w-1/2 h-full bg-amber-300 flex justify-center">
           </div>
     </div>
    );
}
export default DifferentColors;