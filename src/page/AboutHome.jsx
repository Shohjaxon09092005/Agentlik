import React, { useEffect, useRef, useState } from 'react'
  import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
  import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import '../style/about.css'
function AboutHome() {
  const [isVisible, setIsVisible] = useState(false);
  let barModal = useRef()
  function openModal() {
    barModal.current.classList.add("sidebar_open")
    document.body.classList.add('new-background');

  }
  function closeBar() {
    barModal.current.classList.remove("sidebar_open")
    document.body.classList.remove('new-background');
  }
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
  return (
    <div className='about'>
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
            {/* <h1>Asosiy Kontent</h1>
            <p>Scroll qiling va chap tomondagi menyuni ko'ring.</p>
            <div className="content-block">
              <p>Bu yerda uzun kontent bo'lishi mumkin...</p>
            </div>
            <div className="content-block">
              <p>Bu yerda yana bir nechta bo'lim...</p>
            </div> */}
          </div>

          <div className='line_about' >
        <HeaderService />
        <div className="line_about1">
           <h2 style={{ color: '#003366' }}>AGENTLIK HAQIDA</h2>
            <p>
              O‘zbekiston Respublikasi Yoshlar ishlari agentligi yoshlarga oid davlat siyosatini yangi bosqichga olib chiqish,
              yoshlar sohasidagi muammolarga samarali yechim topish, ularni har tomonlama qo‘llab-quvvatlash, shuningdek,
              vakolatli organlar faoliyatini samarali tashkil etish hamda muvofiqlashtirishni amalga oshiruvchi davlat
              tashkilotidir. Agentlikning qabul qilgan qarorlari davlat organlari, boshqa tashkilot va ularning mansabdor
              shaxslari, shuningdek, fuqarolar uchun bajarilishi majburiy hisoblanadi. Agentlik yuridik shaxs hisoblanib, o‘z
              nomi yozilgan va Davlat gerbi tasviri tushirilgan muhr va blankalarga, mustaqil balansga, shaxsiy g‘azna
              hisobvaraqlariga, bank hisobvaraqlariga ega.
            </p>
            <p>
              Agentlik tizimiga agentlikning markaziy apparati, hududiy va mahalliy bo‘linmalari, Yoshlar muammolarini
              o‘rganish va istiqbolli kadrlarni tayyorlash instituti kiradi. Hududiy bo‘linmalar (tumanlar va shaharlar
              bo‘limlari bundan mustasno) yuridik shaxs tashkil etgan holda faoliyat yuritadi. Yoshlar ishlari agentligi
              Prezidentning PF-6017-son Farmoni bilan tashkil etilgan.
             
            </p>
        </div>

           

            <div className='web_icon' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div>
                <FaFacebookF style={{ marginRight: '10px', cursor: 'pointer' }} />
                <FaTelegramPlane style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MdVisibility style={{ marginRight: '5px' }} />
                <span>1749</span>
              </div>
              <span style={{ fontSize: '14px', color: '#999' }}>Oxirgi yangilanish: 2024-02-20 10:30:37</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default AboutHome
