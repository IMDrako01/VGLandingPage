import Link from "next/link";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start text-center md:text-left">
                {/* Logo and description */}
                <div className="flex flex-col items-center md:items-start justify-start">
                    <div className="flex items-center gap-2">
                        <img src="/icons/iconcolor.png" alt="App Icon" className="w-auto h-5" />
                        <span className="text-base md:text-lg font-medium text-foreground">
                            ViralGenie
                        </span>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">
                        Your 24/7 AI Growth Coach.
                    </p>
                </div>

                {/* Product */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-base font-medium text-foreground">
                        Product
                    </h3>
                    <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                        <li className="mt-2">
                            <Link href="/#features" className="link hover:text-foreground transition-all duration-300">
                                Features
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/#pricing" className="link hover:text-foreground transition-all duration-300">
                                Pricing
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/#faq" className="link hover:text-foreground transition-all duration-300">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* About */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-base font-medium text-foreground">
                        About
                    </h3>
                    <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                        <li>
                            <Link href="/demo" className="link hover:text-foreground transition-all duration-300">
                                Demo
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/policy" className="link hover:text-foreground transition-all duration-300">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/terms" className="link hover:text-foreground transition-all duration-300">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full relative mt-12 lg:mt-20 flex items-center justify-center">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0 text-center">
                    &copy; {new Date().getFullYear()} ViralGenie. All rights reserved.
                </p>
            </div>
        </footer>
    )
};

export default Footer;
