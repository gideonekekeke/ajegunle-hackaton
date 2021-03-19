import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "antd";
import { app } from "../Base";
// import "./mod.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
const db = app.firestore().collection("securityUser");
function SignUp() {
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [picture, setPicture] = useState(null);

  const ImageUpload = async (e) => {
    const File = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child(File.name);
    console.log(File);

    await storageRef.put(File);
    setPicture(await storageRef.getDownloadURL());
  };

  const signInNewUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await db.doc(newUser.user.uid).set({
      name,
      email,
      password,
      profile,
      avatar: await picture,
    });
    hist.push("/");
  };
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      // backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "white",
      // color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
      height: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className="buttonclass">
        Sign Up
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className={classes.paper}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                SIGN UP
              </div>
              <br />
              <br />
              <input
                onChange={ImageUpload}
                type="file"
                placeholder="file"
                style={{
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
              />
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
                style={{
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
              />

              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email"
                style={{
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
              />

              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  color: "black",
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
                type="password"
                placeholder="Password"
              />

              <input
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
                style={{
                  color: "black",
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
                type="text"
                placeholder="Biography"
              />
              <br />
              <Button
                onClick={() => {
                  signInNewUser();
                }}
                style={{
                  width: "30%",
                  height: "50px",
                  borderRadius: "5px",
                  backgroundColor: "#DE6316",
                  color: "white",
                  border: "1px solid gray",
                  fontFamily: "poppins",
                  outline: "none",
                  cursor: "pointer",
                  // marginTop: "20px",
                }}
              >
                SIGN UP
              </Button>
              <br />
              <div style={{ display: "flex" }}>
                Already Have an Account ?
                {/* <Link style={{ textDecoration: "none" }} to="/signup"> */}
                <div
                  style={{
                    marginLeft: "10px",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Log in{" "}
                </div>
                {/* </Link> */}
              </div>
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SignUp;

// const imageUpload = async (e) => {
//   const File = e.target.files[0];
//   const storageRef = app.storage().ref();
//   const fileRef = storageRef.child(File.name);

//   await fileRef.put(File);
//   setPicture(await fileRef.getDownloadURL());
// };

// const signUpUser = async () => {
//   const newSignUp = await app
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
//   if (newSignUp) {
//     await db.doc(newSignUp.user.uid).set({
//       name,
//       email,
//       password,
//       profile,
//       avatar: await picture,
//     });
//   }
// };
