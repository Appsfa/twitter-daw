import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faComment, faRetweet } from '@fortawesome/free-solid-svg-icons'
// var moment = require('moment')
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/es-us'
import ReactTimeout from 'react-timeout'
library.add(faIgloo, faComment, faRetweet)
// import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let profile = {

};

class UITwitter extends React.Component{

  constructor(props) {
     super(props);

     this.state = {
      tweets: [],
      isLoading: true,
      profile: {
        user: "@Fab",
        name: "Fabián Moreno Islas",
        photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg"
      }
    };

     this.profile = {
      user: "@Fab",
      name: "Fabián Moreno Islas",
      photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg"
    }

    this.trends = [
      {
        trend: "Cristiano Ronaldo",
        content: 'La Juventus completa la remontada ante el Atlético de Madrid <span class="ec ec-black-circle"></span><span class="ec ec-soccer"></span><span class="ec ec-red-circle"></span>',
      },
      {
        trend: "#FelizMiercoles",
        content: '58,2 mil Tweets',
      },
      {
        trend: "Bofo",
        content: '9.210 Tweets',
      },
      {
        trend: "#WhatsApp",
        content: '7.814 Tweets',
      },
      {
        trend: "#AlfaEnElVive",
        content: '3.272 Tweets',
      },
      {
        trend: "#FICG34PosterGDT",
        content: '',
      },
      {
        trend: "Torre Bancomer",
        content: 'Desalojan edificios de Bancomer por presunta amenaza de bomba',
      },
      {
        trend: "#TeamInterjet",
        content: '',
      },
      {
        trend: "Tears for Fears",
        content: '',
      },
    ];

    this.tweets = [
      {
        user: "@Fab",
        name: "Javian con B de Vaca",
        photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg",
        tweet: "LO LOGRAMOS",
        time: "1m",
      },

      {
        user: "@Sirvent94",
        name: "Sirvent",
        photo: "https://pbs.twimg.com/profile_images/478571967809732608/gUMBaY9F_400x400.jpeg",
        tweet: "LO LOGRAMOS x2",
        time: "1m",
      }
    ];

    this.suggests = [
      {
        user: "@Fab",
        name: "Javian con B de Vaca",
        photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg",
      },

      {
        user: "@Sirvent94",
        name: "Sirvent",
        photo: "https://pbs.twimg.com/profile_images/478571967809732608/gUMBaY9F_400x400.jpeg",
      }
    ];

    this.onSubmit = this.handleSubmit.bind(this);
    // this.deleteTweet.bind(this);

   }

   componentDidMount() {
    fetch('https://still-garden-88285.herokuapp.com/draft_tweets')
      .then(response => response.json())
      .then(data => (this.setState({ tweets: data.draft_tweets, isLoading: false }), console.log(this.state)));
  }

  handleHover(e){
    console.log(e.target.parentElement.getAttribute('data-target'));
    document.getElementById(e.target.parentElement.getAttribute('data-target')).classList.add("show", "active");
  }

  handleHoverMouseOutIcon(e){
    console.log(e.target.parentElement.getAttribute('data-target'));
    document.getElementById(e.target.parentElement.getAttribute('data-target')).classList.remove("show", "active");
  }

  handleMouseOutDrop(e){
    e.target.classList.remove("show", "active");
  }

  deleteTweet(e){
    console.log(e.target.getAttribute('data-tweet'));
    let tweet = e.target.getAttribute('data-tweet');

    fetch(`https://still-garden-88285.herokuapp.com/draft_tweets/${tweet}`, {
    method: 'DELETE',
    })
    .then(this.setState({idLoading: true}))
    .then(setTimeout(this.componentDidMount.bind(this), 500));

  }

