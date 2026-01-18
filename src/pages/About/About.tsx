import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    return (
        <>
            <section className="section">
                <div className="container about__head">
                    <h2>История Компота</h2>
                    <p>
                        Кот, которого когда-то оставили на заправке, а сегодня он — любимчик
                        Immenstadt am Bodensee.
                    </p>

                    <div className="about__actions">
                        <Link className="btn btn--primary" to="/gallery">
                            Смотреть фото
                        </Link>
                        <a className="btn btn--ghost" href="#commission">
                            Заказать портрет
                        </a>
                    </div>
                </div>
            </section>

            <section className="section section--sm">
                <div className="container">
                    <div className="about__timeline">
                        <article className="about__step">
                            <div className="about__dot" aria-hidden="true" />
                            <div className="about__content">
                                <h3>Начало</h3>
                                <p>
                                    Компота нашли на заправке — он был выброшен на улицу. Но именно
                                    тогда началась его новая жизнь.
                                </p>
                            </div>
                        </article>

                        <article className="about__step">
                            <div className="about__dot" aria-hidden="true" />
                            <div className="about__content">
                                <h3>Путешествие</h3>
                                <p>
                                    Родился примерно в мае 2021. Молдавия → Украина → Германия.
                                    Сейчас он живёт у Боденского озера, в Immenstadt am Bodensee.
                                </p>
                            </div>
                        </article>

                        <article className="about__step">
                            <div className="about__dot" aria-hidden="true" />
                            <div className="about__content">
                                <h3>Личность</h3>
                                <p>
                                    Он супервлюбительный и коммуникабельный — его легко встретить
                                    на улице в разных ошейниках. Любит, чтобы его гладили, но
                                    всегда знает меру.
                                </p>
                            </div>
                        </article>

                        <article className="about__step">
                            <div className="about__dot" aria-hidden="true" />
                            <div className="about__content">
                                <h3>Правила гурмана</h3>
                                <p>
                                    Обожает красную икру, но молочку ему нельзя. И ещё одно правило:
                                    удержать Компота дома “в заперти” невозможно — улица зовёт.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section--sm">
                <div className="container">
                    <div className="about__grid">
                        <article className="aboutCard">
                            <h3>Факты быстро</h3>
                            <ul className="aboutList">
                                <li>
                                    <span className="aboutList__k">Имя:</span>
                                    <span className="aboutList__v">Компот</span>
                                </li>
                                <li>
                                    <span className="aboutList__k">Родился:</span>
                                    <span className="aboutList__v">~ май 2021</span>
                                </li>
                                <li>
                                    <span className="aboutList__k">Где живёт:</span>
                                    <span className="aboutList__v">Immenstadt am Bodensee</span>
                                </li>
                                <li>
                                    <span className="aboutList__k">Любит:</span>
                                    <span className="aboutList__v">прогулки, ласку, красную икру</span>
                                </li>
                                <li>
                                    <span className="aboutList__k">Нельзя:</span>
                                    <span className="aboutList__v">молочные продукты</span>
                                </li>
                            </ul>
                        </article>

                        <article className="aboutCard" id="commission">
                            <h3>Портрет вашего питомца</h3>
                            <p>
                                Компоту даже нарисовали картину — и это вдохновило нас делиться
                                историей дальше. Если хотите заказать портрет любимого питомца,
                                мама Компота с удовольствием нарисует.
                            </p>
                            <p className="aboutNote">
                                Работы уже живут в уютных домах Германии и радуют своих хозяев.
                            </p>

                            <div className="about__ctaRow">
                                {/* Поставь сюда реальную ссылку, когда будешь готов */}
                                <a className="btn btn--primary" href="#" aria-disabled="true">
                                    Написать художнице
                                </a>
                                <span className="aboutHint">
                  (добавишь ссылку на Instagram/контакт позже)
                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section--sm">
                <div className="container">
                    <article className="aboutCard aboutCard--wide">
                        <h3>Авторы</h3>
                        <p>
                            Мы — молодая пара из Украины. Сейчас живём и работаем в Германии.
                            Папа (в кавычках) — бармен и фрилансер фронтенд-разработчик. Мама
                            (в кавычках) работает в ресторане и рисует картины.
                        </p>

                        <div className="about__links">
                            {/* Добавишь реальные ссылки позже */}
                            <a className="aboutLink" href="#" aria-disabled="true">
                                Instagram автора (EN)
                            </a>
                            <a className="aboutLink" href="#" aria-disabled="true">
                                Портфолио картин
                            </a>
                        </div>

                        <p className="aboutNote">
                            Совет для портфолио: добавь реальные ссылки, когда будешь готов, и
                            убери “в кавычках” — можно заменить на более нейтральный стиль.
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
};

export default About;
