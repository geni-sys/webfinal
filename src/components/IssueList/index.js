import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import ReactMarkdown from "react-markdown";
import Miniature from "../Miniature";
import CodeBlock from "../CodeBlock";
// STYLUS | STATIC
import { List, Item, Transcription, Link } from "./styles";

function IssueList({ mode, withoutFilter }) {
  const [data, setData] = useState([]);
  const [cookies] = useCookies([]);

  const getAllData = useCallback(async () => {
    const { token, user_id } = cookies;

    if (withoutFilter) {
      try {
        const response = await api
          .get("/issues", { headers: { Authorization: token || "" } })
          .catch((err) => {
            console.log(err.message);
            return;
          });

        setData(response.data);
      } catch (err) {
        console.log("Erro desconecido");
        return alert("Erro ao se conectar");
      }

      return;
    }

    try {
      const response = await api
        .get(`/home/${user_id}/issues`, {
          headers: { Authorization: token || "" },
        })
        .catch((err) => {
          console.log(err.message);
          return;
        });

      setData(response.data);
    } catch (err) {
      console.log("Erro desconecido");
      return alert("Erro ao se conectar");
    }
  }, [cookies, withoutFilter]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  function serializeTags(tags) {
    const separete = String(tags).split(",");
    const serials = separete.map((tag) => tag.trim());

    return (
      <>
        {serials.map((serial) => (
          <span key={serial}>
            <a
              style={{ color: "#4764f1" }}
              href={`/search?query_search=${serial}&tab=2`}
            >
              {serial}
            </a>
          </span>
        ))}
      </>
    );
  }

  return (
    <List
      withoutFilter={withoutFilter}
      mode={mode}
      className="unique"
      id="publications"
      style={{}}
    >
      {data.map((lesson) => (
        <Item mode={mode} key={lesson.id} id="issue-publication">
          <header>
            <span>
              <Miniature
                source={lesson.user.github + ".png"}
                width="40px"
                hright="40px"
              />
            </span>
            <strong>{lesson.user.name}</strong>
          </header>

          <div id="tags">{serializeTags(lesson.tags)}</div>

          <Transcription
            mode={mode}
            id="transcription"
            className="issue-limitaion"
          >
            <ReactMarkdown
              renderers={{ code: CodeBlock }}
              source={lesson.body}
            />
          </Transcription>

          <Link
            className="commun"
            href={`/user/learning/${lesson.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver completo
          </Link>
        </Item>
      ))}
    </List>
  );
}

export default IssueList;
