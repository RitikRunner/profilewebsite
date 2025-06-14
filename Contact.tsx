import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className="container">
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0'>
        <div className='absolute inset-0 opacity-5 -z-10' style={{
          backgroundImage:`url(${grainImage})`
        }}></div>
        <div className='flex flex-col gap-8 items-center md:flex-row md:gap-16'>
          <div className=''>
    <h2 className='font-serif text-2xl md:text-3xl '>Let's create something amazing</h2>
    <p className='text-sm md:text-base mt-2'>Ready to bring your next project to life? Let's connect and discuss to see how I can help</p>
    </div>
    <div>
    <div className= ' text-white bg-gray-900 inline-flex px-6 h-12 rounded-xl items-center gap-2 mt-8 w-max border border-gray-950'>
    
      <a href= "mailto:ritiksharma10508@gmail.com">Contact Me</a>
      <ArrowUpRightIcon className="size-4"/>
    
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  
};
