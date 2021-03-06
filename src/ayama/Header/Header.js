import React from "react";
import "./HeaderStyle.css";
import HomeIcon from "@material-ui/icons/Home";
import ReportIcon from "@material-ui/icons/Report";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { app } from "../../Base";
import {
  HomeOutlined,
  SelectOutlined,
  SisternodeOutlined,
} from "@ant-design/icons";
import SignUp from "../../Components/Signup";
import { useContext } from "react";
import { GlobalContext } from "../../AuthState/GlobalContext";

function Header() {
  const { current, currenData } = useContext(GlobalContext);
  const hist = useHistory();
  return (
    <div>
      <div className="navAll">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="iconHome">
            <HomeOutlined className="conhom" />
            <div className="homeWrite">Home</div>
          </div>
        </Link>
        <Link
          style={{
            textDecoration: "none",
          }}
        >
          <div
            onClick={() => {
              hist.push("/report");
            }}
            className="iconReport"
          >
            <SisternodeOutlined className="conhom" />

            <div className="reportWrite">Report Case</div>
          </div>
        </Link>
        {/* <div className="userIfo">
          <div className="imgcon">

          </div>
          <div className="reportWrite">
            Anyamah
          </div>

        </div> */}

        <div>
          {current ? (
            <Button
              onClick={() => {
                app.auth().signOut();
                window.location.reload(true);
              }}
              className="buttonclass"
            >
              Sign Out
            </Button>
          ) : (
            <SignUp />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
