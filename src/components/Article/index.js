import React, { memo } from "react";
import { FiHexagon, FiStar } from "react-icons/fi";
// "STYLUS"
import { Conatiner, InsightGroup, List, Inseight } from "./styles";

const Hilights = () => {
  return (
    <Conatiner id="insights">
      <h3>Explore Insights</h3>

      <small style={{ color: "#333" }}>
        Powered by <strong>Github</strong>
      </small>

      <InsightGroup id="insight-group">
        <List id="inside">
          <Inseight>
            <span>
              <a rel="noopener noreferrer" target="_blank" href="/">
                google virtual
              </a>
            </span>
            <p> A repo of goole with new assistante virtual </p>
            <div id="resouces">
              <span>
                <FiHexagon color="#8be" />
                341421
              </span>
              <span>
                <FiStar />
                23123
              </span>
            </div>
          </Inseight>

          <Inseight>
            <span>
              <a rel="noopener noreferrer" target="_blank" href="/">
                google virtual
              </a>
            </span>
            <p> A repo of goole with new assistante virtual </p>
            <div id="resouces">
              <span>
                <FiHexagon color="#8be" />
                341421
              </span>
              <span>
                <FiStar />
                23123
              </span>
            </div>
          </Inseight>

          <Inseight>
            <span>
              <a rel="noopener noreferrer" target="_blank" href="/">
                google virtual
              </a>
            </span>
            <p> A repo of goole with new assistante virtual </p>
            <div id="resouces">
              <span>
                <FiHexagon color="#8be" />
                341421
              </span>
              <span>
                <FiStar />
                23123
              </span>
            </div>
          </Inseight>

          <Inseight>
            <span>
              <a rel="noopener noreferrer" target="_blank" href="/">
                google virtual
              </a>
            </span>
            <p> A repo of goole with new assistante virtual </p>
            <div id="resouces">
              <span>
                <FiHexagon color="#8be" />
                341421
              </span>
              <span>
                <FiStar />
                23123
              </span>
            </div>
          </Inseight>
        </List>
      </InsightGroup>
    </Conatiner>
  );
};

export default memo(Hilights);
