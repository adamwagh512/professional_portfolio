import React from "react";
import $ from 'jquery'
import '../styles/PortfolioPage.css'
import YDAW from '../media/YDAW.png'
import ShadowTome from '../media/shadowTome.jpg'
import Weather from '../media/weather.jpg'
import Insurance from '../media/insurance.jpg'
import FP from '../media/portfolio.jpg'

const Portfolio = () => {
  return (
    <div class = 'overlord'>
    <div class="slider__warpper">

        {/* First Project  */}
  <div class="flex__container flex--p1 flex--active" data-slide="1">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">First collaborative project</p>
        <h1 class="text--big">Your Dog Ate What ?!?</h1>
        <p class="text--normal">This is a group project for the UT Austin coding bootcamp. It lets you know if your dog ate something dangerous. Click the photo to check out the project repository. There is a link to the deployed project in the Readme.</p>
      </div>
      <p class="text__background">YDAW ?!?</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <a href= 'https://github.com/adamwagh512/your-dog-ate-what'><img class="pokemon__img" src={YDAW} /></a>
  </div>

  {/* Second Project */}
  <div class="flex__container flex--piplup animate--start" data-slide="2">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">Second collaborative project</p>
        <h1 class="text--big">Battle of the Shadow Tome</h1>
        <p class="text--normal">The Battle of the Shadow Tome was my second group project for the UT Austin coding bootcamp. It is an online multiplayer game that allows you to customize your character and battle with your friends. This project was originally deployed on Heroku, but I am now looking for a new home for it. Click on the photo to visit the repository for the project</p>
      </div>
      <p class="text__background">Battle</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <a href= 'https://github.com/toddayres06/Project2'><img class="pokemon__img" src={ShadowTome} /></a>
  </div>

  {/* Third Project */}
  <div class="flex__container flex--blaziken animate--start" data-slide="3">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">Javascript project with API Calls</p>
        <h1 class="text--big">Weather Dashboard</h1>
        <p class="text--normal">This is a weather dashboard made using Javascript, HTML and CSS. It is populated using the OpenWeather API. It stores the four most recent searches using local storage. Click on the image to visit the respository page which has a link to the deployed project</p>
      </div>
      <p class="text__background">Weather</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <a href='https://github.com/adamwagh512/weather-dashboard'><img class="pokemon__img" src={Weather} /></a>
  </div>

  {/* Fourth Project */}
  <div class="flex__container flex--dialga animate--start" data-slide="4">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">Jupyter Notebook Project</p>
        <h1 class="text--big">U.S. Medical Insurance Analysis</h1>
        <p class="text--normal">Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over its boddy.</p>
      </div>
      <p class="text__background">Insurance</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <img class="pokemon__img" src={Insurance} />
  </div>

  {/* Final Project */}
  <div class="flex__container flex--zekrom animate--start" data-slide="5">
    <div class="flex__item flex__item--left">
      <div class="flex__content">
        <p class="text--sub">My first website</p>
        <h1 class="text--big">Portfolio</h1>
        <p class="text--normal">This is an early attempt at a professional portfolio, and is the first website that I ever built from scratch. I know what you are thinking, why would I include such a poorly made website on my portfolio? Would you believe this was the very best I could manage less than 6 months before I made this portfolio? Well believe it, I am very proud of how much progress I have made in such a short time. Click the image to visit the repository for the project, which has a link to the deployed project in the Readme </p>
      </div>
      <p class="text__background">Portfolio</p>
    </div>
    <div class="flex__item flex__item--right"></div>
    <img class="pokemon__img" src={FP}/>
  </div>
</div>
<div class="slider__navi">
  <a href="#" class="slide-nav active" data-slide="1">pikachu</a>
  <a href="#" class="slide-nav" data-slide="2">piplup</a>
  <a href="#" class="slide-nav" data-slide="3">blaziken</a>
  <a href="#" class="slide-nav" data-slide="4">dialga</a>
  <a href="#" class="slide-nav" data-slide="5">zekrom</a>
</div>
</div>
)};

$(".slide-nav").on("click", function (e) {
    e.preventDefault();
    // get current slide
    var current = $(".flex--active").data("slide"),
      // get button data-slide
      next = $(this).data("slide");
  
    $(".slide-nav").removeClass("active");
    $(this).addClass("active");
  
    if (current === next) {
      return false;
    } else {
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + next + "]")
        .addClass("flex--preStart");
      $(".flex--active").addClass("animate--end");
      setTimeout(function () {
        $(".flex--preStart")
          .removeClass("animate--start flex--preStart")
          .addClass("flex--active");
        $(".animate--end")
          .addClass("animate--start")
          .removeClass("animate--end flex--active");
      }, 800);
    }
  });
   
export default Portfolio;
