"use client";
import styles from "./styles.module.css";
import ImageViewer from "react-simple-image-viewer";

import logo from "../../assets/Pho.png";

import img1 from "../../assets/0000007.jpg";
import img2 from "../../assets/000011.jpg";
import img3 from "../../assets/00077.jpg";
import img5 from "../../assets/000222.jpg";
import img6 from "../../assets/000222.jpg";
import img7 from "../../assets/0000007.jpg";
import img8 from "../../assets/0000007.jpg";
import img10 from "../../assets/0000007.jpg";
import img15 from "../../assets/papir9.jpg";
import img12 from "../../assets/0000007.jpg";
import img13 from "../../assets/papir6.jpg";
import img14 from "../../assets/0000007.jpg";

import { useCallback, useState } from "react";

import Image from "next/image";

import img11 from "../../assets/tu.jpg";
import img16 from "../../assets/tubi.jpg";

import Link from "next/link";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img15.src,
    img12.src,
    img13.src,
    img14.src,
    // img10.src,
    // img1.src,
    // img2.src,
    // img3.src,
    // img5.src,
    // img6.src,
    // img7.src,
    // img8.src,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {" "}
        {/* Дешевле и быстрей наносить клей нашими машинами. */}
      </div>
      <div className={styles.section}>
        <div className={styles.contacts}>
          <div>
            <a
              href={
                "https://www.google.com/maps/search/119071,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%83%D0%BB%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5,%2010,"
              }
            >
              {" "}
              +7(910)415-98-76 Город Москва. Ул., дом 42.
            </a>
          </div>
          <div>
            Тел: <a href={"tel:+7(910)4159876"}>+7(910)415-98-76 (WhatsApp)</a>
          </div>
          <div>
            {/* email: */}
            {/* <a href={"mailto:info@sharov-tech.com"}> 23v@mail.ru</a> */}
          </div>
        </div>
        <div className={styles.about}>
          {/* <Link href="/gallery">Перейти в галерею товаров.</Link>
          <Link href="/">Наши мероприятия.</Link> */}
        </div>
        <div className={styles.photos}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              style={{
                padding: "60px",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
        <div className={styles.feedback}>
          <h2>Наше сообщество в контакте.</h2>
          <Link href="https://vk.com/sdsioy">
            <Image src={img11} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerCol}>
            <a href="\">
              <Image
                className={styles.footerLogo}
                src={img16}
                width={60}
                height={50}
                alt="logo"
              />
            </a>
            <h3 className={styles.footerHeading}>Реквизиты:</h3>
            <div className={styles.footerGroup}>
              <p className={styles.footerText}>ИНН 000000000</p>
              <p className={styles.footerText}>КПП 000000000</p>
              <p className={styles.footerText}>БИГ БАНКА 000000000</p>
              <p className={styles.footerText}>
                РАСЧЁТНЫЙ СЧЕТ 000000000000000000
              </p>
              <p className={styles.footerText}>КОР СЧЕТ 000000000000000000</p>
              <p className={styles.footerText}>ТЕЛ: +7(910)415-98-76</p>
            </div>
          </div>

          {/* Правая колонка */}
          <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

//<div>// import React from 'react'

// import Image from "next/image";

// import image1 from '../../assets/papir6.jpg'
// import image2 from "../../assets/000011.jpg";
// import image3 from "../../assets/910.jpg";
// import image4 from "../../assets/0000.jpg";

// import styles from './styles.module.css'
// import Link from 'next/link';

// const page = () => {
//   return (
//     <div className={styles.wrapperGlav}>
//       <div className={styles.wrapper}>
//         <div className={styles.galleryCard}>
//           <Image
//             src={image1} // Путь к изображению
//             alt="Описание изображения"
//             width={400} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image2} // Путь к изображению
//             alt="Описание изображения"
//             width={400} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image3} // Путь к изображению
//             alt="Описание изображения"
//             width={460} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image4} // Путь к изображению
//             alt="Описание изображения"
//             width={470} // Ширина изображения
//             height={600} // Высота изображения
//           />
//         </div>
//         <div>
//           <h2 className={styles.opisanie}>
//             Чистые листы Египетского папируса. Формат А4
//           </h2>
//           <p className={styles.opisanieBig}>
//             Папирус предназначен в первую очередь для творческих людей. Подходит
//             для рисования гуашью, кистью, губкой, люминесцентными красками... в
//             общем поверхность позволяет различным экспериментам. Вопрос только в
//             сроке службы красок, на данном этапе рекомендуют тушь. И не бойтесь
//             писать перьями. Листы папируса собраны из растения на заболоченных
//             местах реки Нил в Египте. Для создания свитка, летописи и
//             исторических сочинении историкам, школьникам и студентам. Также для
//             нанесения печати, рисунков и картин на различном оборудовании:
//             Ультрафиолетовая печать. Лазерный. (((Струйник, запрет!!!! Испортите
//             головку.))) Поверхность фактурная, жесткая, гибкая особенность.
//             Период полураспада папируса составляет несколько тысяч лет. Вопрос к
//             вам! Вы когда-нибудь задумывались как сохранить свои знания для
//             грядущих поколений? Как повлиять на ход развития цивилизации и войти
//             в историю? Задумывались ли вы как можно создать летопись для всей
//             семьи, сохранить наследие для потомков, или ваши знания, труды?
//             Думаю, задумывались, во всяком случае, моё послание тем, кто меня
//             слышит и разделяет мои интересы. Идеально подойдёт для школьных
//             мероприятий от благотворительных фондов в виде проведения диктантов.
//             Можно как подарок. Идеально подойдёт для создания книг разных
//             размеров и форм. Папирус — путешествие в прошлое, формируя будущее в
//             настоящем. Если вы хотите оставить после себя память, если вы хотите
//             сделать послание для потомков, папирус — достойны и единственный
//             выбор! Как вариант можно писать письма. Письма или подобие пишите
//             тушью, или шариковыми ручками черным цветом, в черных есть тушь.
//             Спросите у реставраторов как быть. Папирус не обязывает вас писать
//             или рисовать в стиле Египта, нет, пишите и рисуйте что душе угодно и
//             я гарантирую, если вы серьёзно подойдёте к своему творчеству,
//             папирус пронесёт вашу душу на тысячелетия. Ширина листа А4, 23 см
//             для того чтобы вы сантиметр могли использовать на загиба, подшивать
//             листы.
//           </p>
//           <Link
//             href="https://www.avito.ru/orsk/kollektsionirovanie/2_lista_a4_chistye_listy_egipetskogo_papirusa_7327573674"
//             className={styles.wrappe}
//           >
//             Купить через Авито
//           </Link>
//         </div>
//       </div>
//       <div className={styles.wrapper}>
//         <div className={styles.galleryCard}>
//           <Image
//             src={image1} // Путь к изображению
//             alt="Описание изображения"
//             width={400} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image2} // Путь к изображению
//             alt="Описание изображения"
//             width={400} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image3} // Путь к изображению
//             alt="Описание изображения"
//             width={460} // Ширина изображения
//             height={600} // Высота изображения
//           />
//           <Image
//             src={image4} // Путь к изображению
//             alt="Описание изображения"
//             width={470} // Ширина изображения
//             height={600} // Высота изображения
//           />
//         </div>
//         <div>
//           <h2 className={styles.opisanie}>
//             Чистые листы Египетского папируса. Формат А4
//           </h2>
//           <p className={styles.opisanieBig}>
//             Папирус предназначен в первую очередь для творческих людей. Подходит
//             для рисования гуашью, кистью, губкой, люминесцентными красками... в
//             общем поверхность позволяет различным экспериментам. Вопрос только в
//             сроке службы красок, на данном этапе рекомендуют тушь. И не бойтесь
//             писать перьями. Листы папируса собраны из растения на заболоченных
//             местах реки Нил в Египте. Для создания свитка, летописи и
//             исторических сочинении историкам, школьникам и студентам. Также для
//             нанесения печати, рисунков и картин на различном оборудовании:
//             Ультрафиолетовая печать. Лазерный. (((Струйник, запрет!!!! Испортите
//             головку.))) Поверхность фактурная, жесткая, гибкая особенность.
//             Период полураспада папируса составляет несколько тысяч лет. Вопрос к
//             вам! Вы когда-нибудь задумывались как сохранить свои знания для
//             грядущих поколений? Как повлиять на ход развития цивилизации и войти
//             в историю? Задумывались ли вы как можно создать летопись для всей
//             семьи, сохранить наследие для потомков, или ваши знания, труды?
//             Думаю, задумывались, во всяком случае, моё послание тем, кто меня
//             слышит и разделяет мои интересы. Идеально подойдёт для школьных
//             мероприятий от благотворительных фондов в виде проведения диктантов.
//             Можно как подарок. Идеально подойдёт для создания книг разных
//             размеров и форм. Папирус — путешествие в прошлое, формируя будущее в
//             настоящем. Если вы хотите оставить после себя память, если вы хотите
//             сделать послание для потомков, папирус — достойны и единственный
//             выбор! Как вариант можно писать письма. Письма или подобие пишите
//             тушью, или шариковыми ручками черным цветом, в черных есть тушь.
//             Спросите у реставраторов как быть. Папирус не обязывает вас писать
//             или рисовать в стиле Египта, нет, пишите и рисуйте что душе угодно и
//             я гарантирую, если вы серьёзно подойдёте к своему творчеству,
//             папирус пронесёт вашу душу на тысячелетия. Ширина листа А4, 23 см
//             для того чтобы вы сантиметр могли использовать на загиба, подшивать
//             листы.
//           </p>
//           <Link
//             href="https://www.avito.ru/orsk/kollektsionirovanie/2_lista_a4_chistye_listy_egipetskogo_papirusa_7327573674"
//             className={styles.wrappe}
//           >
//             Купить через Авито
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page
//</div>
