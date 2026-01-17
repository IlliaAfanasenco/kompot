import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../../assets/images/kompot-hero.jpeg"

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero__inner">
                <div className="hero__content">
                    <p className="hero__badge">Immenstadt am Bodensee • Cat story</p>

                    <h1 className="hero__title">
                        Компот — кот-путешественник и любимчик Имменштадта.
                    </h1>

                    <p className="hero__text">
                        Когда-то его нашли на заправке. Теперь это самый дружелюбный кот у
                        Боденского озера — с характером, ошейниками и идеальным чувством
                        свободы.
                    </p>

                    <div className="hero__actions">
                        <Link className="btn btn--primary" to="/gallery">
                            Смотреть галерею
                        </Link>
                        <Link className="btn btn--ghost" to="/about">
                            История Компота
                        </Link>
                    </div>

                    <div className="hero__meta">
                        <div className="hero__metaItem">
                            <span className="hero__metaLabel">Год рождения</span>
                            <span className="hero__metaValue">~ Май 2021</span>
                        </div>
                        <div className="hero__metaItem">
                            <span className="hero__metaLabel">Характер</span>
                            <span className="hero__metaValue">Обнимательный, но с мерой</span>
                        </div>
                        <div className="hero__metaItem">
                            <span className="hero__metaLabel">Любимое</span>
                            <span className="hero__metaValue">Красная икра</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual" aria-hidden="true">
                    <img className="hero__image" src={heroImg} alt="Кот Компот"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
