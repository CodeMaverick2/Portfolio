import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="MailBot"
        projectDesc="An automated email processing service using Node.js, Express, Google APIs, OpenAI, and BullMQ. MailBOT categorizes incoming emails as Interested, Not Interested, or More Information with AI assistance. It generates dynamic responses, fetches unread emails from Gmail, and uses OAuth2 for secure authentication. The service handles tasks asynchronously with Redis and checks for new emails every 60 seconds, streamlining email management for users."
        projectLink="https://github.com/CodeMaverick2/MailBOT"
        deployedProjectLink="https://drive.google.com/file/d/1dB8pdCZg-h45MtKdqb9nd7MVnvpAIPKt/view?usp=sharing"
        projectImg={require('./images/mailbot.webp')}
      />

      <ProjectCard
        projectTitle="Astral Oasis - Hotel Booking System"
        projectDesc="A chatbot-driven hotel booking solution built with Node.js, Express, Sequelize (SQLite), OpenAI, and Nodemailer. This system helps users book hotel rooms by providing available options and sending booking confirmations via email. The chatbot enhances the booking experience by guiding users through the process, making hotel reservations easy and efficient."
        projectLink="https://github.com/CodeMaverick2/BOT9"
        deployedProjectLink="https://drive.google.com/file/d/1ThACTHVWWozlBa-_nOPFD0uXdl71NsrG/view"
        projectImg={require('./images/astraloasis.webp')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Dummy Data Server"
        projectDesc="A Node.js server designed to fetch and store dummy JSON data in a MongoDB database, offering a RESTful API that enables users to retrieve, filter, and sort data efficiently. The project supports various API endpoints for fetching all data, applying filters, and sorting results, making it a versatile tool for developers working with mock data."
        projectLink="https://github.com/CodeMaverick2/DummyDataServer"
        deployedProjectLink="https://github.com/CodeMaverick2/DummyDataServer"
        projectImg={require('./images/dummydataserver.webp')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
