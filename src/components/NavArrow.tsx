import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const NavArrow = () => {
  const navigationLinks: string[] = [
    "landing-section",
    "combat-section",
    "monster-section",
    "character-section",
    "encounter-section",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let closestIndex = 0;
      let minDistance = Infinity;

      navigationLinks.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const distance = Math.abs(top - scrollPosition);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
      className="cursor-pointer fixed bottom-4 right-4 z-50 rounded-full animate-bounce bg-white p-3 shadow-md"
    >
      <FontAwesomeIcon
        icon={currentIndex === navigationLinks.length - 1 ? faAnglesUp : faAnglesDown}
        className="text-3xl text-primary"
      />
    </button>
  );
};

export default NavArrow;
