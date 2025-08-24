import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

        <div data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            {/* tag box-with gradient border */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx bx-diamond'></i>
                    Introducing
                </div>
            </div>

            {/* main heading */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                Email For
                <br/>
                Developers
            </h1>

            {/* description */}
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta hic voluptatum illo architecto non nulla nesciunt dolor pariatur facilis?
            </p>

            {/* buttons */}
            <div className='flex gap-4 mt-12'>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
                    Documentation<i class='bx bx-link-external'></i>
                </a>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#">
                    GetStarted<i class='bx bx-link-external'></i>
                </a>
            </div>
        </div>

        {/* 3D Robot */}
         <Spline 
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="300"
         data-aos-duration="3000 "
         data-aos-offset="0" className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/GKobT7MC2LQlIRGz/scene.splinecode" />
    </main>
  )
}

export default Hero