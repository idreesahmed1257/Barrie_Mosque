'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const CommunityNews = () => {
    useEffect(() => {
        let timeout;

        const handleMessage = (e) => {
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'events') {
                const targetFrame = document.getElementById('events-frame');
                if (targetFrame) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        targetFrame.style.height = `${e.data.height}px`;
                    }, 100); // Debounce time, can be adjusted
                }
            }
        };

        const handleIframeLoad = () => {
            const targetFrame = document.getElementById('events-frame');
            if (targetFrame) {
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        const retryAdjustHeight = () => {
            const targetFrame = document.getElementById('events-frame');
            if (targetFrame) {
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        window.addEventListener('message', handleMessage);

        const iframe = document.getElementById('events-frame');
        if (iframe) {
            iframe.addEventListener('load', handleIframeLoad);
        }

        // Retry mechanism
        const retryInterval = setInterval(retryAdjustHeight, 2000); // Retry every 2 seconds

        return () => {
            window.removeEventListener('message', handleMessage);
            if (iframe) {
                iframe.removeEventListener('load', handleIframeLoad);
            }
            clearInterval(retryInterval); // Clear the retry interval on cleanup
        };
    }, []);

    return (
        <iframe
            id="events-frame"
            src="https://themasjidapp.org/129192/events?&css=.bg-primary%7Bbackground:%23042A29;color:%23F2F2F2;"
            style={{ width: '100%' }}
            frameBorder="0"
            scrolling="no"
        />
    );
};

export default dynamic(() => Promise.resolve(CommunityNews), { ssr: false });
