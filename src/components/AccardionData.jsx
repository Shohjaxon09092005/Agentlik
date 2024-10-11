import React, { useState } from 'react';
import '../style/accardionData.css'
function AccardionData() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: `"KELAJAK KASBLARI" LOYIHASIDA O'QISH TARTIBI QANDAY?`,
            content: `Yoshlarga zamonaviy kasblarni egallashi, axborot texnologiyalarni o‘rganishi va ularni xorijiy tillarga o‘qitish bo‘yicha olti oygacha muddatli o‘quv kurslari uchun har oyda BHMning 4 baravarigacha miqdorda yoshlar yetakchisining ijobiy tavsiyasi asosida “Yoshlar daftari” jamg‘armasi mablag‘lari hisobidan subsidiya ajratiladi. Bunda ariza beruvchiga “1+1” tamoyili asosida bir vaqtning o‘zida zamonaviy kasb yoki axborot texnologiyalar o‘quv kursi bilan birgalikda xorijiy til o‘quv kursida o‘qish xarajatlari uchun ham subsidiya ajratilishi mumkin. Mazkur bandda nazarda tutilgan xarajatlarni qoplash uchun Yoshlar ishlari agentligining Yoshlarga oid davlat siyosatini qo‘llab-quvvatlash jamg‘armasi hisobidan ham qonunchilik hujjatlarida belgilangan tartibda subsidiya ajratilishi mumkin. Ariza beruvchi subsidiya ajratishni so‘rab Vasiylik kengashiga o‘zi va nodavlat ta’lim tashkiloti o‘rtasida tuzilgan shartnoma nusxasini taqdim etadi. Shartnomada nodavlat ta’lim tashkilotining nomi, STIR, o‘qitiladigan zamonaviy kasb, xorijiy til turi yoki axborot texnologiyalar yo‘nalishi, o‘quv kursining bir oylik to‘lovi miqdori va umumiy muddati ko‘rsatilgan bo‘lishi lozim.`,
        },
        {
            title: 'YOSH OILALARGA “YOSHLAR DAFTARI”DA QANDAY IMTIYOZLAR MAVJUD?',
            content: `Ijtimoiy himoyaga muhtoj yosh oilalarga 12 oygacha turar joy uchun ijara kompensatsiyasi har oyda BHMning 3 baravaridan oshmagan miqdorda “Yoshlar daftari” jamg‘armasi mablag‘lari hisobidan subsidiya ajratiladi. Bunda er-xotinning har ikkisi o‘ttiz yoshdan oshmagan (o‘ttiz bir yoshga to‘lmagan) bo‘lishi, mulk huquqi asosida turar joyi bo‘lmagan, ilgari maqsadli dasturlar doirasida imtiyozli ipoteka kreditlari orqali kvartira yoki yakka tartibdagi uy-joylar bilan ta’minlanmagan, ipoteka kreditlari bo‘yicha subsidiyalar yoki uy-joylar ta’minoti bilan bog‘liq boshqa imtiyozlardan foydalanmagan hamda har ikkisi yoki biri “Yoshlar daftari”ga kiritilgan bo‘lishi talab etiladi.`,
        },
       
        {
            title: 'BIR MARTALIK MODDIY YORDAM “YOSHLAR DAFTARI”DAN CHIQARISHGA ASOS BO’LA OLADIMI?',
            content: `“Yoshlar daftari”ga kiritilgan moddiy ahvoli og‘ir yoshlarga bir martalik moddiy yordam ushbu Nizomga 2-ilovada keltirilgan sxemaga muvofiq har bir individual holatda ariza beruvchining hayotiy vaziyati murakkabligini, uning ijtimoiy himoyaga muhtoj ekanligini inobatga olgan holda bazaviy hisoblash miqdorining (keyingi o‘rinlarda — BHM) 4 baravarigacha miqdorda to‘lab beriladi. Ariza beruvchi bir martalik moddiy yordam ajratishni so‘rab mahalladagi yoshlar yetakchisiga ariza beradi. Mahalladagi yoshlar yetakchisi uch ish kuni ichida ariza beruvchining ijtimoiy toifasi va holatini o‘rganadi hamda moddiy yordam ajratish haqidagi tavsiyanoma yoki rad etish to‘g‘risida xabarnomani Vasiylik kengashiga yuboradi. Mahalladagi yoshlar yetakchisining moddiy yordam ajratish haqidagi ijobiy tavsiyasi asosida Vasiylik kengashi qarori qabul qilinib, yetti ish kuni ichida tuman (shahar)lar hokimliklariga yuboriladi. Vasiylik kengashi qarori asosida tuman (shahar)lar hokimliklari “Yoshlar daftari” jamg‘armasi mablag‘lari hisobidan zarur mablag‘larni uch ish kuni ichida Xalq bankining tegishli bo‘limi (filiali)ga o‘tkazadi. Xalq bankining tegishli bo‘limi (filiali) tomonidan bir martalik moddiy yordam to‘lovlarini uch ish kuni ichida ariza beruvchiga naqd yoki naqd pulsiz shaklda to‘lab beradi. Shaxsga bir martalik moddiy yordam berilishi uni “Yoshlar daftari”dan chiqarishga asos bo‘lmaydi. Moddiy yordam shaxsga bir kalendar yil davomida bir marotaba beriladi`,
        },
        {
            title:'"YOSHLAR DAFTARI"GA QANDAY OILA FARZANDLARI KIRA OLADI?',
            content:'“Yoshlar daftari”ga doimiy yoki vaqtincha yashash joyi bo‘yicha o‘n to‘rt yoshga to‘lgan va o‘ttiz yoshdan oshmagan (o‘ttiz bir yoshga to‘lmagan) quyidagi toifadagi: oila a’zosi “Temir daftar”, “Ayollar daftari” yoki “Ijtimoiy himoya yagona reyestri”ga kiritilgan; ijtimoiy himoyaga muhtoj bo‘lgan; boquvchisini yo‘qotgan, yetim yoki ota-ona qaramog‘idan mahrum bo‘lgan; o‘ziga nisbatan vasiylik yoki homiylik belgilangan; o‘zgalar parvarishiga muhtoj bo‘lgan ishga layoqatsiz; I yoki II guruh nogironligi bo‘lgan; farzandida I yoki II guruh nogironligi bo‘lgan; jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan; ota-onasidan birida I yoki II guruh nogironligi bo‘lgan, ikkinchisi esa ish faoliyatini to‘xtatgan holda bemorga qarashga majbur bo‘lgan yoxud ota-onasining har ikkisida I yoki II guruh nogironligi bo‘lgan; yuzaga kelgan holatlar sababli og‘ir turmush sharoitida qolgan; zo‘ravonlik va ekspluatatsiya, tabiiy ofatlar, halokatlar, yong‘inlar va boshqa favqulodda vaziyatlar oqibatida hayotiga, sog‘lig‘iga, mulkiga zarar yetgan; “Mehribonlik” uyi, Bolalar shaharchasi yoki oilaviy bolalar uyida tarbiyalangan; haq to‘lanadigan ishga yoki ish haqi (mehnat daromadi) keltiradigan mashg‘ulotga ega bo‘lmagan; davolanishga muhtoj bo‘lgan bemor yoshlar; jazoni ijro etish muassasalaridan qaytgan; muayyan yashash joyiga ega bo‘lmagan; psixologik maslahatga muhtoj; nikohi qayd etilganiga uch yildan oshmagan yosh oila; dehqonchilik yoki tomorqa xo‘jaligini yuritayotgan; yosh tadbirkor yoki o‘zini o‘zi band qilgan shaxs sifatida soliq xizmati organlarida ro‘yxatdan o‘tgan yoshlar kiritiladi.'

        },
        {
            title:'"YOSHLAR DAFTARI"DA KONTRAKT TOLOVI MASALASIDA QANDAY IMTIYOZLAR MAVJUD?',
            content:'Respublikamizdagi professional ta’lim tashkilotlarida ta’lim olayotgan, shuningdek, O‘zbekiston Respublikasida faoliyat ko‘rsatayotgan barcha oliy ta’lim tashkilotlarida (davlat, nodavlat oliy ta’lim tashkilotlari, O‘zbekiston Respublikasi hududidagi xorijiy oliy ta’lim tashkilotlari va xorijiy oliy ta’lim tashkilotlarining filiallarida) bakalavriatning kunduzgi, sirtqi va kechki shaklida, magistraturaning kunduzgi yo‘nalishida ta’lim olayotgan o‘quvchi-talabalarga to‘lov-kontrakt asosida o‘qish bo‘yicha yillik xarajatlarining bir qismi qoplab beriladi. Ushbu xarajatlarni to‘lab berish yoshlar yetakchisining ijobiy tavsiyasi asosida “Yoshlar daftari” jamg‘armasi mablag‘lari hisobidan to‘lov-kontrakt summasining 50 foizigacha, biroq BHMning 50 baravaridan oshmagan miqdorda ushbu Nizomga 8-ilovada keltirilgan sxemaga muvofiq amalga oshiriladi (ikkinchi va undan keyingi mutaxassislik, qo‘shma ta’lim dasturlari bo‘yicha, tabaqalashtirilgan to‘lov-kontrakt asosida ta’lim olayotganlar bundan mustasno).'
        }
    ];
  return (
    <div className='accardionData'>
  <div className="accordion-container">
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div className={`accordion-title ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                        <h3>{item.title}</h3>
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default AccardionData
