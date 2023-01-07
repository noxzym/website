import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { NextSeo } from "next-seo";

export default function ContactPage() {
    return (
        <>
            <NextSeo
                title="Contact | Noxzym"
                canonical="https://noxzym.my.id/contact"
                openGraph={{
                    url: "https://noxzym.my.id/contact",
                    title: "Contact | Noxzym"
                }}
            />
            <Container className="relative flex w-full flex-col items-center justify-center gap-3 pt-24 pb-10 text-[#222831] dark:text-[#DDDDDD] landscape:pb-8 landscape:pt-16 lg:landscape:pt-32">
                <Contact />
            </Container>
        </>
    );
}
