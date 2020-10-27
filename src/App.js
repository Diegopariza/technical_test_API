import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import VideoList from "./components/VideoList/VideoList";
import DetailVideo from "./components/DetailVideo/DetailVideo";
import youtube from "./API/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (textSearched) => {
    const response = await youtube.get("/search", {
      params: {
        q: textSearched,
        maxResults: 6,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("Response:", response);
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <section className="ui_container">
        <Nav handleFormSubmit={this.handleSubmit} />
        <VideoList
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
        <div className="ui_main-video">
          <DetailVideo video={this.state.selectedVideo} />
        </div>
      </section>
    );
  }
}

export default App;
