import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import '../style/about.css'
import '../style/jamoat.css'
const data = [
    {
        id: 1,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.6",
        date: "19.03.2021 yil",
        docNum: "01-10/51",
        link: "https://api-portal.gov.uz/uploads/edf810ef-33b2-2ad4-8bec-7865a3fa26ab_media_.xlsx",
    },
    {
        id: 2,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.7",
        date: "01.03.2021 yil",
        docNum: "2-sonli BAYON",
        link: "https://api-portal.gov.uz/uploads/8a31e24b-1753-fad8-891e-e58f8f2ddb05_media_.xlsx",
    },
    {
        id: 3,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.8",
        date: "27.03.2021 yil",
        docNum: "2-sonli BAYON",
        link: "https://api-portal.gov.uz/uploads/2fdcfc24-5c8e-ca4b-05d7-b07b3075b32b_media_.xlsx",
    },
    {
        id: 4,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.9",
        date: "07.04.2022 yil",
        docNum: "01-10/85",
        link: "https://api-portal.gov.uz/uploads/9ea1979f-387d-b436-2a38-19ddc750548f_media_.xlsx",
    },
    {
        id: 5,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.10",
        date: "07.04.2022 yil",
        docNum: "01-10/85",
        link: "https://api-portal.gov.uz/uploads/80bd0600-0e74-e84d-bfde-8132bc6fdd5b_media_.xlsx",
    },
    {
        id: 6,
        title:
            "Tasdiqlangan yillik xarajatlar smetasi, obyektlar qurish, avtotransport vositalarini sotib olish va saqlash xarajatlari to‘g‘risidagi ma’lumotlar forma 2.11",
        date: "07.04.2022 yil",
        docNum: "01-10/85",
        link: "https://api-portal.gov.uz/uploads/f9fa8025-a8d9-fdfb-5634-6f05fae93774_media_.xlsx",
    },
    {
        id: 7,
        title:
            "Davlat muassasasi - 12 ilova",
        date: "07.04.2022 yil",
        docNum: "01-10/85",
        link: "https://api-portal.gov.uz/uploads/304e4022-7f95-0ce2-9c9c-63eefd1d9209_media_.xlsx",
    },
    {
        id: 8,
        title:
            "Kapital qo‘yilmalar",
        date: "07.04.2022 yil",
        docNum: "01-10/85",
        link: "https://api-portal.gov.uz/uploads/304e4022-7f95-0ce2-9c9c-63eefd1d9209_media_.xlsx",
    },
];
function Budjet() {
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
        <div className='budjet'>
           
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
                                <h2 style={{ color: '#003366', textTransform: "UpperCase",textAlign:"center" }}>Agentlikning moliyaviy byudjeti to'g'risidagi ochiq ma'lumotlar</h2>
                                <div className="jamoat_container">


                                    <table className="custom-table">
                                        <thead>
                                            <tr>
                                                <th>Raqam</th>
                                                <th>Hujjatlar</th>

                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>

                                                    <td>
                                                        <a href={item.link} className="link">
                                                            xlsx
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>



                                    </table>
                                </div>
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

export default Budjet
