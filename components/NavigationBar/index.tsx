import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { LazyLoading } from "../LazyLoading";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

function SVGIcon(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    return toTheme === "dark" ? (
        <button
            aria-label="Switch Theme Button"
            className="rotate-[360deg] transition-transform duration-500"
            onClick={() => renderThemeChange("light", setTheme, setThemeIcon)}
        >
            <HiSun
                className="h-10 w-10 fill-[#DDDDDD]"
            />
        </button>
    ) : (
        <button
            aria-label="Switch Theme Button"
            className="rotate-[360deg] transition-transform duration-500"
            onClick={() => renderThemeChange("dark", setTheme, setThemeIcon)}
        >
            <HiMoon
                className="h-10 w-10 fill-[#222831]"
            />
        </button>
    );
}

function renderThemeChange(
    toTheme: "dark" | "light",
    setTheme: (theme: string) => void,
    setThemeIcon: Dispatch<SetStateAction<(boolean | JSX.Element)[]>>
) {
    setTheme(toTheme);
    setThemeIcon([true, SVGIcon(toTheme, setTheme, setThemeIcon)]);
}

export const NaviagationBar = function () {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [themeIcon, setThemeIcon] = useState([
        false,
        <LazyLoading
            key={0}
            className="h-10 w-10 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
        />
    ]);

    useEffect(() => {
        if (!themeIcon[0]) {
            setThemeIcon([
                true,
                SVGIcon(
                    currentTheme === "dark" ? "dark" : "light",
                    setTheme,
                    setThemeIcon
                )
            ]);
        }
    }, [currentTheme, themeIcon, setTheme]);

    useEffect(() => {
        setThemeIcon([
            true,
            SVGIcon(
                currentTheme === "dark" ? "dark" : "light",
                setTheme,
                setThemeIcon
            )
        ]);
    }, [currentTheme, setTheme]);

    return (
        <>
            <MobileNavbar themeIcon={themeIcon} />
            <DesktopNavbar themeIcon={themeIcon} />
        </>
    );
};
