import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app } from "../Base";

const post = app.firestore().collection("posts");

function ModalPicture({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    setSelectedImg(null);
  };
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getPack = async () => {
    const docRef = await post.doc(id);
    const docData = await docRef.get();

    setData(docData.data());
  };

  useEffect(() => {
    getPack();
  }, []);
  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(0,0,0, 0.5)",
      }}
      className="modal_drop"
    >
      <img
        src={data && data.fileUrl}
        style={{
          display: "block",
          maxWidth: "60%",
          maxHeight: "80%",
          margin: "60px auto",
          boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
          border: "3px solid white",
        }}
      />
    </div>
  );
}

export default ModalPicture;
