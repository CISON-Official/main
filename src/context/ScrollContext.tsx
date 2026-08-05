import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext({
    scrollToTop: () => { }
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const { pathname } = useLocation();

    const scrollToTop = (smooth = false) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: smooth ? 'smooth' : 'auto',
        });
    };

    useEffect(() => {
        scrollToTop(false);
    }, [pathname]);

    return (
        <ScrollContext.Provider value={{ scrollToTop }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
