import React, { useState, useEffect } from "react";
import Edit from "../component/Edit";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  useHistory,
} from "react-router-dom";
import QRCode from 'react-qr-code';
import "./Tasks.css";
const Tasks = () => {
  const [list, setlist] = useState([]);

  const [id, setId] = useState(0);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/info").then((resp) => {
      setlist(resp.data);
    });
    setlist([
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
      { id: 1, nom: "feres", description: "salem", type: "type" },
    ]);
  }, []);
  const deleteuser = (id) => {
    axios.post("http://localhost:3001/delete", { userid: id }).then(() => {
      window.location.reload();
    });
  };

  const onImageCownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };


  return (
    <div className="tasks-container">
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>description</th>
            <th>type</th>
            <th>image</th>
            <th>action</th>
            <th>QR code</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.nom}</td>
                <td>{val.description}</td>
                <td>{val.type}</td>
                <td>
                  <img src={val.image} />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{
                      marginRight: "20px",
                    }}
                    onClick={() => {
                      history.push("/Edit/" + val.id);
                    }}
                  >
                    {" "}
                    edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteuser(val.id)}
                  >
                    delete{" "}
                  </button>
                </td>
                <td>
                  <QRCode
                    id="QRCode"
                    value={`${val.id}`}
                    level={"H"}
                    size={100} />
                  <input
                    type="button"
                    value="Download QR"
                    onClick={onImageCownload}
                  />

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
