'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/components/withAuth';

function dashboard() {
    const router = useRouter();
    const [userName, setUSerName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) {
            setUSerName(name);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('logged');
        localStorage.removeItem('userName');
        router.push('/');
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1>Dashboard</h1>
            {userName && <p>Bem-vindo, {userName}</p>}
    <button
    onClick={handleLogout}
    className='bg-red-600 text-white rounded
    cursor-pointer hover:bg-red-500 px-6 py-2 mt-5'
    >
        Sair
    </button>
        </div>
    );
}
export default withAuth(dashboard);