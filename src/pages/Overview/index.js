import React, { useState } from "react";
import { FiActivity, FiAirplay, FiStar, FiPlus, FiCheck } from "react-icons/fi";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import {
  Container,
  Main,
  Center,
  Playlist,
  CreateList,
  Modals,
  Lists,
  Controls,
  Create,
} from "./styles";

function Modal() {
  function HandleCheck({ checked }) {
    if (checked) {
      return <FiCheck />;
    }

    return <FiPlus />;
  }

  return (
    <>
      <Modals id="create">
        <Lists>
          <li>
            <strong>vscode-docs</strong>
            <button>
              <FiPlus />
              Add
            </button>
          </li>

          <li className="added">
            <strong>DotNet Orientation</strong>
            <button>
              <HandleCheck checked={true} />
              Add
            </button>
          </li>

          <li>
            <strong>Initial with NodeJS</strong>
            <button>
              <FiPlus />
              Add
            </button>
          </li>
        </Lists>

        <Controls>
          Nome da lista
          <input
            placeholder="Que não exista"
            type="text"
            name="namer"
            id="namer"
          />
          <span>
            Artigos: <strong>3</strong>
          </span>
          <Create>Criar</Create>
        </Controls>
      </Modals>
    </>
  );
}

function Overview() {
  const [isActived, setIsActived] = useState(false);

  function HandleChoosed({ state }) {
    if (state) {
      return <Modal />;
    }

    return (
      <Playlist>
        <li>
          <div id="starred">
            <FiActivity />
            <span>Based on repositories you´re starred</span>
          </div>

          <div id="list">
            <div id="unik">
              <FiAirplay />
              <p>
                <a href="/">microsoft</a> /{" "}
                <strong>
                  <a href="/">vscode-docs</a>
                </strong>
              </p>
            </div>

            <div id="side">
              <button>
                <FiStar />
                Star
              </button>
              <span>3.1k</span>
            </div>
          </div>

          <div id="stamps">
            <span>Updated 33 minutes ago</span>
            <span>* CSS</span>
          </div>
        </li>

        <li>
          <div id="starred">
            <FiActivity />
            <span>Based on repositories you´re starred</span>
          </div>

          <div id="list">
            <div id="unik">
              <FiAirplay />
              <p>
                <a href="/">microsoft</a> /{" "}
                <strong>
                  <a href="/">vscode-docs</a>
                </strong>
              </p>
            </div>

            <div id="side">
              <button>
                <FiStar />
                Star
              </button>
              <span>3.1k</span>
            </div>
          </div>

          <div id="stamps">
            <span>Updated 33 minutes ago</span>
            <span>* CSS</span>
          </div>
        </li>

        <li>
          <div id="starred">
            <FiActivity />
            <span>Based on repositories you´re starred</span>
          </div>

          <div id="list">
            <div id="unik">
              <FiAirplay />
              <p>
                <a href="/">microsoft</a> /{" "}
                <strong>
                  <a href="/">vscode-docs</a>
                </strong>
              </p>
            </div>

            <div id="side">
              <button>
                <FiStar />
                Star
              </button>
              <span>3.1k</span>
            </div>
          </div>

          <div id="stamps">
            <span>Updated 33 minutes ago</span>
            <span>* CSS</span>
          </div>
        </li>

        <li>
          <div id="starred">
            <FiActivity />
            <span>Based on repositories you´re starred</span>
          </div>

          <div id="list">
            <div id="unik">
              <FiAirplay />
              <p>
                <a href="/">microsoft</a> /{" "}
                <strong>
                  <a href="/">vscode-docs</a>
                </strong>
              </p>
            </div>

            <div id="side">
              <button>
                <FiStar />
                Star
              </button>
              <span>3.1k</span>
            </div>
          </div>

          <div id="stamps">
            <span>Updated 33 minutes ago</span>
            <span>* CSS</span>
          </div>
        </li>

        <li>
          <div id="starred">
            <FiActivity />
            <span>Based on repositories you´re starred</span>
          </div>

          <div id="list">
            <div id="unik">
              <FiAirplay />
              <p>
                <a href="/">microsoft</a> /{" "}
                <strong>
                  <a href="/">vscode-docs</a>
                </strong>
              </p>
            </div>

            <div id="side">
              <button>
                <FiStar />
                Star
              </button>
              <span>3.1k</span>
            </div>
          </div>

          <div id="stamps">
            <span>Updated 33 minutes ago</span>
            <span>* CSS</span>
          </div>
        </li>
      </Playlist>
    );
  }

  return (
    <Container>
      <Header />

      <Main>
        <Center>
          <CreateList onClick={() => setIsActived(!isActived)}>
            Criar nova lista
          </CreateList>

          <HandleChoosed state={isActived} />
        </Center>
      </Main>
    </Container>
  );
}

export default Overview;
