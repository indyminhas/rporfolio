import React from 'react';
import Hero from "../../components/Hero/hero"
import './home.css';

function Home() {
  return (
    <>
    <Hero text="Full Stack Developer"/>
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="biopic" src="./images/profilepic.JPG" alt="profilepic"/>
        </div>
      </figure>
      <article className="bio row justify-content-sm-center">  
        <p className="col-sm-8"><span className="firstcharacter">A</span> My name is Inderjit Minhas. I recently graduated from Washington State University with a degree in Kinesiology and a minor in Psychology. 
            I was a member of a fraternity organization that has taught me leadership skills, organization skills, carrying out my responsibilities as a leader, and other group focused skills.  
            I have earned my certification in Full Stack Web Development from the University of Washington, with the goal of continuously developing skills in HTML, JavaScript, CSS, Node.js, and other programs I've learned. 
            As a person in a working environment, I am a very organized, understanding person who works well with others in a team setting. I am always willing to learn from others if I don’t know it myself or if there is an alternate way of doing something that will complete the task at hand. 
            Overall I am a hardworking, trustworthy, and dedicated person. After completion of my certification of full stack development, I would like to utilize my skills for a company as a front-end developer with a mobile-first design while enhancing my skills for back-end development. 
            I want to work for a company that not only lets me utilize my skills from the bootcamp but from previous education.
        </p>
      </article>
    </section>
    </>
  );
}

export default Home;