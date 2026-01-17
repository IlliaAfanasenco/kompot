import "./Features.css";

const items = [
    {
        title: "Путь домой",
        text: "Родился в Молдавии → жил в Украине → теперь в Германии, Immenstadt am Bodensee.",
    },
    {
        title: "Характер",
        text: "Супер-коммуникабельный и обнимательный. Любит внимание, но знает меру.",
    },
    {
        title: "Свобода важнее всего",
        text: "Обожает гулять и всегда в разных ошейниках. Дома “в заперти” не удержать.",
    },
    {
        title: "Гурман с правилами",
        text: "Красная икра — любовь. Молочку нельзя, поэтому он дисциплинированный гурман.",
    },
];

const Features = () => {
    return (
        <section className="section section--sm">
            <div className="container">
                <div className="features__head">
                    <h2>Коротко о Компоте</h2>
                    <p>4 факта, которые объясняют его характер лучше любых слов.</p>
                </div>

                <div className="features__grid">
                    {items.map((it) => (
                        <article className="features__card" key={it.title}>
                            <h3 className="features__title">{it.title}</h3>
                            <p className="features__text">{it.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
