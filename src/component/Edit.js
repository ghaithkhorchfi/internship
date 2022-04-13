import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router'
import "./edit.css";

const Edit = ({id}) => {
  const [Name, setName] = useState('')
  const [desc, setdesc] = useState('')
  const [type, settype] = useState('')
  const [userid, setUserid] = useState(id)
  const [list, setlist] = useState([])
  useEffect(() => {
    console.log(id)
    axios.get("http://localhost:3001/info/"+id).then((resp) => {
      console.log(resp.data)
      setName(resp.data[0].nom)
      setdesc(resp.data[0].description)
      settype(resp.data[0].type)
      
    })
  }, [])


  const submitform = () => {
    axios.post("http://localhost:3001/edit", {
      nom: Name,
      description: desc,
      type: type,
      userid: userid
    }).then(() => {
      alert("work");
    });


  }
  return (
 
    
      <div className="form-container" >
      <form onSubmit={onsubmit} className="middle-box">
        <div className="form-title">Add Information</div>
        <div className="form-element">
          <label>ID</label>
          <input
            type="text"
            name="nom"
            value={id}
            disabled
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={Name}
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
            value={desc}
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
            value={type}
            onChange={(e) => {
              settype(e.target.value);
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
  )
}

export default Edit
