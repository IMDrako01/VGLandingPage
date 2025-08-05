import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `ViralGenie`,
    description = `Today's world requires founders to build an audience. No one buys from strangers anymore.
ViralGenie is an AI 24/7 Growth Coach specifically built for Small founders.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/iconcolor.png",
        },
    ],
    noIndex = false,
    keywords = [
        "viralgenie",
        "viral",
        "genie",
        "viralgenie.io",
        "AI marketing automation",
        "social media marketing",
        "content generation",
        "marketing analytics",
        "campaign management",
        "multilingual marketing",
        "AI copywriting",
        "marketing workflow",
        "performance tracking",
        "digital marketing tools",
        "AI growth coach",
        "founder marketing",
        "solopreneur tools",
        "audience building",
        "startup growth",
        "viral content",
        "personal branding",
        "twitter growth",
        "linkedin growth",
        "indie hacker",
        "bootstrapper",
        "growth hacking",
        "daily growth tasks",
        "AI content ideas",
        "automated marketing",
        "AI social media",
        "founder audience",
        "build in public",
        "creator economy",
        "startup marketing",
        "viralgenie platform",
        "viralgenie app",
        "viralgenie AI"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://viralgenie.io");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
        openGraph: {
            images: [
                {
                    url: "/images/banner.jpeg",
                    width: 1200,
                    height: 630,
                    alt: "ViralGenie Banner"
                },
                {
                    url: "/icons/iconcolor.png",
                    width: 256,
                    height: 256,
                    alt: "ViralGenie Logo"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            images: [
                {
                    url: "/images/banner.jpeg",
                    width: 1200,
                    height: 630,
                    alt: "ViralGenie Banner"
                },
                {
                    url: "/icons/iconcolor.png",
                    width: 256,
                    height: 256,
                    alt: "ViralGenie Logo"
                }
            ]
        }
    };
};