import { FunctionComponent } from "react";
import { Header } from "../text/Header";
import styles from "./Location.module.css";

export const Location: FunctionComponent = () => {
  return (
    <>
      <Header text="Hvor" subHeader="Adressen er Gemmas Allé 100, 2770 Kastrup. Der er gratis parkering på vejen." />
      <iframe
        className={styles.location}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.433083645235!2d12.612973000000002!3d55.6292796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653ab4f70a6aebd%3A0x6fa3d6fbdb72c603!2sGemmas%20Alle%20100%2C%202770%20Kastrup!5e0!3m2!1sen!2sdk!4v1679075643821!5m2!1sen!2sdk"
        width="600"
        height="450"
        loading="lazy"
      />
    </>
  );
};
