import { Link } from 'react-router-dom';
import RouteImage from '../../assets/Onboarding/Route.png';
import CheckSVG from '../../assets/Onboarding/check.svg';
export default function IntroPage() {
    return (
        <div className='flex h-full w-full gap-5 max-md:flex-col md:justify-evenly md:p-4 lg:h-[60%] lg:w-[750px] lg:shadow-lg'>
            <div className='flex justify-center md:h-full md:items-center'>
                <div className='border md:h-1/2'>
                    <img src={RouteImage} alt='bus and mountain image' />
                </div>
            </div>
            <div className='flex w-1/2 flex-col items-start justify-evenly'>
                <div>
                    <div>
                        <h1 className='md:text- xl  font-black'>
                            The Power of Real-Time Tracking
                        </h1>
                        <p className='text-base font-black text-zinc-400'>
                            With real-time tracking, you can:
                        </p>
                    </div>
                    <div className='mt-4 flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='max-w-[40px]'>
                                <img src={CheckSVG} alt='' />
                            </div>
                            <p className=' text-base font-black leading-none '>
                                Never Miss You Ride
                                <span className='inline-block text-zinc-400'>
                                    Receive instant update on bus locations and
                                    arrival times.
                                </span>
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='max-w-[40px]'>
                                <img src={CheckSVG} alt='' />
                            </div>
                            <p className='text-base font-black leading-none'>
                                Plan Smarter
                                <span className='inline-block text-zinc-400'>
                                    Optimize your journey with accurate arrival
                                    prediction.
                                </span>
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <div className='max-w-[40px]'>
                                <img src={CheckSVG} alt='' />
                            </div>
                            <p className='text-base font-black leading-none'>
                                Minimize Waste Time
                                <span className='inline-block text-zinc-400'>
                                    Say goodbye to long waits at bus stops.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    className='w-1/2 rounded border-2 border-gray-950 bg-blue-400 text-2xl font-black '
                    to={'../enable-location'}
                >
                    <button className='w-full p-4'>Next</button>
                </Link>
            </div>
        </div>
    );
}
