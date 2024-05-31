import React from "react";

const Button = ({text}) => {
    return (
    <button class="bg-primary text-white font-bold py-2 px-4 rounded border border-transparent transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-dark hover:border-primary-dark">
        {text}
    </button>
    );
}

export default Button;