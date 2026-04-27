"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const HeroSection = () => {
    const highlights = [
        "98% Visa Approval Rate",
        "15+ Years Experience",
        "50+ Countries Covered",
    ];

    return (
        <section
            id="home"
            className="relative min-h-[80vh] flex items-center md:py-20 md:pt-32 py-10"
        >
            {/* 🎥 Background Video */}
<div className="absolute inset-0 z-0">
    <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
    >
        <source src="/video.mp4" type="video/mp4" />
    </video>

    {/* Overlay (keep your gradient style) */}
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
</div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-primary-foreground">
                            Saudi Arabia's Trusted Immigration Partner
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Your Gateway to{" "}
                        <span className="text-gradient">
                            Global Opportunities
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p
                        className="text-lg md:text-xl text-muted max-w-2xl animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Simplifying immigration with expertise. We handle
                        student visas, tourist visas, business visas, and
                        complete travel planning for your seamless journey
                        worldwide.
                    </p>

                    {/* Highlights */}
                    <div
                        className="flex flex-wrap gap-4 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 text-primary-foreground/90"
                            >
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-4 animate-fade-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <Button
                            variant="cta"
                            size="xl"
                            onClick={() =>
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="gap-2"
                        >
                            Book a Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="whatsapp"
                            size="xl"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/966595403769",
                                    "_blank",
                                )
                            }
                            className="gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </Button>
                    </div>

                    {/* Floating Stats */}
                    <div className="w-fit hidden lg:flex gap-8 bg-background/95 backdrop-blur-md rounded-2xl shadow-card px-8 py-6">
                        {[
                            { value: "5,000+", label: "Successful Visas" },
                            { value: "50+", label: "Countries" },
                            { value: "15+", label: "Years Experience" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`text-center ${index !== 0 ? "border-l pl-8" : ""}`}
                                style={
                                    index !== 0
                                        ? { borderColor: "hsl(var(--border))" }
                                        : {}
                                }
                            >
                                <div className="text-2xl font-bold text-primary">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
