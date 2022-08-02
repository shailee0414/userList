import React from "react";

const Link = ({ onClick, className, text }) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}
export default Link;