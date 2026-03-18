import { useTranslation } from "react-i18next"; 
import style from '../styles/Navlinks.module.css';

const Navlinks = () => {
  
  const { t } = useTranslation();

  return (
    <div className={style.links_container}>
      <a href="#home">{t('nav.home')}</a>
      <a href="#about">{t('nav.about')}</a>
      <a href="#projects">{t('nav.projects')}</a>
      <a href="#skills">{t('nav.skills')}</a>
      <a href="#contact" className={style.button_contato}>{t('nav.contact')}</a>
    </div>
  )
}

export default Navlinks;