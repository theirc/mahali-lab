class VideoPlayer extends React.Component {

  constructor() {
    super();
    this.updateVideo = this.updateVideo.bind(this);
    this.state = {
      videos: videos,
      currentVideo: videos[0]
    }

  }
  updateVideo(video) {
    this.setState({ currentVideo: video });
  }
  render() {
    const { videos, currentVideo } = this.state;
    const videoThumbnails = videos.map((video, i) => {
      var cls = (videos.length === i + 1) ? 'video-thumb active' : 'video-thumb';
      const style = {
        backgroundImage: `url(${video.image})`,
      }
      return (
        <li className={cls} key={video.id}>
          <button className="video-image" onClick={() => this.updateVideo(video)} key={video.id} style={style} />
        </li>
      );
    });
    return (
      <div>
        <div className="video-title bg-dark text-white">{currentVideo.title}</div>
        <div className="container-4x3">
          <iframe src={currentVideo.url}></iframe>
        </div>

        <div className="carousel">
          <div className="wrap">
            <ul className="video-thumbs is-set">
              {videoThumbnails}
            </ul>
          </div>
          <div className="video-nav" data-direction='prev'>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
          <div className="video-nav next" data-direction='next'>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </div>
        </div>
        <div className="bg-primary text-dark text-center">
          {currentVideo.tool_url && (
            <a href={currentVideo.tool_url} className="btn btn-related-tool">{currentVideo.tool_title}</a>
          )}
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <VideoPlayer />,
  document.getElementById('videoPlayer')
);