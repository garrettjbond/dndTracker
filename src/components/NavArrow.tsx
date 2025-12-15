import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavArrow = () => {
    const navigationLinks: string[] = [
        "combat-section",
        "monster-section",
        "character-section",
        "encounter-section",
    ];

    const smoothNavigation = () => {
        const scrollPosition = window.scrollY;
        const offset = window.innerHeight / 2;

        const currentIndex = navigationLinks.findIndex((id) => {
            const el = document.getElementById(id);
            if (!el) return false;

            const top = el.offsetTop;
            const height = el.offsetHeight;

            return scrollPosition + offset >= top && scrollPosition + offset < top + height;
        });

        const nextIndex =
            currentIndex === -1 || currentIndex === navigationLinks.length - 1
                ? 0
                : currentIndex + 1;

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
                icon={faAnglesDown}
                className="text-3xl text-primary"
            />
        </button>
    );
};

export default NavArrow;
