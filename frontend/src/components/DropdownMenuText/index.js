import React, { useMemo } from "react";
import ReactDom from "react-dom";

import { Box } from "theme-ui";
import { animated, useSpring } from "react-spring";
import { BsDot } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";

const AnimatedIcon = animated.span;
const AnimatedBox = animated(Box);

export const DropdownMenuText = (props) => {
    const [stylesDot, apiDot] = useSpring(() => ({ opacity: 0, color: "color4" }));
    const [stylesCheveron, apiCheveron] = useSpring(() => ({
        opacity: 1
    }));

    return (
        <AnimatedBox
            as={"span"}
            onMouseEnter={() => {
                apiDot.start({ opacity: 1 });
                apiCheveron.start({ opacity: 0 });
            }}
            onMouseLeave={() => {
                apiDot.start({ opacity: 0 });
                apiCheveron.start({ opacity: 1 });
            }}
            {...props}
            sx={{
                transition: "color 0.2s",
                "&:hover": {
                    color: "color4"
                },
                cursor: "pointer"
            }}
        >
            {props.children}
            <AnimatedIcon
                style={{
                    transform: "translate(70%,21%)",
                    display: "inline-block",
                    ...stylesCheveron
                }}
            >
                <HiChevronDown />
            </AnimatedIcon>
            <AnimatedIcon
                style={{
                    transform: "translate(-28%,21%)",
                    display: "inline-block",
                    ...stylesDot
                }}
            >
                <BsDot />
            </AnimatedIcon>
        </AnimatedBox>
    );
};

// ReactDom.render(
//     <DropdownMenuText>Hello Menu</DropdownMenuText>,
//     document.getElementById("root")
// );
