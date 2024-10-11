import React, { useEffect, useRef, useState } from 'react'
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import ProfileCard from '../components/ProfileCard'
import director from '../image/dirktorimg.webp'
import orinbosar from '../image/orinbosarimg.webp'
import orinbosar2 from '../image/orinbosar2img.webp'
import orinbosar3 from '../image/orinbosar3img.webp'
import maslahatchi from '../image/maslahatchiimg.webp'
import rahbar from '../image/rahbarimg.webp'
import davlattili from '../image/davlattiliimg.webp'
import '../style/giudence.css'
function Guidance() {
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
  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPerson2, setIsOpenPerson2] = useState(false);
  const [isOpenPerson3, setIsOpenPerson3] = useState(false);
  const [isOpenPerson4, setIsOpenPerson4] = useState(false);
  const [isOpenPerson5, setIsOpenPerson5] = useState(false);
  const [isOpenPerson6, setIsOpenPerson6] = useState(false);
  const [isOpenPerson7, setIsOpenPerson7] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const openPopupPerson2 = () => setIsOpenPerson2(true);
  const closePopupPerson2 = () => setIsOpenPerson2(false);
  const openPopupPerson3 = () => setIsOpenPerson3(true);
  const closePopupPerson3 = () => setIsOpenPerson3(false);
  const openPopupPerson4 = () => setIsOpenPerson4(true);
  const closePopupPerson4 = () => setIsOpenPerson4(false)
  const openPopupPerson5 = () => setIsOpenPerson5(true);
  const closePopupPerson5 = () => setIsOpenPerson5(false);
  const openPopupPerson6 = () => setIsOpenPerson6(true);
  const closePopupPerson6 = () => setIsOpenPerson6(false);
  const openPopupPerson7 = () => setIsOpenPerson7(true);
  const closePopupPerson7 = () => setIsOpenPerson7(false);

  const person1 = { name: "Sa'dullayev Alisher Zafar o'g'li", position: "O'zbekiston Respublikasi Yoshlar ishlari agentligi direktori" }
  const person2 = { name: "Kattaxanova Dilnozaxon Sobir qizi", position: "Yoshlar ishlari agentligi direktorining birinchi o'rinbosari" }
  const person3 = { name: "Ablayarov Feruz Karimovich", position: "Yoshlar ishlari agentligi direktori o'rinbosari" }
  const person4 = { name: "Muminov Abdulaziz Majid o‘g‘li", position: "Yoshlar ishlari agentligi direktori o'rinbosari" }
  const person5 = { name: "Xolmaxmatov Azim Xazratqulovich", position: "Direktor maslahatchisi" }
  const person6 = { name: "Abduqodirov Nodir Abdukayumovich", position: "Agentlik direktorining matbuot kotibi – Axborot xizmati rahbari" }
  const person7 = { name: "Abbasova Mehrinoz Nosirjon qizi", position: "Davlat tili bo‘yicha maslahatchisi" }
  
  return (
    <div className='guidance'>

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
            <h2 className='text_guidance' style={{ color: '#003366' }}>RAHBARIYAT</h2>
            <ProfileCard onOpen={openPopup}
              onClose={isOpen ? closePopup : null}
              name={person1.name}
              position={person1.position} proName="
Sa’dullayev Alisher Zafar o‘g‘li" mansab="O‘zbеkistоn Rеspublikаsi Yoshlar ishlari agentligi Direktori" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={director} />
            <ProfileCard onOpen={openPopupPerson2}
              onClose={isOpenPerson2 ? closePopupPerson2 : null}
              name={person2.name}
              position={person2.position} proName="
Kattaxanova Dilnozaxon Sobir qizi" mansab="Yoshlar ishlari agentligi direktorining birinchi o'rinbosari" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={orinbosar} />
            <ProfileCard onOpen={openPopupPerson3}
            onClose={isOpenPerson3 ? closePopupPerson3 : null}
              name={person3.name}
              position={person3.position} proName="
Ablayarov Feruz Karimovich" mansab="Yoshlar ishlari agentligi direktori o'rinbosari" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={orinbosar2} />
            <ProfileCard onOpen={openPopupPerson4}
              onClose={isOpenPerson4 ? closePopupPerson4 : null}
              name={person4.name}
              position={person4.position} proName="
Muminov Abdulaziz Majid o‘g‘li" mansab="Yoshlar ishlari agentligi direktori o'rinbosari" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={orinbosar3} />
            <ProfileCard onOpen={openPopupPerson5}
              onClose={isOpenPerson5 ? closePopupPerson5 : null}
              name={person5.name}
              position={person5.position} proName="
Xolmaxmatov Azim Xazratqulovich" mansab="Direktor maslahatchisi" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={maslahatchi} />
            <ProfileCard onOpen={openPopupPerson6}
              onClose={isOpenPerson6 ? closePopupPerson6 : null}
              name={person6.name}
              position={person6.position} proName="
Abduqodirov Nodir Abdukayumovich" mansab="Agentlik direktorining matbuot kotibi – Axborot xizmati rahbari" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={rahbar} />
            <ProfileCard onOpen={openPopupPerson7}
              onClose={isOpenPerson7 ? closePopupPerson7 : null}
              name={person7.name}
              position={person7.position} proName="
Abbasova Mehrinoz Nosirjon qizi" mansab="Davlat tili bo‘yicha maslahatchisi" tel="+998712090104" webTitle="a.sadullayev@yoshlar.gov.uz" location="Toshkent sh. Alisher Navoiy 11A" day="Payshanba 9:00 - 12:00" proImg={davlattili} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', alignItems: 'center', marginTop: '20px' }}>
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

export default Guidance