  handleSubmit(e){
    e.preventDefault();

    fetch('https://still-garden-88285.herokuapp.com/draft_tweets', {
    method: 'POST',
    body: JSON.stringify({
      user_name: this.state.profile.name,
      description: document.getElementById('txtTweet1').value,
      avatar: this.state.profile.photo
    }),
    headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(document.getElementById('txtTweet1').value = "", setTimeout(this.componentDidMount.bind(this), 500)
      );
  }

  render(){

    if(this.state.isLoading)
    {
      return (
        <div class="container-fluid">
          <div clas="row">
            <div class="col-12 text-center pt-5">
              <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }

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
                        {
                          this.trends.map((trend, i) => {
                            return(
                              <div>
                                <b class="text-primary">{trend.trend}</b>
                                <p class="line-height-0">
                                  <small class="text-secondary line-height-0" dangerouslySetInnerHTML={{__html: trend.content}}/>
                                </p>
                              </div>
                            )
                          })
                        }

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
                                    <form onSubmit={(e) => this.handleSubmit(e)}>
                                      <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text bg-transparent border-0"><img src={this.profile.photo} width="26px" alt="foto" class="rounded-circle"/></span>
                                        </div>
                                        <input type="text" class="form-control border-right-0 border-right-25" id="txtTweet1" placeholder="¿Qué esta pasando?"/>
                                        <div class="input-group-append border-left-0">
                                          <span class="input-group-text bg-white border-left-0 border-left-25"><i class="material-icons text-primary">insert_photo</i></span>
                                        </div>
                                      </div>
                                    </form>
                                  </div>

                                  {/* TWEETS */}
                                  <div class="col-12">
                                    <div class="container-fluid p-0">
                                      <div class="row">
                                        {

                                          this.state.tweets.map((tweet, i) => {
                                            return(
                                              <div class="col-12" id={tweet.id}>
                                                <div class="container-fluid p-0 pt-2">
                                                  <div class="row">
                                                    <div class="col-2 text-right">
                                                      <img src={tweet.avatar} width="45px" class="rounded-circle"/>
                                                    </div>
                                                    <div class="col-10">
                                                      <b>{tweet.user_name} </b> <span class="text-secondary">{tweet.user_name} </span> · <span class="text-secondary"><Moment fromNow>{tweet.created_at}</Moment></span>

                                                      <div class="dropdown dropright">
                                                        <a onMouseEnter={(e) => this.handleHover(e)} data-target={`dropmenu-${tweet.id}`} class="" href="#" role="button" id={`dropdownMenuLink-${tweet.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons float-right text-secondary">keyboard_arrow_down</i></a>
                                                        <div onMouseLeave={(e) => this.handleMouseOutDrop(e)} class="dropdown-menu" id={`dropmenu-${tweet.id}`} aria-labelledby={`dropdownMenuLink-${tweet.id}`}>
                                                          <a class="dropdown-item text-danger" onClick={(e) => this.deleteTweet(e)} data-tweet={tweet.id}>Elimiar</a>
                                                        </div>
                                                      </div>

                                                      <p>
                                                        {tweet.description}
                                                      </p>
                                                      <div class="container-fluid p-0">
                                                        <div class="row">
                                                          <div class="col-12 text-secondary">
                                                            {/* <FontAwesomeIcon icon="comment" /><FontAwesomeIcon icon="retweet" /> */}
                                                            <i class="material-icons icon-sm mr-5">comment</i><i class="material-icons icon-sm mr-5">reply</i><i class="material-icons icon-sm mr-5">favorite_border</i><i class="material-icons icon-sm mr-5">mail_outline</i>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="col-12 p-0">
                                                      <div class="dropdown-divider"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          }).reverse()
                                        }
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
                  </div>
                </div>
                <div class="col-3">
                  <div class="container-fluid p-0">
                    <div class="row">
                      <div class="col-12 bg-white">
                        <div class="container-fluid p-0 pt-2">
                          <div class="row">
                            <div class="col-12">
                              <big><b>A quién seguir </b></big>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 mt-3 bg-white">
                        <div class="container-fluid p-0">
                          <div class="row">
                            <div class="col-12 text-secondary line-height-1 py-3">
                              <small class="">
                                © 2019 TwitterSobre nosotros Centro de Ayuda Condiciones Política de privacidad Cookies Información sobre anuncios Marca Blog Estado Aplicaciones Empleos Marketing Empresas Desarrolladores
                              </small>
                            </div>
                            <div class="col-12 p-0">
                              <div class="dropdown-divider">

                              </div>
                            </div>
                            <div class="col-12 text-primary pb-3">
                              <small>
                                Publicitar en Twitter
                              </small>
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
  constructor() {
     super();
     this.profile = {
      user: "@Fab",
      name: "Javian con B de Vaca",
      photo: "https://pbs.twimg.com/profile_images/1073808672072056832/1NyNN4tl_400x400.jpg"
    };
  }
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        {/* <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item active">
              <a class="nav-link text-primary" href="#"><small><i class="material-icons float-left mr-2">home</i><b>Inicio</b></small></a>
            </li>
            <li class="nav-item text-secondary">
              <a class="nav-link" href="#"><small><i class="material-icons float-left mr-2">notifications_none</i><b>Notificaciones</b></small></a>
            </li>
            <li class="nav-item text-secondary">
              <a class="nav-link" href="#"><small><i class="material-icons float-left mr-2">mail_outline</i><b>Mensajes</b></small></a>
            </li>
          </ul>
          <div class="w-25 text-center mx-5">
            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" width="30px" class="mx-auto"/>
          </div>
          <form class="form-inline mr-auto ml-5">
            <div class="input-group input-group-sm">
              <input class="form-control mr-sm-2 search" type="search" placeholder="Buscar en Twitter" aria-label="Search"/>
            </div>
            <img src={this.profile.photo} class="rounded-circle mr-3 ml-1" width="35px"/>
            <button class="btn border-25 btn-primary my-2 my-sm-0 px-3" type="button"><small><b>Twittear</b></small></button>
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
