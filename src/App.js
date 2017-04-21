import React from 'react';
//import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import VideoList from './VideoList';
import VideoPreview from './VideoPreview';

const API_KEY = "AIzaSyCPQZ7N1L0LEzFiZHSTkoJLbE0fgFpv8Hk";

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

let params = {
    part: 'snippet',
    key: API_KEY,
    q: "",
    type: 'video',
    maxResults: 20
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeVideo: {},
            videos: []
        }
        this.searchVideos = this.searchVideos.bind(this);
        this.updateChoosenVideo = this.updateChoosenVideo.bind(this);
    }

    updateChoosenVideo(video) {
        console.log(video);
        this.setState({activeVideo: video});
    }

    searchVideos(event) {
        event.preventDefault();
        let searchKeyword = this.refs.keyword.value;
        params.q = searchKeyword;

        axios.get(API_URL, {params: params}).then(response => {
            this.setState({videos: response.data.items});
            this.setState({activeVideo: response.data.items[0]});
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchVideos}>
                    <div className="search-bar">
                        <img src="./youtube.png" width="120px"/>
                        <input className="search-input" ref="keyword" type="text"/>
                    </div>
                </form>

                <div className="main-content clr">
                    <table>
                        <tr>
                            <td valign="top">
                                <VideoPreview activeVideo={this.state.activeVideo}/>
                            </td>
                            <td valign="top">
                                <VideoList videos={this.state.videos} updateChoosenVideo={this.updateChoosenVideo}/>
                            </td>
                        </tr>
                    </table>

                </div>

            </div>
        );
    }
}

export default App;
