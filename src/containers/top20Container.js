import React from 'react';
import Top20List from '../components/top20List';
import Top20Song from '../components/top20Song';

class Top20Container extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      // console.log(data.feed.entry);
      this.setState({
        songs: data.feed.entry
      })
    })
    xhr.send();
  }

  render(){
    console.log(this.state.songs);
    return(
      <div>
        <h2 id="title">Top 20 Songs</h2>
        <Top20List passedSongs={this.state.songs}/>
      </div>
    );
  }
}

export default Top20Container;
