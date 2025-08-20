'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

const MasjidApp = () => {
    useEffect(() => {
        let timeout;
        let retryTimeout;

        const handleMessage = (e) => {
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'posts') {
                const targetFrame = document.getElementById('posts-frame');
                if (targetFrame) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        targetFrame.style.height = `${e.data.height + 50}px`;
                        console.log(`Height set to: ${e.data.height + 50}px`);
                    }, 200); // Increased timeout to 200ms
                }
            }
        };

        const handleIframeLoad = () => {
            const targetFrame = document.getElementById('posts-frame');
            if (targetFrame) {
                console.log('Iframe loaded, requesting height');
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        const retryAdjustHeight = () => {
            const targetFrame = document.getElementById('posts-frame');
            if (targetFrame) {
                console.log('Retrying height adjustment');
                targetFrame.contentWindow.postMessage({ type: 'requestHeight' }, '*');
            }
        };

        window.addEventListener('message', handleMessage);

        const iframe = document.getElementById('posts-frame');
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
        <Grid container display={'flex'} justifyContent={'center'} >
            <Grid item xs={12} md={10}>
                <iframe
                    id="posts-frame"
                    src="https://themasjidapp.org/barrie/download"
                    style={{ width: '100%', display: 'flex', minHeight: '990px' }}
                    frameBorder="0"
                    scrolling="no"
                />
            </Grid>
        </Grid>
    );
};

export default dynamic(() => Promise.resolve(MasjidApp), { ssr: false });
