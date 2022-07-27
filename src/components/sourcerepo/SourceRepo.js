import { Link } from "react-router-dom";

function SourceRepo() {
  return (
    <div className="ui container">
      <div className="ui very padded piled tertiary segment">
        <h1 className="ui header " style={{ color: "firebrick" }}>
          {/* <i class="hand point right outline icon"></i> */}
          Find the Source Repo{" "}
          <a
            href="https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/"
            target="_blank"
          >
            here
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SourceRepo;
