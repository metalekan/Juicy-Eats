import React from 'react'
import Logo from '../assets/quick-delivery-removebg.png';

const Delivery = () => {
  return (
    <div className='max-w-[1520px] bg-white py-16 px-4 m-auto'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className="mx-auto grid items-center md:grid-cols-2">
        <img src={Logo} alt="logo_png" className='mx-auto my-4' />
        <div className="flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold '>Get The App</p>
          <h1 className='sm:text-2xl md:text-4xl text-2xl py-2 font-bold'>Limitless Convenience on-demand</h1>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, porro molestiae reprehenderit quisquam unde est animi facere fugit deserunt iusto pariatur vitae dolores ducimus laudantium excepturi quos obcaecati, vel itaque.
          Libero, non? Iste aliquid veniam eos nulla facere quos ctus rerum quasi laborum ut sed, tempora amet libero deleniti assumenda aut fugiat quam magni accusamus unde asperiores cupiditate suscipit id cum. Omnis.</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>

    </div>
  )
}

export default Delivery