'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonthlyCalendar = () => {
    useEffect(() => {
        let timeout;

        const handleMessage = (e) => {
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'calendar') {
                const targetFrame = document.getElementById('calendar-month-frame');
                if (targetFrame) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        targetFrame.style.height = `${e.data.height}px`;
                    }, 100);
                }
            }
        };

        const handleIframeLoad = () => {
            const targetFrame = document.getElementById('calendar-month-frame');
            if (targetFrame) {
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        const retryAdjustHeight = () => {
            const targetFrame = document.getElementById('calendar-month-frame');
            if (targetFrame) {
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        window.addEventListener('message', handleMessage);

        const iframe = document.getElementById('calendar-month-frame');
        if (iframe) {
            iframe.addEventListener('load', handleIframeLoad);
        }

        const retryInterval = setInterval(retryAdjustHeight, 2000);

        return () => {
            window.removeEventListener('message', handleMessage);
            if (iframe) {
                iframe.removeEventListener('load', handleIframeLoad);
            }
            clearInterval(retryInterval);
        };
    }, []);

    return (
        <iframe
            id="calendar-month-frame"
            src="https://themasjidapp.org/129192/events/calendar/month"
            style={{ width: '100%' }}
            frameBorder="0"
            scrolling="no"
        />
    );
};

export default dynamic(() => Promise.resolve(MonthlyCalendar), { ssr: false });
