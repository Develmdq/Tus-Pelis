

import ReactPlayer from "react-player";

const MyListComponent = ({ movie }) => {
  
  
  return (
    <div className="card my-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            // url="https://www.youtube.com/watch?v=${UoSSbmD9vqc}"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListComponent;
