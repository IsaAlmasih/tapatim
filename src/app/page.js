"use client";
import styles from "./styles.module.css"
import ImageViewer from "react-simple-image-viewer";

import logo from "../assets/Pho.png";

import img1 from "../assets/0000007.jpg";
import img2 from "../assets/000011.jpg";
import img3 from "../assets/00077.jpg";
import img5 from "../assets/000222.jpg";
import img6 from "../assets/000222.jpg";
import img7 from "../assets/0000007.jpg";
import img8 from "../assets/0000007.jpg";
import img10 from "../assets/0000007.jpg";
import img15 from "../assets/papir9.jpg";
import img12 from "../assets/0000007.jpg";
import img13 from "../assets/papir6.jpg";
import img14 from "../assets/0000007.jpg";

import { useCallback, useState } from "react";

import Image from "next/image";

import img11 from "../assets/tu.jpg";
import img16 from "../assets/tubi.jpg";

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
          <Link href="/gallery">Перейти в галерею товаров.</Link>
          <Link href="/video">Перейти в видео галерею.</Link>
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
