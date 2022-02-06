import React, {useState, useEffect} from "react";

const resolveTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        // theme이 localStorage에 없으면 os 디폴트 값을 받아온다.
        const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
        theme = matches ? "dark" : "light";
    }
    return theme;
}

const useTheme = () => {
    const [theme, setTheme] = useState(resolveTheme);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    },[theme]);

    return [theme, toggleTheme];
}

export default useTheme;
