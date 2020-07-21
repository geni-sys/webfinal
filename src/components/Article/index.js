import React, { memo, useEffect, useCallback, useState } from "react";
import { hub } from "../../services/api";
// COMPONENTS
import { FiHexagon, FiStar } from "react-icons/fi";
// "STYLUS"
import { Conatiner, InsightGroup, List, Inseight } from "./styles";

const Hilights = () => {
  const [data, setData] = useState([]);

  const handleRequestOnGithub = useCallback(async () => {
    try {
      const response = await hub
        .get("/google/repos")
        .catch((error) => console.log(error.message));

      const [one, two, there, four] = response.data;

      setData([one, there, two, four]);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, []);

  useEffect(() => {
    handleRequestOnGithub();
  }, [handleRequestOnGithub]);

  return (
    <Conatiner id="insights">
      <h3>Explore Insights</h3>

      <small style={{ color: "#333" }}>
        Powered by <strong>Github</strong>
      </small>

      <InsightGroup id="insight-group">
        <List id="inside">
          {data.map((git) => (
            <Inseight key={git.id}>
              <span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={git.html_url}
                >
                  {git.full_name}
                </a>
              </span>
              <p> {git.description} </p>
              <div id="resouces">
                <span>
                  <FiHexagon color="#8be" />
                  {git.language}
                </span>
                <span>
                  <FiStar />
                  {git.size}
                </span>
              </div>
            </Inseight>
          ))}
        </List>
      </InsightGroup>
    </Conatiner>
  );
};

export default memo(Hilights);
