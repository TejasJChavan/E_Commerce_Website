import React from 'react';

function Features() {
  return (
    <div className='flex w-3/5 lg:w-full gap-12 lg:gap-0 flex-col lg:flex-row max-w-[1200px] m-auto min-h-40 p-5 justify-around my-5 items-center'>
        <div className="bg-2 flex flex-col max-w-[400px] min-w-[250px]  lg:flex-row items-center justify-around p-5 rounded-xl gap-8">
            <img src="assets/shipping-96.png" alt="" className='h-4/5' />
            Fast Shipping
        </div>
        <div className="bg-2 flex flex-col max-w-[400px] min-w-[250px] lg:flex-row items-center justify-around p-5 rounded-xl gap-8">
            <img src="assets/check-100.png" alt="" className='h-4/5' />
            Vendora Select
        </div>
        <div className="bg-2 flex flex-col max-w-[400px] min-w-[250px] lg:flex-row  items-center justify-around p-5 rounded-xl gap-8">
            <img src="assets/return-100.png" alt="" className='h-4/5' />
            10 Day Return
        </div>
    </div>
  )
}
;
export default Features;