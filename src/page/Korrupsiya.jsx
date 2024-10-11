import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import '../style/about.css'
import '../style/jamoat.css'
import '../style/korrupsiya.css'
const laws2 = [{
    id: 1,
    date: "2016 yil 14 sentabr",
    number: "Ishonch telefoni",
    name: "71-209-01-04 (117)",
    link: "/formData"
}]
const laws = [

    {
        id: 2,
        date: "2019 yil 2 dekabr",
        number: "Murojaat bo'limi",
        name: "Havola",
        link: "/formData"
    },
    {
        id: 3,
        date: "2020 yil 23 sentabr",
        number: "Elektron pochta",
        name: "antikor@yoshlar.gov.uz",
        link: "#"
    },
    {
        id: 4,
        date: "2022 yil 25 yanvar",
        number: "Boshqa elektron manzillar ",
        name: "info@yoshlar.gov.uz",
        link: "#"
    },
    {
        id: 5,
        date: "2016 yil 14 sentabr",
        number: "Telegram bot",
        name: "@yoshlarmurojaati_bot",
        link: "https://t.me/yoshlarmurojaati_bot?start=mk88k18"
    },
    {
        id: 6,
        date: "2019 yil 2 dekabr",
        number: "Facebook sahifa",
        name: "Havola",
        link: "https://www.facebook.com/yoshlaragentligirasmiy"
    },
    {
        id: 7,
        date: "2020 yil 23 sentabr",
        number: "Korrupsiya holati bo'yicha (ochiq va anonim) murojaat qoldirish",
        name: "Havola",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSd8qgmLLJR_W9DJDbMHDS9NYkix_371E3zRuNNLby0-VEbTsA/viewform?pli=1"
    },

];

function Korrupsiya() {
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
        <div className='korrupsiya'>
            
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
                        <HeaderService />
                        <div className={`home_container ${isVisible ? "menu-visible" : ""}`}>
                            <div className="side-menu">
                                <div className="news-list">
                                    <LeftWindow icon={<FaBars className="bars_icon_modal" onClick={openModal} size={30} color="#0047ba" />} />
                                </div>
                            </div>
                            <div className="main-content">

                            </div>
                            <div style={{ lineHeight: '1.6' }}>
                                <h2 className='text_table_content' style={{ color: '#003366', fontSize: "24px",textAlign:"center" }}>Korrupsiyaga qarshi amalga oshirilayotgan ishlar</h2>
                                <div className="jamoat_container">
                                    <table className="law-table">
                                        <thead>

                                            <tr>
                                                <th colSpan="4" className="main-header_table">Korrupsiyaviy holatlar haqida xabar berishga mo'ljallangan aloqa kanallari </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {laws2.map((law) => (
                                                <tr key={law.id}>

                                                    <td>{law.number}</td>
                                                    <td>{law.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tbody>
                                            {laws.map((law) => (
                                                <tr key={law.id}>

                                                    <td>{law.number}</td>
                                                    <td><a href={law.link} >{law.name}</a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                                <ol>
                                    <li>
                                    1. O‘zbekiston Respublikasi Yoshlar ishlari agentligining korrupsiya faktlariga doir murojaatlarni ko‘rib chiqish natijalari haqidagi 2024 yil I-chorak uchun HISOBOT /{' '}
                                        <a href="https://api-portal.gov.uz/uploads/1023f9b8-75ea-1a5c-cef9-b0fdb0910955_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    2. O'zbekiston Respublikasi Yoshlar ishlari agentligida korrupsiyaga nisbatan murosasiz munosabatni shakllantirishga qaratilgan normativ-huquqiy hujjatlarni tasdiqlash to'g'risida /{' '}
                                        <a href="https://api-portal.gov.uz/uploads/58aae7b4-59e5-5c8c-053b-e8008ad0ac08_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    3. O'zbekiston Respublikasi Yoshlar ishlari agentligining korrupsiyaga qarshi kurashish bo'yicha siyosatini tasdiqlash to'g'risida /{' '}
                                        <a href="https://api-portal.gov.uz/uploads/a8342639-16c2-6f62-6ae3-465781860036_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    4. O'zbekiston Respublikasi Yoshlar ishlari agentligi tizimida Korrupsiyaga qarshi kurashish dasturini tasdiqlash to'g'risida /{' '}
                                        <a href="https://api-portal.gov.uz/uploads/cc5a723b-feaa-c71a-180d-771ac841aebe_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    5. Yoshlar ishlari agentligida hisobot davrida korrupsiyaga qarshi shartlar bilan mehnat shartnomasida tanishganligini imzosi bilan tasdiqlangan xodimlar ro'yxati / {' '}
                                        <a href="https://api-portal.gov.uz/uploads/b81a6524-d4b8-bf4b-77d8-a62a11e0235c_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    6. Kadrlarni tanlash va joy-joyiga qo‘yishda korrupsiyaviy holatlarning oldini olish tizimi joriy etilganligi to‘g‘risidagi maʼlumot /{' '}
                                        <a href="https://api-portal.gov.uz/uploads/21809823-8412-f774-caf2-a6b767e94482_media_.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                    <li>
                                    7. Xabarnoma va ehtimoliy manfaatlar to‘qnashuvi to‘g‘risidagi deklaratsiyaning tasdiqlangan namunaviy shakli {' '}
                                        <a href="https://api-portal.gov.uz/uploads/cfd70ecf-1117-8a16-be01-79c6f465cc56_media_.docx" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                            .pdf
                                        </a>
                                    </li>
                                </ol>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
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

            </div>
        
    )
}

export default Korrupsiya
