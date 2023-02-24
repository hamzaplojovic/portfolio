import React from "react";
import { IconChevronUp } from "@tabler/icons";
import "../index.scss";

export const ScrollToTop = () => {
    return (
        <button
            className="scroll-to-top"
            type="button"
            aria-label="Scroll to top"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            <IconChevronUp
                size={50}
                stroke={0.5}
                className="scroll-to-top-icon"
            />
        </button>
    );
};
