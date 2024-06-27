'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const HomePosts = () => {
    useEffect(() => {
        let timeout;

        const handleMessage = (e) => {
            console.log('Message received:', e);
            if (e.data && e.data.type === 'contentHeight' && e.data.page === 'posts') {
                const targetFrame = document.getElementById('posts-frame');
                if (targetFrame) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        targetFrame.style.height = `${e.data.height + 50}px`;
                        console.log(`Height set to: ${e.data.height}px`);
                    }, 100);
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
        <iframe
            id="posts-frame"
            src="https://themasjidapp.org/129192/posts"
            style={{ width: '100%', display: 'flex', }}
            frameBorder="0"
            scrolling="no"
        />
    );
};

export default dynamic(() => Promise.resolve(HomePosts), { ssr: false });
