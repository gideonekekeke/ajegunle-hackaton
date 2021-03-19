import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../AuthState/GlobalContext";
import pix from "../Components/img/se.jpeg";
import { app } from "../Base";
import AddImage from "./AddImage";
import TotalView from "./TotalView";
import Comment from "./Comment";
import ReadMore from "read-more-react";
import Ajsecure from "../ayama/Ajsecure/Ajsecure";
import JoshCard from "./JoshCard/Joshcard";

const post = app.firestore().collection("posts");
const db = app.firestore().collection("securityUser");

function HomeView({ com, createdBy }) {
  const { currentData, current } = useContext(GlobalContext);
  const [total, setTotal] = useState([]);
  const [name, setName] = useState([]);

  const getTotal = async () => {
    const allGet = await app.auth().currentUser;

    if (allGet) {
      await post.orderBy("createdAt", "desc").onSnapshot((snap) => {
        const items = [];
        snap.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setTotal(items);
      });
    }
  };

  const getName = async () => {
    const newUser = await app.auth().currentUser;

    if (newUser) {
      db.doc(createdBy)
        .get()
        .then((doc) => {
          setName(doc.data());
        });
    }
  };

  useEffect(() => {
    getTotal();
    getName();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: "40px",
            width: "40px",
            margin: "10px",
            display: "flex",
          }}
        >
          <img
            src={currentData && currentData.avatar}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50px",
            }}
          />
        </div>
        <div style={{ margin: "10px", marginTop: "20px", color: "white" }}>
          {currentData && currentData.name}
        </div>
      </div>

      <Ajsecure />
      <JoshCard />
      <div>uijsekryjmc</div>
    </div>
  );
}

export default HomeView;
