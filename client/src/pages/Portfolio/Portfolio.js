import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
import ProjectCard from '../../components/ProjectCard/projectcard'
import './portfolio.css'

export default function Portfolio() {
    return (
        <>
            <HeroSm header="Portfolio" />
            <div className="buffer"></div>
            <div className="row justify-content-center row-margin">
                <ProjectCard imgsrc='./images/GuideMeScreen.png' project="GuideMe" summary="GuideME uses a React.js front end, along with MongoDB to create a robust, full MERN application that serves as a adventure planning application." githublink="https://github.com/domjparker/GuideMe-FE" deployedlink="https://guidemedimma.herokuapp.com/"/>
                <ProjectCard imgsrc='./images/drawscape.png' project="DrawScape" summary="Second group project where we created a application where users can communicate online and play pictionary with friends and family!" githublink="https://github.com/indyminhas/DrawScape" deployedlink="https://drawscape.herokuapp.com/login" />
                <ProjectCard imgsrc='./images/drinkme cover.png' project="DrinkMe" summary="Don’t feel like going out to a bar or restaurant with your friends to grab a drink? Go ahead and invite them over! No stress if you don’t know what drink to make or how to make it, drinkME allows you to find the drink that fits the mood by giving you the ability to generate recipes on the fly." githublink="hhttps://github.com/indyminhas " deployedlink="https://derek-watson14.github.io/drinkME/" />
                <ProjectCard imgsrc='./images/weatherdash.png' project="Weather Dashboard" summary="Once the user arrives, they can enter a valid city name (invalid inputs will not respond) which will then show the current day's weather stats (temperature, humidity, wind speed, and the UV index) as well as the forecast for the next five days." githublink="https://github.com/indyminhas/weather-dash" deployedlink="https://indyminhas.github.io/weather-dash/" />
                <ProjectCard imgsrc='./images/quiz.png' project="Code Quiz" summary="This is a timed quiz built with JavaScript." githublink="https://github.com/indyminhas/code-quiz" deployedlink="https://indyminhas.github.io/code-quiz/" />
                <ProjectCard imgsrc='./images/passgen.png' project="Password Generator" summary="A simple password generator that uses JavaScript prompts and alerts that the user will need to answer to generate a random password." githublink="https://github.com/indyminhas/indy-password-generator" deployedlink="https://indyminhas.github.io/indy-password-generator/" />
            </div>
        </>
    )
}