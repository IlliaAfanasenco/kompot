import { useEffect, useMemo, useState } from "react";
import "./Gallery-page.css";

// Импорти свои картинки (сколько есть)
import img01 from "../../assets/images/kompot-01.jpeg"
import img02 from "../../assets/images/kompot-02.jpeg"
import img03 from "../../assets/images/kompot-03.jpeg"
import img04 from "../../assets/images/kompot-04.jpeg"
import img05 from "../../assets/images/kompot-05.jpeg"
import img06 from "../../assets/images/kompot-06.jpeg"


// добавляй дальше по аналогии

type Img = { src: string; alt: string };

const Gallery = () => {
    const images: Img[] = useMemo(
        () => [
            { src: img01, alt: "Компот на прогулке" },
            { src: img02, alt: "Компот крупным планом" },
            { src: img03, alt: "Компот в ошейнике" },
            { src: img04, alt: "Компот отдыхает" },
            { src: img05, alt: "Компот смотрит в камеру" },
            { src: img06, alt: "Компот исследует улицу" },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const isOpen = activeIndex !== null;

    const open = (index: number) => setActiveIndex(index);
    const close = () => setActiveIndex(null);

    const next = () => {
        setActiveIndex((prev) => {
            if (prev === null) return prev;
            return (prev + 1) % images.length;
        });
    };

    const prev = () => {
        setActiveIndex((prev) => {
            if (prev === null) return prev;
            return (prev - 1 + images.length) % images.length;
        });
    };

    // Lock body scroll when modal open
    useEffect(() => {
        if (!isOpen) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    // Keyboard controls
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, images.length]);

    const active = activeIndex === null ? null : images[activeIndex];

    return (
        <section className="section">
            <div className="container">
                <div className="galleryHead">
                    <h2>Галерея Компота</h2>
                    <p>Нажми на фото, чтобы открыть просмотр. ESC — закрыть, ← → — листать.</p>
                </div>

                <div className="galleryGrid">
                    {images.map((img, idx) => (
                        <button
                            key={img.src}
                            className="thumb"
                            type="button"
                            onClick={() => open(idx)}
                            aria-label={`Открыть фото: ${img.alt}`}
                        >
                            <img className="thumb__img" src={img.src} alt={img.alt} loading="lazy" />
                        </button>
                    ))}
                </div>
            </div>

            {isOpen && active && (
                <div
                    className="modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Просмотр фото"
                    onMouseDown={(e) => {
                        // close only when click on backdrop
                        if (e.target === e.currentTarget) close();
                    }}
                >
                    <div className="modal__inner">
                        <button className="modal__close" type="button" onClick={close} aria-label="Закрыть">
                            ✕
                        </button>

                        <button className="modal__nav modal__nav--left" type="button" onClick={prev} aria-label="Предыдущее фото">
                            ‹
                        </button>

                        <figure className="modal__figure">
                            <img className="modal__img" src={active.src} alt={active.alt} />
                            <figcaption className="modal__caption">
                                {active.alt} • {activeIndex + 1}/{images.length}
                            </figcaption>
                        </figure>

                        <button className="modal__nav modal__nav--right" type="button" onClick={next} aria-label="Следующее фото">
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
