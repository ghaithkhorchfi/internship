import React, { useState } from 'react'
import axios from 'axios'
import Edit from './Edit';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Task = ({ val }) => {
    const [userid, setUserid] = useState(val.id)
    let hist = useHistory()
    const deleteuser = () => {
        setUserid(val.id)
        console.log(userid)
        axios.post("http://localhost:3001/delete", { userid: userid }).then(() => { })

    }



    return (

        <div>

            <table className='table table-dark table-striped ' style={{
                width: "80%",
                margin: "50px 50px 50px 50px"
            }} >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>description</th>
                        <th>type</th>
                        <th>image</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.nom}</td>
                        <td>{val.description}</td>
                        <td>{val.type}</td>
                        <td>
                            <img src={val.image} />
                        </td>
                        <td>
                            <button className='btn btn-danger' style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                marginRight: "20px"
                            }} onClick={deleteuser
                            } > delete</button>
                            <button className='btn btn-danger' style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                marginRight: "20px"
                            }} onClick={deleteuser
                            } > </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Task
