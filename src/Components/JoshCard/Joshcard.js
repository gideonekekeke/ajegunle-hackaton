import React, { useState, useEffect } from "react";

import { app } from "../../Base";
import { useHistory } from "react-router-dom";
import AddImage from "../AddImage";
const post = app.firestore().collection("posts");

const db = app.firestore().collection("securityUser");
function Joshcard() {
  const hist = useHistory();
  const [getCase, setGetCase] = useState([]);
  const [newGet, setNewGet] = useState([]);

  const gettingCase = async () => {
    const userCase = await app.auth().currentUser;

    if (userCase) {
      await post.orderBy("createdAt", "desc").onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setGetCase(item);
      });
    }
  };

  useEffect(() => {
    gettingCase();
  }, []);
  return (
    <div>
      <div className="main_body">
        {getCase.map(
          ({ id, createdAt, createdBy, fileUrl, crime, location }) => (
            <div className="main_bodyCard">
              <div className="main_container">
                <AddImage createdAt={createdAt} createdBy={createdBy} />
                <div style={{ marginTop: "10px" }}>{crime}</div>
                {fileUrl ? (
                  // <Link to={`/picture/${id}`}>
                  <div
                    style={{
                      height: "150px",
                      backgroundColor: "gray",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={fileUrl}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  // </Link>
                  <div
                    style={{
                      height: "150px",
                      backgroundColor: "silver",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={fileUrl}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    height: "30px",
                    // backgroundColor: "red",
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",

                    width: "90%",
                  }}
                >
                  <button
                    onClick={() => {
                      hist.push("/case");
                    }}
                  >
                    View more
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Joshcard;
