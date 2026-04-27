import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/logo.jpg"
                                    alt="MADZ Logo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-tight">
                                    MADZ
                                </span>
                                <span className="text-xs text-muted-foreground leading-tight">
                                    Consultant
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your trusted partner for visa and immigration
                            services. We simplify your journey to global
                            opportunities with expertise and dedication.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/1GkxWpqY9W/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/madz_visa.service?igsh=YWYzenlzM24xNmRq&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-abbas-b648b2358"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                "Home",
                                "Services",
                                "Countries",
                                "About Us",
                                "Testimonials",
                                "Contact",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(" ", "")}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Our Services</h4>
                        <ul className="space-y-3">
                            {[
                                "Student Visa",
                                "Tourist Visa",
                                "Business Visa",
                                "Work Visa",
                                "Travel Planning",
                                "SOP Writing",
                            ].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                    Manfuha Al Jadidah Riyadh, <br /> Saudi
                                    Arabia 12654
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a
                                    href="tel:+966595403769"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +966 595 403 769
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a
                                    href="mailto:abbas.contactme@gmail.com"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    abbas.contactme@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="w-5 h-5 text-accent" />
                                <a
                                    href="https://wa.me/966595403769"
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                >
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} MADZ Consultant. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
