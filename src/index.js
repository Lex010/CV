import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <body>
      <div className="wrapp">
        <div className="bigSecond-cont">
          <div className="hSkill-cont">  
            <h2 className="h2-hard">Hard Skills</h2>

            <div className="hard-it-cont">
            <div>Git</div> 
            <div className="hard-it-git"></div>
            </div>

            <div className="hard-it-cont">
            <div>JavaScript</div>
            <div className="hard-it-js"></div>
</div>

<div className="hard-it-cont">
            <div>Node.js</div>
            <div className="hard-it-node"></div>
</div>

<div className="hard-it-cont">
            <div>HTML</div>
<div className="hard-it-html"></div>
</div>

<div className="hard-it-cont">
            <div>CSS</div>
            <div className="hard-it-css"></div>
</div>

<div className="hard-it-cont">
            <div>React</div>
            <div className="hard-it-react"></div>
</div>

<div className="hard-it-cont"> 
            <div>TypeScript</div>
<div className="hard-it-ts"></div>
            </div> 
          </div>

          <div className="sSkill-cont">
            <h2>Soft Skills</h2>
            <ul>
              <li>Agile</li>
              <li>Teamwork</li>
              <li>Think critically</li>
              <li>Participate fully</li>
              <li>Problem solving</li>
              <li>Time management</li>
            </ul>
          </div>

          <div className="lang-skill">
            <h2>Language Skills</h2>
            <ul>
              <li>English</li>
              <li>Russian</li>
              <li>Ukrainian</li>
            </ul>
          </div>
        </div>

        <main className="main-cont">
          <h1 className="my-name">Sergey Melnechuk</h1>
          <div
            className="my-avatar"
            alt="MyAvatar"
          ></div>
          <h3 className="my-prof">Full Stack Developer</h3>
          
          <div className="contacts-cont-for-all">
          <h2>My Contacts</h2>
          <ul>
            <li><a className="contact-container" href="https://t.me/CMelnc" target="_blank"> <div>Telegram</div> <div className="tg-img"></div> </a> </li>
            <li> <a className="contact-container" href="https://wa.me/?text=Свяжитесь со мной в Телеграм. Contact me in Telegram." target="_blank"><div>WhatsApp</div> <div className="whatsapp-img"></div></a></li>
            <li><a className="contact-container" href="mailto:lex07672@gmail.com" target="_blank"> <div>lex07672@gmail.com</div> <div className="mail-img"></div></a></li>
            <li><a className="contact-container" href="https://www.google.com.ua/maps/@50.4533467,30.5745975,10.5z?hl=ru&entry=ttu" target="_balnk"> <div>Location: Kiev</div> </a></li>
          </ul>
        </div>
        </main>

        <div className="bigThird-cont">
          <div className="aboutMe-cont">
            <h2>About Me</h2>
            <p className="profile-text">
              About a year of experience in Full Stack. Working on own projects
              and freelancing. Ready to learn new frameworks and programming
              languages or improve skills in current knowledge. I am not afraid
              of change and hard work. In the current 2023, I am 30+ year old.
              Previously, I was engaged in organizational issues in security
              activites in Kiev.
            </p>
          </div>

          <div className="links-cont">
            <h2>Links</h2>
            <ul>
              <li>
                My first <a href="https://lex010.github.io" target="_blank">site</a> with links in other my works, my GitHub and
                my first mistakes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  </React.StrictMode>
);
