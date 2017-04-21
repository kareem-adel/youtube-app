import React from 'react';

function VideoList(props) {
    if (props.videos != null) {
        return (
            <div className="sidebar">
                <ul>
                    {props.videos.map((video, i) => <li className='video-item' onClick={props.updateChoosenVideo.bind(this, video)} key={i}>
                        <table>
                            <tr>
                                <td><img src={video.snippet.thumbnails.medium.url}/></td>
                                <td>{video.snippet.title}</td>
                            </tr>
                        </table>
                    </li>)}
                </ul>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default VideoList;
