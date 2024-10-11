import React, { useEffect, useRef, useState } from 'react'
import '../style/departaments.css'
import '../style/regional.css'
import director from '../image/dirktorimg.webp'
import rahbar from '../image/rahbarimg.webp'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import HeaderService from '../components/HeaderService';
import ProfileCard from '../components/ProfileCard';

function Regional() {
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
    const [isOpen, setIsOpen] = useState(null);

    const toggleAccordion = (index) => {
        if (isOpen === index) {
            setIsOpen(null); // Yopish
        } else {
            setIsOpen(index); // O'chish yoki ochish
        }
    };

    const accordionData = [
        {
            id: 1,
            name: "Maxsetbayev Polat Maxsetbayevich",
            position: "Qoraqalpog‘iston Respublikasi boshqarmasi",
            phone: "712090104",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "Yoshlar ishlari agentligi Qoraqalpog‘iston Respublikasi boshqarmasi boshlig‘i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 2,
            name: "Yuldashev Oybek Bahodirjon o‘g‘li",
            position: "Andijon viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: rahbar,
            mansab: "Yoshlar ishlari agentligi Andijon viloyati boshqarmasi boshlig‘i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 3,
            name: "Rahmonov Shavkatjon Shuhrat o‘g‘li",
            position: "Buxoro viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Buxoro viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 4,
            name: "Musurmonov Otabek Sobirjon o‘g‘li",
            position: "Jizzax viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: rahbar,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Jizzax viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 5,
            name: "Baxromov Umidjon Ulug‘bek o‘g‘li",
            position: "Navoiy viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Navoiy viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 6,
            name: "Mirzatov Baxtiyor Tohirovich",
            position: "Namangan viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Namangan viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 7,
            name: "Boboyev Sarvar Boltayevich",
            position: "Samarqand viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Samarqand viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 8,
            name: "Xurramov Asliddin Baxromovich",
            position: "Surxondaryo viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Surxondaryo viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 9,
            name: "Turdimurodov Azizbek Maxammatqul o‘g‘li",
            position: "Sirdaryo viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Sirdaryo viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 10,
            name: "G‘aniyev Muhammadamin Avazbek o‘g‘li",
            position: "Farg'ona viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Farg'ona viloyati boshqarmasi boshlig'i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 11,
            name: "Jumaniyozov Timur Ikromovich",
            position: "Xorazm viloyati boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O‘zbekiston Respublikasi Yoshlar ishlari agentligi Xorazm viloyati boshqarmasi boshlig‘i",
            location: "Toshkent sh. Alisher Navoiy 11A",
            day: "Payshanba 9:00 - 12:00"
        },
        {
            id: 12,
            name: "Mirzaev Bobur Maxirjonovich",
            position: "Toshkent shahar boshqarmasi",
            phone: "712090105",
            website: "https://gov.uz/yoshlar/",
            webTitle: "a.sadullayev@yoshlar.gov.uz",
            image: director,
            mansab: "O'zbekiston Respublikasi Yoshlar ishlari agentligi Toshkent shahar boshqarmasi boshlig'i",
            day: "Payshanba 9:00 - 12:00"
        },
        // Boshqa kartalar ham qo'shishingiz mumkin
    ];
  return (
    <div className='regional'>
         <div className='departaments'>
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
                        <h3 className='accardion_text'>HUDUDIY BOSHQARMALAR</h3>
                        <div className="accordion-section">
                            {accordionData.map((item, index) => (
                                <div key={item.id} className="accordion-item">
                                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                        <h2 className='dep_text'>{item.position} <span>{isOpen === index ? '▲' : '▼'}</span></h2>

                                    </div>
                                    {isOpen === index && (
                                        <ProfileCard proName={item.name} proImg={item.image} tel={item.phone} mansab={item.mansab} webTitle={item.webTitle} location={item.location} day={item.day} />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='web_icon' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
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

export default Regional
