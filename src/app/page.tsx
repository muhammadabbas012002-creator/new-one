"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export default function Home() {
    return (
        <main>
            <Toaster />
            <Sonner />
            <HeroSection />
            <ServicesSection />
            <CountriesSection />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
    );
}
// ...existing code...
