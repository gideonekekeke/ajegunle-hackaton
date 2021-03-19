import React from "react";
// import { AllCom, AllCom1, AllCom2, AllCom3 } from "./Ajstyle";
import "./Ajstyle.css";

import {
  NotificationOutlined,
  SecurityScanOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

function Ajsecure() {
  return (
    <div>
      <br />

      <center>
        <div className="ajecon">Ajegunle Report Center</div>
      </center>

      <center>
        <div className="ajcom1">
          <div className="ajcom2">
            <NotificationOutlined className="awares" />
            <div style={{ color: "white" }}>Awareness</div>
            <hr className="hrcon"></hr>
          </div>
          <div className="ajcom3">
            <SecurityScanOutlined className="awares" />
            <div style={{ color: "white" }}>Security</div>
            <hr className="hrcon"></hr>
          </div>
          <div className="ajcom4">
            <FileProtectOutlined className="awares" />
            <div style={{ color: "white" }}>Protections</div>
            <hr className="hrcon"></hr>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Ajsecure;
