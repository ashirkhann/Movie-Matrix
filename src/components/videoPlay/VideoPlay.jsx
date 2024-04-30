import React from 'react';
import ReactPlayer from 'react-player/youtube';
import useFetch from '../../hooks/useFetch';
import './style.css';

const VideoPopup = ({ show, setShow, videoId, setVideoId, endpoint = 'movie' }) => {
    const { data: videoData, loading } = useFetch(`/${endpoint}/${videoId}/videos`);
    
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    // Render loading state while fetching data
    if (loading) {
        return (
            <div className={`videoPopup ${show ? 'visible' : ''}`}>
                <div className="opacityLayer" onClick={hidePopup}></div>
                <div className="videoPlayer">
                    Loading...
                </div>
            </div>
        );
    }

    // Render video player if data is available
    if (videoData && videoData.results && videoData?.results.length > 0) {
        const trailerKey = videoData.results[0].key;
        return (
            <div className={`videoPopup ${show ? 'visible' : ''}`}>
                <div className="opacityLayer" onClick={hidePopup}></div>
                <div className="videoPlayer">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailerKey}`}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        );
    }

    // Render if no video data is available
    return (
        <div className={`videoPopup ${show ? 'visible' : ''}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                No trailer available.
            </div>
        </div>
    );
};

export default VideoPopup;
