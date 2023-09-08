import { useState, useEffect } from 'react';

const useScrollAnimation = () => {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const handleScroll = () => {
   
            const scrollPosition = window.scrollY
            const triggerScroll = window.innerHeight / 4;

            if(scrollPosition < triggerScroll) {
                setShouldAnimate(true);
            }
        
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)}
    },[])

    return shouldAnimate

}

export default useScrollAnimation ;