import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
          onClick={handleOnClick}
        >
          <BsArrowUpCircle size={32} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
