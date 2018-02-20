import React, {Component} from 'react';
import Top20Song from './top20Song'

class Top20List extends Component{


  render(){
    const top20 = this.props.passedSongs.map((song, index) => {
      return(
        <Top20Song
          key={index}
          position={index+1}
          artist={song['im:name'].label}
          title={song['im:artist'].label}
          logo={song['im:image'][2].label}
          link={song.link[1].attributes.href}
        />
      )
    }
  )

  return (
    <table className="table">
      <thead>
        {top20}
      </thead>
    </table>
  )
  }
}

export default Top20List;
