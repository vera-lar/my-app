"use client";
import React, { useEffect, useState } from "react";
const HookPage: React.FC = () => {
  const [num, setnum] = useState<number>(3);
   const arr = ['love','vera', 'recheal', 'goat','pig','princess','piss off'];
  const [index, setindex] = useState<number> (num);
 
   useEffect(() => {
       if (index >= 6) {
        setindex(0);
        setnum(0);
       } else{
        setindex(num);
         }
   
  }, [num]);
    return(
    <div className="flex min-h-screen w-full justify-center items-center bg-white">
    <div className=" flex justify-center items-center w-[60%] h-75 bg-white shadow-2xl flex-col gap-5">
    <h1 className="text-black">{arr[index]}</h1>
    <h1 className="text-black">{num}</h1>
    <button className="p-2 rounded bg-blue-500 shadow" onClick={() => setnum(prev => prev + 1)}>update</button>
    
    </div>
    </div>
    
  )
};
export default HookPage;














              {/* 
              <button
                onClick={handlePurchase}
                className="mt-4 w-full rounded-lg bg-green-600 py-3 font-bold text-white hover:bg-green-700"
              >
                Purchase Cart ({totalCartItems} items)
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default PersonalTry;
Your image should be here

Make sure your project structure looks like:

your-project/
│
├── app/
│   └── page.tsx
│
├── public/
│   └── images/
│       └── sexycute.jpg
│
└── ...

Then this line will work:

src="/images/sexycute.jpg"

The important fixes are now all included: search actually filters the products, products are rendered with .map(), product is available to addToCart(), quantities increase correctly, +/- work in the cart, products can be removed, and purchase uses the actual cart quantity.


        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
                backgroundImage:'url({../images/sexycute.jpg})',
          
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/blackshort.PNG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60">
               <img src="../images/red.JPG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/telya.JPG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/whitegray.JPG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
               
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/SASQ5018.JPG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase(products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
            
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/ankara.PNG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
                
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/beach.PNG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/sandal.PNG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase(products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-120 w-100  rounded-2xl gap-3 shadow">
             <div className="flex  justify-center items-center shadow-2xl rounded-2xl bg-center bg-no-repeat h-60 w-60"style={{
               
                background: 'cover',
                backgroundSize : 'fit'
             }}>
               <img src="../images/jean.JPG" className="rounded-2xl shadow-2xl object-cover"
                 
                alt="best sport" />
        </div>
        <p className="text-black flex mt-16 ">best guys fashion two piece  $45 </p>
        <div className="flex justify-center items-center  flex-row gap-4">
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>handlePurchase (products)}>purchase</button>
        <button className="p-2 rounded shadow bg-blue-700" onClick={()=>addToCart (products)}>add to cart</button>
        </div>
        </div>

       </div>


        </div>
   )
}

export default PersonalTry;
*/}