"use client";

export default function BackToTopButton() {
    const scrollToTop = () => {
        const wrapper = document.querySelector("body");
        wrapper?.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <div className="back-to-top-wrapper">
            <button className="back-to-top" onClick={scrollToTop}>
                De Volta Ao Início
            </button>
        </div>
    );
}
