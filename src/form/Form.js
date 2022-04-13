import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [Name, setName] = useState("");
  const [desc, setdesc] = useState("");
  const [type, settype] = useState("");
  const [file, setfile] = useState(null);
  const [fileName, setfilename] = useState("");
  const [filetype, setfiletype] = useState("");
  //const [list,setlist]=useState([])
  const [show, setshow] = useState({ vis: true });
  /*useEffect(()=>{
       axios.get("http://localhost:3001/info").then((resp)=>{
           setlist(resp.data)
       })
   },[])*/
  const submitform = () => {
    axios
      .post("http://localhost:3001/add", {
        nom: Name,
        description: desc,
        type: type,
        filename: fileName,
      })
      .then(() => {
        axios.post("http://localhost:3001/uploaddrive", {
          nom: Name,
          description: desc,
          type: type,
          filename: fileName,
          filetype: filetype,
        });
      });
    const form = new FormData();
    form.append("file", file);
    console.log(form);
    axios.post("http://localhost:3001/upload", form).then((res) => {
      console.log("file uploaded with success");
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={onsubmit} className="middle-box">
        <div className="form-title">Add Information</div>
        <div className="form-element">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label>Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => {
              settype(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <input
            type="file"
            name="file"
            onChange={(e) => {
              setfile(e.target.files[0]);
              setfilename(e.target.files[0].name);
              setfiletype(e.target.files[0].type);
            }}
          />
        </div>
        <div className="btn">
          <input
            type="submit"
            value="Confirmer"
            className="btn btn-light"
            onClick={submitform}
          />
        </div>
      </form>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
};

export default Form;
