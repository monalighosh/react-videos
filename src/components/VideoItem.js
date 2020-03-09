import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        className='ui image'
      />
      <div className='content'>
        <p className='header'>{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;