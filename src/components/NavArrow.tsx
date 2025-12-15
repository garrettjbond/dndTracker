import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const NavArrow = () => {
    const navigationLinks: string[] = [
        "combat-section",
        "monster-section",
        "character-section",
        "encounter-section",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Update current index on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offset = window.innerHeight / 2;

            const idx = navigationLinks.findIndex((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const top = el.offsetTop;
                const height = el.offsetHeight;
                return scrollPosition + offset >= top && scrollPosition + offset < top + height;
            });

            if (idx !== -1) setCurrentIndex(idx);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const smoothNavigation = () => {
        const nextIndex =
            currentIndex === navigationLinks.length - 1 ? 0 : currentIndex + 1;

        document.getElementById(navigationLinks[nextIndex])?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <button
            onClick={smoothNavigation}
            className="fixed bottom-4 right-4 z-50 rounded-full animate-bounce bg-white p-3 shadow-md"
        >
            <FontAwesomeIcon
                icon={currentIndex === navigationLinks.length - 1 ? faAnglesUp : faAnglesDown}
                className="text-3xl text-primary"
            />
        </button>
    );
};

export default NavArrow;
