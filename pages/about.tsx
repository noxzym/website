import Router from "next/router";
import Picture from "@/public/assets/images/Orchitiadi.jpg";

export default function MyAbout() {
    return (
        <>
            {/* <section className="relative h-screen">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="transition-on-theme-change text-[#222831] dark:text-[#DDDDDD]">
                        <p className="font-segoe-bold text-xl capitalize lg:text-2xl xl:text-4xl">
                            Hi, I&apos;am
                        </p>
                        <p className="pt-1 font-alfa-slab-one text-2xl capitalize lg:text-4xl xl:text-6xl">
                            orchitiadi ismaulana putra
                        </p>
                        <p className="pt-1 font-segoe-bold text-xl capitalize lg:text-2xl xl:text-4xl">
                            an college students of gunadarma university.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-8 flex w-full items-center justify-center">
                    <button
                        className="h-12 w-12 animate-bounce"
                        onClick={() => Router.push("#about-content")}
                    >
                        <svg
                            className="transition-on-theme-change fill-transparent stroke-[#222831] stroke-[1] dark:stroke-[#DDDDDD]"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 8v8m0 0 3.5-3.5M12 16l-3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                        </svg>
                    </button>
                </div>
            </section> */}
            <section className="relative px-[5%] lg:h-screen lg:px-[15%] portrait:h-screen landscape:py-40">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="transition-on-theme-change flex w-full flex-col items-center justify-center rounded-xl bg-[#C7C7C7] shadow-md dark:bg-[#333333] lg:w-fit lg:flex-row">
                        <picture>
                            <img
                                src={Picture.src}
                                alt="Orchitiadi"
                                className="w-full rounded-xl lg:max-w-[200px]"
                            />
                        </picture>
                        <div className="transition-on-theme-change m-3 text-center text-[#222831] dark:text-[#DDDDDD] lg:text-left">
                            <p className="font-segoe-bold text-xl lg:text-2xl xl:text-3xl">
                                Hi, I am
                            </p>
                            <p className="font-alfa-slab-one text-xl capitalize lg:text-3xl xl:text-5xl">
                                orchitiadi ismaulana putra
                            </p>
                            <p className="font-serif text-xl capitalize">
                                an college students of gunadarma university
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 right-0 bottom-8 m-auto flex w-full items-center justify-center">
                    <button
                        className="h-12 w-12 animate-bounce"
                        onClick={() => Router.push("#about-me")}
                    >
                        <svg
                            className="transition-on-theme-change fill-transparent stroke-[#222831] stroke-[1] dark:stroke-[#DDDDDD]"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 8v8m0 0 3.5-3.5M12 16l-3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                        </svg>
                    </button>
                </div>
            </section>
            <section
                id="about-me"
                className="transition-on-theme-change w-full py-5 px-[5%] text-[#222831] dark:text-[#DDDDDD] lg:px-[15%]"
            >
                <div className="font-alfa-slab-one text-3xl capitalize xl:text-5xl">
                    about me
                </div>
                <div className="flex w-full flex-col">
                    <div className="transition-on-theme-change my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
                        <div className="flex w-full flex-col py-1 pl-3">
                            <div className="mb-1 font-segoe-bold text-xl capitalize xl:text-2xl">
                                biography
                            </div>
                            <div className="text-justify indent-8 font-serif">
                                My name is Orchitiadi Ismaulana Putra, 18 years
                                old student of{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://gunadarma.ac.id/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Gunadarma University
                                </a>{" "}
                                at the{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="http://fti.gunadarma.ac.id/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Faculty of Industrial Engineering
                                </a>
                                . I am a person who is very interested in the
                                field of technology, especially in the field of
                                programming. I have small experience in a few
                                programming languages, such as{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://www.javascript.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Javascript
                                </a>
                                ,{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Typescript
                                </a>
                                ,{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://www.java.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Java
                                </a>
                                ,{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://kotlinlang.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Kotlin
                                </a>
                                , and{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://www.python.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Python
                                </a>
                                . I am also have experience in web development.
                                I use framework of{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    React
                                </a>{" "}
                                for my web development called{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Next.js
                                </a>{" "}
                                and use styling framework called{" "}
                                <a
                                    className="font-bold text-[#DA0037] dark:text-[#EEB76B]"
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Tailwindcss
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                    <div className="transition-on-theme-change my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
                        <div className="flex w-full flex-col py-1 pl-3">
                            <div className="mb-1 font-segoe-bold text-xl capitalize xl:text-2xl">
                                Experiences
                            </div>
                            <div className="flex grid-cols-3 flex-col gap-2 lg:grid">
                                <div className="w-full rounded-md bg-[#C7C7C7] py-2 px-3 shadow dark:bg-[#333333]">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="font-bold capitalize">
                                                zuikaku discord bot
                                            </div>
                                            <div className="font-serif text-sm capitalize lg:text-xs">
                                                founder & developer
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Typescript</title>
                                                <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                                            </svg>
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Mongodb</title>
                                                <path d="M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-.469-.661-.974-1.911-.974-1.911-.005.026-.005.042-.01.068v.016c0 .021-.005.031-.005.052v.021h-.005v.067h-.005c0 .01 0 .026-.005.031v.031c0 .01 0 .021-.005.026v.026c0 .016 0 .031-.005.042v.005a.32.32 0 0 1-.01.068v.01c-.005.005-.005.01-.005.016v.021h-.005v.031h-.005v.021h-.01v.031h-.005V.61h-.005v.021h-.005v.021h-.005v.021h-.005v.021h-.005V.71h-.005v.021h-.005v.021h-.005c-.005 0-.005.005-.005.005v.01l-.005.01c0 .01-.005.021-.01.031-.005.005-.005.005-.005.01v.01h-.005v.01h-.01v.026h-.01V.88h-.005v.005h-.005v.01h-.005v.016h-.005v.01h-.01v.016h-.005v.01h-.005v.01h-.005v.016h-.005v.01h-.005v.005h-.005v.01h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.005h-.005v.01h-.005v.005h-.005v.016h-.01v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.01c-.005 0-.005.005-.005.005v.005h-.005l-.016.026s-.01.01-.01.016c-.005 0-.005.005-.005.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.005h-.005v.015h-.005v.005h-.005v.005h-.005v.01h-.005v-.01h-.01v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.016h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.01h-.005v.005h-.005v.005h-.005v.01h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.005c-.005 0-.005.005-.005.005l-.005.005-.005.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005l-.01.01v.005c-.01.005-.01.01-.021.021 0 0-.01.01-.016.01-.016.01-.036.031-.052.047-.01.005-.021.016-.031.021-.021.021-.042.036-.063.052-.031.031-.063.052-.099.083h-.005l-.245.214h-.005c-.224.198-.49.453-.792.755l-.026.026c-1.813 1.875-4.672 5.786-4.969 12.104-.031.521-.026 1.031.005 1.526v.01c.146 2.49.927 4.615 1.906 6.344.385.688.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37.589 1.359.536 3.703.536 3.703l.859.286s-.177-2.266.068-3.365c.078-.339.255-.63.464-.88.146-.099.563-.401 1.063-.859.026-.026.042-.047.063-.073 2.026-1.891 5.813-6.547 4.516-14.13z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-md bg-[#C7C7C7] py-2 px-3 shadow dark:bg-[#333333]">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="font-bold">
                                                AzuraL&apos;S Discord Bot
                                            </div>
                                            <div className="font-serif text-sm capitalize lg:text-xs">
                                                quality checker
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Javascript</title>
                                                <path d="M0 0h32v32H0zm29.38 24.37c-.234-1.464-1.188-2.688-4.005-3.833-.979-.458-2.073-.781-2.396-1.521-.12-.438-.141-.677-.063-.938.203-.865 1.219-1.12 2.021-.88.521.161 1 .557 1.302 1.198 1.38-.901 1.38-.901 2.339-1.5-.359-.557-.536-.802-.781-1.036-.839-.943-1.958-1.422-3.776-1.38l-.943.12c-.901.219-1.76.698-2.281 1.339-1.516 1.719-1.078 4.719.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938.318 1.563-1.161 2.063-2.625 1.88-1.078-.24-1.677-.781-2.339-1.781l-2.438 1.401c.276.641.599.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339.036-.12.318-.943.099-2.198zm-11.979-9.662h-2.995c0 2.583-.016 5.151-.016 7.74 0 1.641.083 3.151-.182 3.615-.443.917-1.573.802-2.089.641-.526-.26-.797-.62-1.104-1.141-.089-.141-.151-.26-.172-.26l-2.432 1.5c.406.839 1 1.563 1.766 2.021 1.141.682 2.672.901 4.276.542 1.042-.302 1.943-.922 2.411-1.88.682-1.24.536-2.76.531-4.464.016-2.74 0-5.479 0-8.24z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-md bg-[#C7C7C7] py-2 px-3 shadow dark:bg-[#333333]">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="font-bold capitalize">
                                                clytage whatsapp bot
                                            </div>
                                            <div className="font-serif text-sm capitalize lg:text-xs">
                                                assistant developer
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Typescript</title>
                                                <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-md bg-[#C7C7C7] py-2 px-3 shadow dark:bg-[#333333]">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="font-bold capitalize">
                                                noxzym website
                                            </div>
                                            <div className="font-serif text-sm lg:text-xs">
                                                Front-end Developer
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Typescript</title>
                                                <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                                            </svg>

                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Next.js</title>
                                                <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
                                            </svg>
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Tailwindcss</title>
                                                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full rounded-md bg-[#C7C7C7] py-2 px-3 shadow dark:bg-[#333333]">
                                    <div className="flex flex-row items-center justify-between gap-2">
                                        <div className="flex flex-col">
                                            <div className="font-bold capitalize">
                                                zuikaku website
                                            </div>
                                            <div className="font-serif text-sm lg:text-xs">
                                                Front-end Developer
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Typescript</title>
                                                <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                                            </svg>

                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Next.js</title>
                                                <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
                                            </svg>
                                            <svg
                                                className="h-5 w-5 rounded fill-[#222831] dark:fill-[#DDDDDD]"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Tailwindcss</title>
                                                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transition-on-theme-change my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
                        <div className="flex w-full flex-col py-1 pl-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="mb-1 font-segoe-bold text-xl capitalize xl:text-2xl">
                                Programming Languages
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Javascript</title>
                                    <path d="M0 0h32v32H0zm29.38 24.37c-.234-1.464-1.188-2.688-4.005-3.833-.979-.458-2.073-.781-2.396-1.521-.12-.438-.141-.677-.063-.938.203-.865 1.219-1.12 2.021-.88.521.161 1 .557 1.302 1.198 1.38-.901 1.38-.901 2.339-1.5-.359-.557-.536-.802-.781-1.036-.839-.943-1.958-1.422-3.776-1.38l-.943.12c-.901.219-1.76.698-2.281 1.339-1.516 1.719-1.078 4.719.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938.318 1.563-1.161 2.063-2.625 1.88-1.078-.24-1.677-.781-2.339-1.781l-2.438 1.401c.276.641.599.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339.036-.12.318-.943.099-2.198zm-11.979-9.662h-2.995c0 2.583-.016 5.151-.016 7.74 0 1.641.083 3.151-.182 3.615-.443.917-1.573.802-2.089.641-.526-.26-.797-.62-1.104-1.141-.089-.141-.151-.26-.172-.26l-2.432 1.5c.406.839 1 1.563 1.766 2.021 1.141.682 2.672.901 4.276.542 1.042-.302 1.943-.922 2.411-1.88.682-1.24.536-2.76.531-4.464.016-2.74 0-5.479 0-8.24z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Typescript</title>
                                    <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Java</title>
                                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573m6.214 9.029s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892m7.824 4.374c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Kotlin</title>
                                    <path d="m1.734 32 15.068-15.333L32 32zM0 0h16L0 16.667zm17.865 0L0 18.667V32L32 0z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                >
                                    <title>Python</title>
                                    <path d="m19.079.24 1.203.265.973.349.787.4.599.428.453.453.333.452.213.439.131.4.057.344.027.271-.016.172v7.12l-.068.839-.172.735-.281.615-.344.505-.4.411-.437.333-.469.256-.469.187-.437.136-.4.088-.344.057-.281.027h-7.964l-.916.067-.787.183-.667.297-.547.359-.443.428-.36.463-.265.485-.199.489-.135.468-.093.428-.053.359-.025.281v4.079H4.308l-.28-.043-.376-.093-.421-.156-.469-.24-.479-.348-.479-.48-.469-.615-.427-.787-.376-.973-.276-1.172L.069 17.6l-.068-1.64.079-1.625.213-1.385.323-1.161.427-.948.48-.76.531-.584.563-.443.557-.317.536-.213.48-.136.427-.068.317-.011h.213l.084.011h10.875V7.216H8.319l-.011-3.667-.025-.495.068-.453.145-.411.224-.376.333-.343.417-.308.504-.265.589-.245.677-.197.776-.161.848-.131.948-.083 1.027-.052 1.12-.027 1.692.068zm-8.396 2.64-.308.437-.109.547.109.548.308.452.437.297.547.12.547-.12.437-.297.308-.452.109-.548-.109-.547-.308-.437-.437-.292-.547-.119-.547.119zm17.453 5.265.369.084.427.156.469.24.479.359.48.469.468.625.427.785.371.975.281 1.177.187 1.385.068 1.64-.083 1.641-.215 1.385-.317 1.145-.427.948-.48.76-.536.6-.557.437-.563.323-.531.213-.48.12-.427.068-.317.025-.213-.015H16.052v1.093h7.787l.016 3.683.025.479-.068.453-.145.411-.229.385-.333.333-.411.324-.505.265-.589.229-.677.197-.776.172-.853.12-.943.093-1.032.052-1.12.016-1.692-.052-1.427-.188-1.199-.265-.973-.333-.787-.401-.599-.443-.453-.453-.333-.452-.213-.439-.136-.4-.052-.333-.027-.267.011-.171v-7.12l.068-.855.177-.724.276-.609.349-.511.4-.421.439-.323.468-.267.464-.187.443-.136.401-.077.343-.052.453-.043h7.787l.921-.067.787-.183.667-.281.547-.375.439-.428.359-.463.271-.485.199-.479.135-.464.095-.427.052-.375.025-.281V8.086h2.787l.188.011zm-8.631 19-.308.443-.104.548.104.547.308.437.443.307.547.104.547-.104.437-.307.308-.437.109-.547-.109-.548-.308-.443-.437-.307-.547-.104-.547.104z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="transition-on-theme-change my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
                        <div className="flex w-full flex-col py-1 pl-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="mb-1 font-segoe-bold text-xl capitalize xl:text-2xl">
                                frameworks
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Express.js</title>
                                    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>React</title>
                                    <circle cx="11.996" cy="11.653" r="2.142" />
                                    <path
                                        fillRule="nonzero"
                                        d="M11.996 7.81c2.768 0 5.397.39 7.396 1.078 2.22.764 3.575 1.894 3.575 2.765 0 .927-1.463 2.131-3.838 2.918-1.89.626-4.42.968-7.133.968-2.85 0-5.409-.335-7.277-.974-1.17-.4-2.136-.92-2.799-1.486-.595-.51-.895-1.016-.895-1.426 0-.874 1.302-1.988 3.475-2.746 2-.697 4.693-1.098 7.496-1.098m0-1.025c-2.912 0-5.718.418-7.834 1.156C1.622 8.825 0 10.213 0 11.653c0 1.486 1.741 2.978 4.387 3.882 1.989.68 4.654 1.029 7.609 1.029 2.816 0 5.451-.356 7.456-1.02 2.75-.912 4.54-2.385 4.54-3.891 0-1.445-1.675-2.842-4.266-3.735-2.113-.727-4.854-1.134-7.73-1.134m-3.348 2.96c1.383-2.399 3.034-4.481 4.63-5.87 1.77-1.54 3.426-2.15 4.18-1.714.803.463 1.116 2.331.611 4.782-.402 1.95-1.37 4.312-2.725 6.663-1.424 2.469-2.992 4.518-4.48 5.817-.93.814-1.863 1.391-2.685 1.682-.738.26-1.327.268-1.682.063-.757-.436-1.072-2.121-.643-4.381.395-2.081 1.394-4.615 2.794-7.043m-.888-.512c-1.455 2.522-2.495 5.162-2.913 7.363-.501 2.643-.11 4.742 1.137 5.46 1.289.744 3.45-.02 5.555-1.86 1.583-1.383 3.217-3.518 4.693-6.077 1.406-2.44 2.415-4.9 2.84-6.969.585-2.837.203-5.124-1.102-5.876-1.252-.722-3.298.03-5.366 1.83C10.92 4.568 9.197 6.74 7.76 9.231m.891 4.378C7.264 11.215 6.285 8.744 5.879 6.67c-.451-2.305-.152-4.043.602-4.479.802-.465 2.577.198 4.448 1.859 1.49 1.322 3.052 3.34 4.411 5.689 1.429 2.467 2.42 4.848 2.804 6.785.24 1.213.274 2.31.115 3.167-.143.77-.43 1.284-.785 1.49-.756.437-2.373-.132-4.117-1.633-1.605-1.38-3.302-3.511-4.706-5.937m-.887.514c1.459 2.52 3.226 4.74 4.925 6.2 2.039 1.755 4.052 2.463 5.298 1.742 1.287-.745 1.705-2.999 1.162-5.742-.408-2.061-1.441-4.543-2.922-7.1-1.41-2.437-3.039-4.54-4.618-5.942C9.443 1.36 7.271.548 5.967 1.303c-1.25.724-1.62 2.873-1.094 5.563.429 2.193 1.45 4.769 2.891 7.258"
                                    />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Next.js</title>
                                    <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Tailwindcss</title>
                                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                                </svg>
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Bootstrap</title>
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="transition-on-theme-change my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
                        <div className="flex w-full flex-col py-1 pl-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="mb-1 font-segoe-bold text-xl capitalize xl:text-2xl">
                                databases
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <svg
                                    className="h-12 w-12 rounded-md fill-[#222831] dark:fill-[#DDDDDD]"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mongodb</title>
                                    <path d="M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-.469-.661-.974-1.911-.974-1.911-.005.026-.005.042-.01.068v.016c0 .021-.005.031-.005.052v.021h-.005v.067h-.005c0 .01 0 .026-.005.031v.031c0 .01 0 .021-.005.026v.026c0 .016 0 .031-.005.042v.005a.32.32 0 0 1-.01.068v.01c-.005.005-.005.01-.005.016v.021h-.005v.031h-.005v.021h-.01v.031h-.005V.61h-.005v.021h-.005v.021h-.005v.021h-.005v.021h-.005V.71h-.005v.021h-.005v.021h-.005c-.005 0-.005.005-.005.005v.01l-.005.01c0 .01-.005.021-.01.031-.005.005-.005.005-.005.01v.01h-.005v.01h-.01v.026h-.01V.88h-.005v.005h-.005v.01h-.005v.016h-.005v.01h-.01v.016h-.005v.01h-.005v.01h-.005v.016h-.005v.01h-.005v.005h-.005v.01h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.005h-.005v.01h-.005v.005h-.005v.016h-.01v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.01c-.005 0-.005.005-.005.005v.005h-.005l-.016.026s-.01.01-.01.016c-.005 0-.005.005-.005.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.005h-.005v.015h-.005v.005h-.005v.005h-.005v.01h-.005v-.01h-.01v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.016h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.01h-.005v.005h-.005v.005h-.005v.01h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.005c-.005 0-.005.005-.005.005l-.005.005-.005.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005l-.01.01v.005c-.01.005-.01.01-.021.021 0 0-.01.01-.016.01-.016.01-.036.031-.052.047-.01.005-.021.016-.031.021-.021.021-.042.036-.063.052-.031.031-.063.052-.099.083h-.005l-.245.214h-.005c-.224.198-.49.453-.792.755l-.026.026c-1.813 1.875-4.672 5.786-4.969 12.104-.031.521-.026 1.031.005 1.526v.01c.146 2.49.927 4.615 1.906 6.344.385.688.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37.589 1.359.536 3.703.536 3.703l.859.286s-.177-2.266.068-3.365c.078-.339.255-.63.464-.88.146-.099.563-.401 1.063-.859.026-.026.042-.047.063-.073 2.026-1.891 5.813-6.547 4.516-14.13z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
