"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Countries", href: "#countries" },
        { name: "About", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b"
            style={{ borderColor: "hsl(var(--border))" }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center overflow-hidden">
                            <Image
                                src="/logo.jpg"
                                alt="MADZ Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-foreground leading-tight">
                                MADZ
                            </span>
                            <span className="text-xs text-muted-foreground leading-tight">
                                Consultant
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+966595403769</span>
                        </Button>
                        <Button
                            variant="whatsapp"
                            size="default"
                            className="gap-2"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/966595403769",
                                    "_blank",
                                )
                            }
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>WhatsApp</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className="lg:hidden py-4 border-t animate-fade-in"
                        style={{ borderColor: "hsl(var(--border))" }}
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 px-4">
                                <Button
                                    variant="outline"
                                    className="w-full gap-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+966 595 403 769</span>
                                </Button>
                                <Button
                                    variant="whatsapp"
                                    className="w-full gap-2"
                                    onClick={() =>
                                        window.open(
                                            "https://wa.me/966595403769",
                                            "_blank",
                                        )
                                    }
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp Consultation</span>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
