"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Jumbotron() {
    const [offsetHeight, setOffsetHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setOffsetHeight(ref.current.offsetHeight);
        }
    }, []);

    return (
        <section className="flex items-center justify-between py-12">
            <div ref={ref} className="flex flex-col gap-4">
                <div>
                    <p className="text-4xl font-semibold">Hello, I am</p>
                    <p className="text-6xl font-bold">Orchitiadi Ismaulana Putra</p>
                    <p className="text-xl font-medium">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        className="text-base font-semibold dark:bg-foreground/5"
                    >
                        <Link href="#">Learn about me</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="text-base font-semibold dark:bg-foreground/5"
                    >
                        <Link href="#">Read my article</Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="text-base font-semibold dark:bg-foreground/5"
                    >
                        <Link href="#">Explore my project</Link>
                    </Button>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-md bg-foreground/10" />
                        Resume
                    </Link>
                    <Link href="#" className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-md bg-foreground/10" />
                        Linkedin
                    </Link>
                    <Link href="#" className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-md bg-foreground/10" />
                        Github
                    </Link>
                </div>
            </div>
            {ref.current && (
                <span
                    className="rounded-2xl dark:bg-foreground/5"
                    style={{
                        height: `${offsetHeight}px`,
                        width: `${offsetHeight}px`
                    }}
                />
            )}
        </section>
    );
}