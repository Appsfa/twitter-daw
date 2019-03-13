import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class UITwitter extends React.Component{

  render(){
    return (
      <div class="container-fluid bg-primary">
        <div class="row">
          <div class="col-1">

          </div>
          <div class="col-10">
            <div class="container-fluid mt-4">
              <div class="row pt-2">
                <div class="col-3">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-12">
                              CONTENIDO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-12">
                              CONTENIDO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-12">
                              CONTENIDO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1">

          </div>
        </div>
      </div>
    );
  }
}

class HeaderTwitter extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active text-secondary">
              <a class="nav-link" href="#"><small><i class="material-icons float-left mr-2">home</i><b>Inicio</b></small></a>
            </li>
            <li class="nav-item text-secondary">
              <a class="nav-link" href="#"><small><i class="material-icons float-left mr-2">notifications_none</i><b>Notificaciones</b></small></a>
            </li>
            <li class="nav-item text-secondary">
              <a class="nav-link" href="#"><small><i class="material-icons float-left mr-2">mail_outline</i><b>Mensajes</b></small></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

ReactDOM.render(
  <HeaderTwitter/>,
  document.getElementById('header')
);

ReactDOM.render(
  <UITwitter/>,
  document.getElementById('root')
);
