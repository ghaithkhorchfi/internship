import "./App.css";
import Form from "./form/Form";
import "./css-reset.css";
import React, { ImageBa } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  li,
} from "react-router-dom";
import Tasks from "./tasks/Tasks";
import Edit from "./component/Edit";

function App() {
  //const [show,setshow]=useState({vis:true})
  // const [hide,sethide]=useState({vis:true})
  const history = useHistory();
  return (
    <div className="App">
      <header>
        <h1>Thor System</h1>
        <div className="menu">
          <div
            className="menu-item"
            onClick={() => {
              history.push("/info");
            }}
          >
            Show Information
          </div>
          <div
            className="menu-item"
            onClick={() => {
              history.push("/formulaire");
            }}
          >
            Add Information
          </div>
          <div
            className="menu-item"
            onClick={() => {
              history.push("/");
            }}
          >
            Home App
          </div>
        </div>
      </header>
      <div className="content">
        <Route
          exact
          path="/formulaire"
          component={() => {
            return <Form />;
          }}
        ></Route>
        <Route
          exact
          path="/info"
          component={() => {
            return <Tasks />;
          }}
        ></Route>
        <Route
          exact
          path="/Edit/:id"
          render={(props) => <Edit id={props.match.params.id} />}
        />
      </div>
      {/* <h1>THOR SYSTEM</h1>
      <Route exact path="/formulaire" component={() => { return <Form /> }} ></Route>
      <Route exact path="/info" component={() => { return <Tasks /> }} ></Route>
      <Route exact path="/Edit/:id" render={(props)=> <Edit id={props.match.params.id}/>} />
      <div className='pos' >
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "20px"
        }} onClick={() => {
          history.push("/info")
        }

        }>show information</button>
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px"
        }} onClick={() => {
          history.push("/formulaire")
        }

        }>add information</button>
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px"
        }} onClick={() => {
          history.push("/")
        }

        }>home APP</button>
      </div> */}
    </div>
  );
}

export default App;
