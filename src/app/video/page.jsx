"use client";
import styles from "./styles.module.css";
// import ImageViewer from "react-simple-image-viewer";

import { useCallback, useState } from "react";

import Image from "next/image";

import Link from "next/link";
// import Slider from "@/components/slider/slider";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
        {/* <h2 className={styles.introText}>Избири жизнь!</h2> */}
      </div>
      <div className={styles.section}>
        <div className={styles.video}>
          <center>
            <h2>Первая часть видео.</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/400fc77e8f3676d87638e2194ad939ed/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <div className={styles.video}>
          <center>
            <h2>Вторая часть видео..</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/accf0977d5918c46b22539a1fb1ca7de/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <div className={styles.video}>
          <center>
            <h2>Третья часть видео.</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/ae21b85646b5d45ddacb77a84670538a/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <div className={styles.video}>
          <center>
            <h2>Четвёртая часть видео.</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/7246be2326832f10a9ea2440d9698afa/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <div className={styles.video}>
          <center>
            <h2>Пятая часть видео.</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/78e662f6c22dff4986b2c6047a7ccffc/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <div className={styles.video}>
          <center>
            <h2>Видео письма.</h2>
            <h3 className={styles.videoText}>
              Вопросы и информацию присылайте пожалуйста на почту
              tsarstvie.ru@gmail.com
            </h3>
          </center>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/a41b1b47c61ee39674cef5a182de0b17/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerCol}>
            <h5 className={styles.footerHeading}>ИНН 860501286008:</h5>
            <h5 className={styles.footerHeading}>ИНН 7731209949:</h5>
            <div className={styles.footerGroup}>
              {/* <p className={styles.footerText}>ИНН 000000000</p>
              <p className={styles.footerText}>КПП 000000000</p>
              <p className={styles.footerText}>БИГ БАНКА 000000000</p> */}
              <p className={styles.footerText}>tsarstvie.ru@gmail.com</p>
              <p className={styles.footerText}>
                <Link href="https://000000000000.ru">Матрица. Matrix</Link>
              </p>
              <p className={styles.footerText}>ТЕЛ: +7(910)415-98-76</p>
              <Link href="/">Видео галлерея.</Link>
            </div>
          </div>
          <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
