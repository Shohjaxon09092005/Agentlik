import React, { useState, useEffect, useRef } from "react";
import '../style/home.css'
import HeaderService from "../components/HeaderService";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from
  "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import news1 from '../image/news1.webp'
import ibrat from '../image/ibrat_img.webp'
import ibrat_logo from '../image/ibrat_logo.webp'
import Map from "../components/Map";
import Weather from "../components/Weather";
import Portal from "../components/Portal";
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

// Faoliyatlar yo‘nalishi start
const sections = [
  { id: 1, navLink: "/hukumat", name: "ELEKTRON HUKUMAT" },
  { id: 2, navLink: "/xalqaro", name: "XALQARO HAMKORLIK" },
  { id: 3, navLink: "/korrupsiyaNews", name: "KORRUPSIYAGA QARSHI KURASH" },
  { id: 4, navLink: "/yoshlar", name: "YOSHLAR SIYOSATI" },
  { id: 5, navLink: "/gender", name: "GENDER TENGLIK" },
];

const sections2 = [
  {
    title: 'DAVLAT XIZMATLARI',
    items: [
      { title: 'Adliya', link: 'https://my.gov.uz/oz/all-services?id=16' },
      { title: 'Oila va bolalar', link: 'https://my.gov.uz/oz/all-services?id=4' },
      { title: 'Ijtimoiy ta\'minot', link: 'https://my.gov.uz/oz/all-services?id=5' },
      { title: 'Soliqlar', link: 'https://my.gov.uz/oz/all-services?id=6' },
      { title: 'UJKX', link: 'https://my.gov.uz/oz/all-services?id=1' },
      { title: 'Sog\'liqni saqlash va ijtimoiy himoya', link: 'https://my.gov.uz/oz/all-services?id=5' },
      { title: 'Axborot va aloqa', link: 'https://my.gov.uz/oz/all-services?id=9' },
      { title: 'Ta\'lim va yoshlar', link: 'https://my.gov.uz/oz/all-services?id=8' },
      { title: 'Ko\'chmas mulk', link: 'https://my.gov.uz/oz/all-services?id=2' },
      { title: 'Ma\'lumotlar', link: 'https://my.gov.uz/oz/all-services?id=18' },
      { title: 'Madaniyat va sport', link: 'https://my.gov.uz/oz/all-services?id=10' },
      { title: 'Litsenziyalash', link: 'https://my.gov.uz/oz/all-services?id=11' },
      { title: 'Transport', link: 'https://my.gov.uz/oz/all-services?id=3' },
      { title: 'Iqtisodiyot va biznes', link: 'https://my.gov.uz/oz/all-services?id=12' },
      { title: 'Bojxona', link: 'https://my.gov.uz/oz/all-services?id=15' },
      { title: 'Fuqarolik', link: 'https://my.gov.uz/oz/all-services?id=22' }
    ],
  },
  {
    title: 'Foydali havolalar',
    items: [
      { title: 'Ochiq budjet', link: 'https://openbudget.uz/home' },
      { title: 'Ochiq maʼlumotlar', link: 'https://data.egov.uz/' },
      { title: 'Xususiylashtirish', link: 'https://davaktiv.uz/oz/' },
      { title: 'Gender statistika', link: 'https://www.stat.uz/uz/' },
      { title: 'Korrupsiyaga qarshi kurash', link: 'https://anticorruption.uz/uz' },
      { title: 'Huquqiy axborot portali', link: 'https://advice.uz/oz' },
      { title: 'Tadbirkor virtual ofisi', link: 'https://business.gov.uz/' }
    ]
  }
];
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const news = [
    {
      date: '24',
      month: 'SENTABR',
      title: 'Qahramonlarimiz vatanga yetib keldi!',
      description: '45-Butunjahon shaxmat olimpiadasi ishtirokchilarini kutib olish marosimi...',
      image: 'path/to/your/image1.jpg', // Replace with actual image path
      link: '#',
      time: '24.09.2024'
    },
    {
      date: '20',
      month: 'SENTABR',
      title: 'Yoshlar press-klubi maxsus soni',
      description: '“Giyohvand va psixotrop moddalarni yoshlar oʻrtasida noqonuniy aylanishi”...',
      image: 'path/to/your/image2.jpg', // Replace with actual image path
      link: '#',
      time: '20.09.2024'
    }
  ];

  const events = [
    { date: '19', text: '#Bilasizmi' },
    { date: '18', text: 'Manfaatlar to\'qnashuvi bilan bog\'liq munosabatlarni tartibga solish' },
    { date: '17', text: '"Biznes marafon"ning 5-mavsumiga start berildi!' },
    { date: '16', text: 'Hududiy bosqichga tayyormisiz?' },
    { date: '14', text: 'O\'zbekiston yoshlar "WorldSkills Lyon 2024" musobaqasida:' }
  ];
  //Work section
  const [surveyAnswer, setSurveyAnswer] = useState("");

  const handleSurveyChange = (e) => {
    setSurveyAnswer(e.target.value);
  };

  const handleVote = () => {
    alert(`Sizning tanlovingiz: ${surveyAnswer}`);
  };
  let barModal = useRef()
  function openModal() {
    barModal.current.classList.add("sidebar_open")
    document.body.classList.add('new-background');

  }
  function closeBar() {
    barModal.current.classList.remove("sidebar_open")
    document.body.classList.remove('new-background');
  }
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0); // Sahifani tepa qismiga o'tkazish
  };


  return (

    <div className="home_page">
      <div className="bar_section">
        <div ref={barModal} className="sidebar">
          <div className="container_bar">
            <div className="close_div">
              <button onClick={closeBar} className="close-button">
                <FaTimes size={24} color="#fff" />
              </button>
            </div>

            <div className="container_modal">
              {sections2.map((section, index) => (
                <div key={index} className="section">
                  <h3>{section.title}</h3>
                  <div className="links">
                    {section.items.map((item, dnx) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={dnx}
                        href={item.link} // Har bir item uchun link
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="container">




        <div className={`home_container ${isVisible ? "menu-visible" : ""}`}>

          <div className="side-menu">
            <div className="news-list">
              <LeftWindow icon={<FaBars className="bars_icon_modal" onClick={openModal} size={30} color="#0047ba" />} />
            </div>
          </div>
          <div className="main-content">

          </div>

          <div className="all_home">
            <HeaderService />

            <div className="home_news">
              <h4>Yangiliklar</h4>

              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} style={{ marginRight: "20px", color: "#4267B2" }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} style={{ marginRight: "20px", color: "#E4405F" }} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} style={{ marginRight: "20px", color: "#FF0000" }} />
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                  <FaTelegram size={30} style={{ marginRight: "20px", color: "#0088cc" }} />
                </a>
              </div>


            </div>

            <div className="App_home">
              <div className="main-section">
                {news.map((item, index) => (
                  <div className="news-item" key={index}>
                    <img src={news1} alt={item.title} className="news-image" />
                    <div className="news-content">
                      <div className="news-date">
                        <span>{item.date}</span>
                        <small>{item.month}</small>
                      </div>
                      <div className="news-info">
                        <a href={item.link} className="news-title">{item.title}</a>
                        <p className="news-description">{item.description}</p>
                        <span className="news-time">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="side-section">
                {events.map((event, index) => (
                  <div className="event-item" key={index}>
                    <span className="event-date">{event.date} <span>SEN</span> </span>
                    <p className="event-text">{event.text}</p>
                  </div>
                ))}
              </div>


            </div>
            <div onClick={() => handleNavigation("/news")} className="hover-link">
              <p style={{ cursor: "pointer" }} className="hover_text">Barcha yangiliklar</p> <FaArrowRight />
            </div>
            <div className="ibrat_all_img">
              <a href="https://ibratfarzandlari.uz/" target="_blank" rel="noopener noreferrer"> <img className="ibrat_img" src={ibrat} alt="IbratAcademy" /></a>
            </div>
            <div className="activity">
              <div style={styles.container}>
                <h2 style={styles.heading}>FAOLIYATLAR YO‘NALISHI</h2>
                <div className="grid_container" style={styles.gridContainer}>
                  {sections.map((section) => (


                    <div onClick={() => handleNavigation(section.navLink)} className="activity_card" key={section.id} style={styles.card}>
                      <span className="span__activity">{section.name}</span>
                      <span style={styles.arrow}><FaArrowRight /></span>
                    </div>


                  ))}
                </div>
              </div>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => handleNavigation("/news")} className="hover-link">
              <p className="hover_text">Batafsil</p> <FaArrowRight />
            </div>
            <div className="interactive_services">
              <div className="section interactive-services">
                <div className="text_service">
                  <h3>INTERAKTIV XIZMATLAR</h3>
                  <NavLink onClick={() => handleNavigation("/service")} className="hover-link">
                    <p className="hover_text">Barcha xizmatlar</p> <FaArrowRight />
                  </NavLink>
                </div>
                <NavLink onClick={() => handleNavigation("/service")}>
                  <div className="box">
                    <span>DAVLAT XIZMATLARI REESTRI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div></NavLink>
              </div>
              <div className="section events-calendar">
                <div className="text_service">
                  <h3>VOQEALAR TAQVIMI</h3>
                  <NavLink onClick={() => handleNavigation("/voqea")} className="hover-link">
                    <p className="hover_text">Barcha voqealar</p> <FaArrowRight />
                  </NavLink>
                </div>
                <div className="empty-box">
                  <p>Ma'lumot yo'q</p>
                </div>
              </div>
              <div className="section useful-links">
                <div className="text_service">
                  <h3>FOYDALI HAVOLALAR</h3>
                  <div style={{ cursor: "pointer" }} onClick={() => handleNavigation("/linkApp")} className="hover-link">
                    <p className="hover_text">Barcha havolalar</p> <FaArrowRight />
                  </div>
                </div>
                <a href="https://my.gov.uz/oz" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>YAGONA INTERAKTIV DAVLAT XIZMATLARI PORTALI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://data.egov.uz/" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>OCHIQ MA'LUMOTLAR</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://lex.uz/uz/" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>LEX.UZ</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://gov.uz/oz/fvv" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>AHOLINI FAVQULODDA VAZIYATLARDA TO'G'RI HARAKAT QILISHGA O'RGATUVCHI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>

              </div>


            </div>
            <div className="container_work">
              <div className="section2">
                <h2>BO'SH ISH O'RINLARI</h2>
                <div className="no-info">
                  <p>Ma'lumot yo'q</p>
                </div>
                <a href="https://ish.mehnat.uz/company/company/207323290" target="_blank" rel="noopener noreferrer" className="link">
                  Bo'sh ish o'rinlari
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>

              <div className="section2 documents">
                <h2>HUJJATLAR</h2>
                <ul>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7121954" target="_blank" rel="noopener noreferrer" >
                    <li>

                      O'zbekiston Respublikasining Prezidenti qarori NPQ-330. Qabul
                      qilingan sana: 23.09.2024

                    </li>
                  </a>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7120577" target="_blank" rel="noopener noreferrer" >
                    <li>

                      O'zbekiston Respublikasi kambag'allikni qisqartirish va bandlik
                      haqidagi farmon. Sana: 20.09.2024

                    </li>
                  </a>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7120575" target="_blank" rel="noopener noreferrer" >
                    <li>

                      Prezident farmoni: soliq va bojxona imtiyozlari haqida. Sana:
                      18.09.2024

                    </li>
                  </a>
                </ul>
                <a href="https://lex.uz/uz/search/nat?body_id=819" target="_blank" rel="noopener noreferrer" className="link">
                  Barcha hujjatlar
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>

              <div className="section2 survey">
                <h2>SO'ROVNOMALAR</h2>
                <p>"Bir million dasturchi" loyihasidan foydalandingizmi?</p>
                <label>
                  <input
                    type="radio"
                    name="survey"
                    value="Ha"
                    onChange={handleSurveyChange}
                  />
                  Ha
                </label>
                <label>
                  <input
                    type="radio"
                    name="survey"
                    value="Yo'q"
                    onChange={handleSurveyChange}
                  />
                  Yo'q
                </label>
                <label>
                  <input
                    type="radio"
                    name="survey"
                    value="Loyihadan xabarim yo'q"
                    onChange={handleSurveyChange}
                  />
                  Loyihadan xabarim yo'q
                </label>

                <button onClick={handleVote}>Ovoz berish</button>
                <button className="results-btn">Natijalar</button>

                <a href="/poll" className="link">
                  Barcha so'rovnomalar
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>
            </div>
            <div className="projects">
              <h2>AMALGA OSHIRILAYOTGAN LOYIHALAR</h2>
              <div className="project-item">
                <div className="line"></div>
                <div className="project">
                  <img src={ibrat_logo} alt="IBRAT Logo" className="project-logo" />
                  <a href="https://ibratfarzandlari.uz/" target="_blank" rel="noopener noreferrer"> <p>"IBRAT" Farzandlari</p></a>
                </div>
                <div className="line"></div>
              </div>
            </div>
            <Map />
            <Weather />
          </div>



        </div>


      </div>
            <Portal />




    </div>
  )
}
const styles = {
  container: {
    // textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#004094",

  },

  


  arrow: {
    marginLeft: "10px",
  },
};


export default Home
