import "./DarkMode.scss";
import useLocalStorage from "./useLocalStorage";

function DarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="dark-mode-component" data-theme={theme}>
            <div className="dark-mode-container">
                <p>Hello World!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}

export default DarkMode;
