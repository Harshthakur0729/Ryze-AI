import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Main = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const themeData = localStorage.getItem('themeData');

        if (themeData) {
            const { mode, timestamp } = JSON.parse(themeData);
            const now = new Date().getTime();
            const fiveHoursInMs = 5 * 60 * 60 * 1000;

            if (now - timestamp > fiveHoursInMs) {
                localStorage.removeItem('themeData');
                setIsDark(false);
                document.documentElement.classList.remove('dark');
            } else if (mode === 'dark') {
                setIsDark(true);
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDark;
        setIsDark(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            const dataToSave = {
                mode: 'dark',
                timestamp: new Date().getTime()
            };
            localStorage.setItem('themeData', JSON.stringify(dataToSave));
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('themeData', JSON.stringify({
                mode: 'light',
                timestamp: new Date().getTime()
            }));
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-orange-50 dark:bg-zinc-950 transition-colors duration-500">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Main