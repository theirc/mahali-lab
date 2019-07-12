"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var VideoPlayer = (function(_React$Component) {
  _inherits(VideoPlayer, _React$Component);

  function VideoPlayer() {
    _classCallCheck(this, VideoPlayer);

    var _this = _possibleConstructorReturn(
      this,
      (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this)
    );

    _this.updateVideo = _this.updateVideo.bind(_this);
    _this.state = {
      videos: videos,
      currentVideo: videos[0]
    };
    return _this;
  }

  _createClass(VideoPlayer, [
    {
      key: "updateVideo",
      value: function updateVideo(video) {
        this.setState({ currentVideo: video });
      }
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _state = this.state;
        var videos = _state.videos;
        var currentVideo = _state.currentVideo;

        var videoThumbnails = videos.map(function(video, i) {
          var cls =
            videos.length === i + 1 ? "video-thumb active" : "video-thumb";
          var style = {
            backgroundImage: "url(" + video.image + ")"
          };
          return React.createElement(
            "li",
            { className: cls, key: video.id },
            React.createElement("button", {
              className: "video-image",
              onClick: function onClick() {
                return _this2.updateVideo(video);
              },
              key: video.id,
              style: style,
              "aria-label": "{ video.title } video link"
            })
          );
        });
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "video-title bg-dark text-white" },
            currentVideo.title
          ),
          React.createElement(
            "div",
            { className: "container-4x3" },
            React.createElement("iframe", {
              src: currentVideo.url,
              title: "Video Player"
            })
          ),
          React.createElement(
            "div",
            { className: "carousel" },
            React.createElement(
              "div",
              { className: "wrap" },
              React.createElement(
                "ul",
                { className: "video-thumbs is-set" },
                videoThumbnails
              )
            ),
            React.createElement(
              "div",
              { className: "video-nav", "data-direction": "prev" },
              React.createElement("span", {
                className: "carousel-control-prev-icon",
                "aria-hidden": "true"
              }),
              React.createElement("span", { className: "sr-only" }, "Previous")
            ),
            React.createElement(
              "div",
              { className: "video-nav next", "data-direction": "next" },
              React.createElement("span", {
                className: "carousel-control-next-icon",
                "aria-hidden": "true"
              }),
              React.createElement("span", { className: "sr-only" }, "Next")
            )
          ),
          React.createElement(
            "div",
            { className: "bg-primary text-dark text-center" },
            currentVideo.tool_url &&
              React.createElement(
                "a",
                {
                  href: currentVideo.tool_url,
                  className: "btn btn-related-tool"
                },
                currentVideo.tool_title
              )
          )
        );
      }
    }
  ]);

  return VideoPlayer;
})(React.Component);

ReactDOM.render(
  React.createElement(VideoPlayer, null),
  document.getElementById("videoPlayer")
);
