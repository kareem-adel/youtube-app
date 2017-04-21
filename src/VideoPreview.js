import React from 'react';

function VideoPreview(props) {
    console.log(props.activeVideo);
    if (props.activeVideo.id != null) {
        return (
            <div>
                <iframe className="video-preview" width="560" height="315" src={"https://www.youtube.com/embed/" + props.activeVideo.id.videoId} frameborder="0" allowfullscreen></iframe>
                <div className="video-description">
                    <h4>{props.activeVideo.snippet.title}</h4>
                    <h5>{props.activeVideo.snippet.channelTitle}</h5>
                    <p>{props.activeVideo.snippet.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default VideoPreview;
