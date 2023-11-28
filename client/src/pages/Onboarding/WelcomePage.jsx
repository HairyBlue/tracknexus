import { Link } from 'react-router-dom';
import WelcomeImage from '../../assets/Onboarding/welcome.png';
import BusLogo from '/Buslogo.png';

export default function WelcomePage() {
    return (
        <div className='flex h-full w-full gap-5 max-md:flex-col md:justify-evenly md:p-4 lg:h-[60%] lg:w-[750px] lg:shadow-lg'>
            <div className='border md:h-full'>
                <img src={WelcomeImage} alt='bus and mountain image' />
            </div>
            <div className='flex flex-col items-start max-md:h-full max-md:p-4 md:w-1/2 md:justify-evenly'>
                <div>
                    <div className='h-14 w-14'>
                        <img src={BusLogo} alt='' />
                    </div>
                    <div>
                        <h1 className='text-[48px] font-black leading-none'>
                            TrackNexus
                        </h1>
                        <p className='font-black text-zinc-400'>
                            Welcome to TrackNexus!
                            <br />
                            Your Gateway to Real-Time Bus Tracking.
                        </p>
                    </div>
                </div>

                <Link
                    className='w-1/2 rounded border-2 border-gray-950 bg-blue-400 text-2xl font-black max-md:m-auto'
                    to={'introduction'}
                >
                    <button className='w-full p-4'>Start</button>
                </Link>
            </div>
        </div>
    );
}
