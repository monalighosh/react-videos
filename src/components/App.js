import React from 'react';

// Components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearchSubmit = async (searchValue) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchValue
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  };
  
  render() {
   
    return (
      <div className='ui container'>
        <SearchBar
          placeholder='Search videos here...'
          onSearchSubmit={this.onSearchSubmit}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;