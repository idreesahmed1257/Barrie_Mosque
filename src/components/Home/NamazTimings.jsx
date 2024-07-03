'use client'
import React, { useEffect } from 'react';

const NamazTimings = ({ timings, currentDate }) => {
    useEffect(() => {
        let timeout;

        const handleMessage = (e) => {
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'prayers') {
                const targetFrame = document.getElementById('prayers-frame');
                if (targetFrame) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        targetFrame.style.height = `${e.data.height}px`;
                    }, 100); // Debounce time, can be adjusted
                }
            }
        };

        window.addEventListener('message', handleMessage);

        const handleIframeLoad = () => {
            const targetFrame = document.getElementById('prayers-frame');
            if (targetFrame) {
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        const iframe = document.getElementById('prayers-frame');
        if (iframe) {
            iframe.addEventListener('load', handleIframeLoad);
        }

        return () => {
            window.removeEventListener('message', handleMessage);
            if (iframe) {
                iframe.removeEventListener('load', handleIframeLoad);
            }
        };
    }, []);

    return (
        <div style={{ height: '600px' }}>
            <iframe
                id="prayers-frame"
                src="https://themasjidapp.org/129192/prayers?&css=.bg-primary%7Bbackground:%23042A29;color:%23F2F2F2"
                style={{
                    width: '98%',
                    border: '2px solid #ccc',
                    borderRadius: '10px',
                    height: '100%',
                    margin: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
                frameBorder="1"
                scrolling="no"
            />
        </div>
    );
};

export default NamazTimings;
