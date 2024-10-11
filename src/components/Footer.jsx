import React from 'react'
import '../style/footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from
  "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0); // Sahifani tepa qismiga o'tkazish
  };
  return (
    <footer className='footer'>
      <footer style={styles.footer}>
        <div className='menu_list' style={styles.menu}>
          <div onClick={() => handleNavigation("/about")} className='menu_tag' >AGENTLIK HAQIDA</div>
          <div onClick={() => handleNavigation("/xalqaro")} className='menu_tag' >FAOLIYAT</div>
          <div onClick={() => handleNavigation("/service")} className='menu_tag' >DAVLAT XIZMATLARI</div>
            <div onClick={() => handleNavigation("/lawTable")} className='menu_tag' >HUJJATLAR</div>
            <div onClick={() => handleNavigation("/document")} className='menu_tag' >OCHIQ MA'LUMOTLAR</div>
            <div onClick={() => handleNavigation("/news")} className='menu_tag' >AXBOROT XIZMATI</div>
            <div onClick={() => handleNavigation("/contactInfo")} className='menu_tag' >BOG'LANISH</div>
          </div>
          <div className="all_icon">
            <div style={styles.mainText}>
              <h3 onClick={() => handleNavigation("/")} style={{cursor:"pointer"}}>O'ZBEKISTON RESPUBLIKASI YOSHLAR ISHLARI AGENTLIGI SIRDARYO FILIALI</h3>
              <p>100011, Toshkent shahri, Navoiy ko‘chasi, 11</p>

            </div>
            <div style={styles.socialIcons}>
              <a href="#!"><i className="fa fa-instagram"> <FaInstagram size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href="#!"><i className="fa fa-facebook"><FaFacebook size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href="#!"><i className="fa fa-telegram"><FaTelegram size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href="#!"><i className="fa fa-youtube"><FaYoutube size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
            </div>
          </div>

          <div style={styles.bottomText}>
            <p className='text_p'>&copy; 2001-2024 Barcha huquqlar himoyalangan</p>
            <p>Oxirgi yangilanish: 2024-09-26 10:08:43</p>
            <p>Diqqat! Agar siz matnda xatoliklarni aniqlasangiz, ularni belgilab, ma'muriyatni xabardor qilish uchun Ctrl/Command+Enter tugmalarini bosing</p>
          </div>

      </footer>


    </footer>
  )
}
const styles = {
  footer: {
    backgroundColor: '#003c96',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },


  mainText: {
    marginBottom: '20px',
  },
  bottomText: {
    marginBottom: '20px',
    fontSize: '12px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
};

export default Footer
