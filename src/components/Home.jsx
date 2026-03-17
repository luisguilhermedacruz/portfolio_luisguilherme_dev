import { useTranslation } from "react-i18next";
import style from "../styles/Home.module.css";
import backgroundImage from "../assets/fundo_1.jpg";
import PerfilImage from "../assets/perfil.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className={style.home_container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={style.welcome_text_container}>
        <h1 className={style.welcome_text}>{t("home.welcome")}{' '} </h1>
        <h1 className={style.welcome_text_2}>{t("home.welcome2")}</h1>
      </div>
      <img
        src={PerfilImage}
        alt={t("home.description")}
        className={style.profile_picture}
      />
      <h1 className={style.about_text}>{t("home.about")}</h1>
    </div>
  );
};

export default Home;
