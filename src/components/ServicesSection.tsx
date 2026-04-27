"use client";

import {
    GraduationCap,
    Plane,
    Briefcase,
    FileText,
    Building,
    Globe,
    HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: GraduationCap,
        title: "Student Visa",
        description:
            "Expert guidance for students seeking education opportunities in USA, UK, Canada, Australia, Europe, and more. We handle everything from university selection to visa approval.",
        features: [
            "University Selection",
            "Document Preparation",
            "Interview Coaching",
        ],
    },
    {
        icon: Plane,
        title: "Tourist Visa",
        description:
            "Hassle-free tourist visa processing for Turkey, Japan, USA, Australia, Canada, New Zealand, and popular Asian & European destinations.",
        features: ["Fast Processing", "Itinerary Planning", "Travel Insurance"],
    },
    {
        icon: Briefcase,
        title: "Business Visa",
        description:
            "Streamlined business visa solutions for entrepreneurs, investors, and professionals looking to expand globally.",
        features: [
            "Business Documentation",
            "Meeting Arrangements",
            "Multi-entry Options",
        ],
    },
    {
        icon: Building,
        title: "Work Visa",
        description:
            "Comprehensive work permit and employment visa services for job seekers targeting international opportunities.",
        features: [
            "Job Market Guidance",
            "Employer Sponsorship",
            "Family Reunification",
        ],
    },
    {
        icon: FileText,
        title: "SOP & Documents",
        description:
            "Professional Statement of Purpose writing and complete documentation services that maximize your approval chances.",
        features: [
            "Custom SOP Writing",
            "Document Review",
            "Apostille Services",
        ],
    },
    {
        icon: HeartHandshake,
        title: "Travel Planning",
        description:
            "End-to-end travel planning including flight booking, hotel reservations, travel insurance, and itinerary design.",
        features: ["Flight Booking", "Hotel Reservations", "Travel Insurance"],
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comprehensive Visa & Immigration Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        From student visas to complete travel planning, we
                        provide end-to-end services tailored to your needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border min-h-[436px] flex flex-col justify-between"
                            style={{
                                borderColor: "hsl(var(--border))",
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-foreground"
                                        >
                                            <Globe className="w-4 h-4 text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                variant="outline"
                                style={{ marginTop: "auto" }}
                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                                onClick={() =>
                                    document
                                        .querySelector("#contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Learn More
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
