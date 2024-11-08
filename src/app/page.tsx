
import React from 'react'

const Home = () => {
  return (
    <>
 
 


    <div className='md:flex flex-row-reverse md:justify-around'>
     

    <div className='p-[35px] md:mt-[30px] md:pt-[30px]  pt-[25px]'>
      <h1 className='text-white md:text-[30px] text-[18px] font-bold '>I am <span className='text-orange-500 md:text-[40px] text-[19px] font-bold'>Qaimudin</span> Khuwaja</h1>
      <h2 className='text-orange-500 md:text-[22px] text-[15px] font-bold underline mt-[10px]'>I am Frontend Developer</h2>
<p className='text-white md:text-[18px] text-[14px] mt-[15px]'>As a passionate frontend developer, I specialize in <br/>crafting seamless user experiences that drive results. <br/>With expertise in modern technologies and a keen eye<br/> for design, I bring ideas to life.
Let's build something <br/>amazing together. Explore my website and discover<br/> how I can help elevate your brand's online presence.<br/>
I'm dedicated to delivering high-quality solutions<br/> that exceed expectations. Get in touch and let's<br/> discuss your next project.</p>
        <button className='bg-white h-[50px] w-[130px] text-orange-700 font-bold rounded-xl border-[9px] border-orange-500 mt-[15px] text-[15px] hover:bg-orange-500 hover:border-white hover:text-white'>Hire Me</button>
      </div>

      <div >
     <img className='md:h-[600px] md:w-[350px] mt-[25]px h-[400px] w-[250px]' src="faraaz.png" alt="" />
     </div>
     <div className='hidden md:block bg-orange-500 w-[4px] h-[500px]'></div>

     </div>

    </>
  )
}

export default Home