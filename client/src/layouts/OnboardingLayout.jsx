import { Outlet, useNavigate } from 'react-router-dom';

export default function OnboardingLayout() {
    const navigate = useNavigate();
    const tracknexusLocal = localStorage.getItem('tracknexus');
    if (tracknexusLocal) navigate('/routes', { replace: true });
    return (
        <main className='flex h-screen w-full items-center justify-center'>
            <Outlet />
        </main>
    );
}
