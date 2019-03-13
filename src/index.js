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

let profile = {

};

class UITwitter extends React.Component{

  constructor() {
     super();
     this.profile = {
      user: "@FabIslasM",
      name: "Javian con B de Vaca",
      photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg"
    };

    this.trends = {

    };

    this.tweets = [
      {
        user: "",
        name: "",
        photo: "",
        tweet: "",
        time: "",
      }
    ];
   }

  render(){
    return (
      <div class="container-fluid bg-primary">
        <div class="row">
          <div class="col-1">

          </div>
          <div class="col-10">
            <div class="container-fluid">
              <div class="row pt-2">
                <div class="col-3">
                  <div class="container-fluid p-0">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid p-0">
                          <div class="row">
                            {/* IMAGEN DE PORTADA */}
                            <div class="col-12 p-0">
                              {/* CONTENIDO */}
                              <div class="bg-facebook-me">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="container-fluid p-0">
                                <div class="row d-flex position-relative" style={{top: -25 + 'px'}}>

                                  <div class="col-4 align-self-start">
                                    <img src={this.profile.photo} width="100%" alt="foto" class="rounded-circle border border-3"/>
                                    <br></br>
                                  </div>

                                  <div class="col-8 align-self-end">
                                    <b class="name-user">{this.profile.name}</b>
                                    <br/>
                                    <span class="text-secondary">{this.profile.user}</span>
                                  </div>

                                </div>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="container-fluid p-0">
                                <div class="row">
                                  <div class="col-4">
                                    <small><b class="text-secondary">Tweets</b></small>
                                    <h5 class="text-primary"><b>6.334</b></h5>
                                  </div>
                                  <div class="col-4">
                                    <small><b class="text-secondary">Siguiendo</b></small>
                                    <h5 class="text-primary"><b>187</b></h5>
                                  </div>
                                  <div class="col-4">
                                    <small><b class="text-secondary">Seguidores</b></small>
                                    <h5 class="text-primary"><b>192</b></h5>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      {/* TENDENCIAS */}
                      <div class="col-12 mt-3 bg-white pt-2">
                        <big><b>Tendencias para ti </b></big><span><small class="text-primary"> Cambiar</small></span>
                        {/* <span class="ec ec-1234"></span> */}
                        <p>
                          <b class="text-primary">Cristiano Ronaldo</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">La Juventus completa la remontada ante el Atlético de Madrid </small><span class="ec ec-black-circle"></span><span class="ec ec-soccer"></span><span class="ec ec-red-circle"></span>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#La Voz Azteca</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">Inicia La Voz en Azteca y estos son los equipos</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#Feliz Miercoles</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">47,1 mil Tweets</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#AMiExLeDeseo</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">Guacala</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#AlfaEnElVive</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">2.915 Tweets</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">Bofo</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">5.306 Tweets</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#MeAlquiloComo</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">1.404 Tweets</small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#Poderoso</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0"></small>
                          </p>
                        </p>

                        <p>
                          <b class="text-primary">#NecesitoPilasPara</b>
                          <p class="line-height-0">
                            <small class="text-secondary line-height-0">1.030 Tweets</small>
                          </p>
                        </p>

                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid p-0">
                          <div class="row">
                            <div class="col-12">
                              <div class="container-fluid p-0">
                                <div class="row">

                                  <div class="col-12 bg-secondary py-2">
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text bg-transparent border-0"><img src={this.profile.photo} width="26px" alt="foto" class="rounded-circle"/></span>
                                      </div>
                                      <input type="text" class="form-control border-right-0 border-right-25" id="txtTweet1" placeholder="¿Qué esta pasando?"/>
                                      <div class="input-group-append border-left-0">
                                        <span class="input-group-text bg-white border-left-0 border-left-25"><i class="material-icons text-primary">insert_photo</i></span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-12">

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
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
