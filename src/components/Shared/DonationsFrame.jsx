'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const DonationsFrame = () => {
    useEffect(() => {
        const handleMessage = (e) => {
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'donations') {
                const targetFrame = document.getElementById('donations-frame');
                if (targetFrame) {
                    targetFrame.style.height = `${e.data.height}px`;
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <iframe
            id="donations-frame"
            src="https://themasjidapp.org/129192/donations?&css=.bg-primary%7Bbackground:%23042A29;color:%23F2F2F2"
            style={{ width: '100%' }}
            frameBorder="0"
            scrolling="no"
        />
    );
};

export default dynamic(() => Promise.resolve(DonationsFrame), { ssr: false });
