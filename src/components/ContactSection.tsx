"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Clock,
    Send,
    CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        address: "",
        message: "",
    });

    const visaTypes = [
        "Student Visa",
        "Tourist Visa",
        "Business Visa",
        "Work Visa",
        "Family Visit Visa",
        "Permanent Residency",
        "Other",
    ];

    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        "Japan",
        "New Zealand",
        "France",
        "Turkey",
        "Other",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                toast({
                    title: "Inquiry Submitted Successfully!",
                    description: "Our team will contact you within 24 hours.",
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    visaType: "",
                    address: "",
                    message: "",
                });
            } else {
                toast({
                    title: "Submission Failed",
                    description:
                        data.error ||
                        "There was a problem sending your inquiry. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (err) {
            toast({
                title: "Submission Failed",
                description:
                    "There was a problem sending your inquiry. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Start Your Visa Journey Today
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Fill out the form below and our expert consultants will
                        get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                            <h3 className="text-2xl font-bold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">
                                            Office Address
                                        </div>
                                        <div className="text-primary-foreground/80 text-sm">
                                            Manfuha Al Jadidah Riyadh,
                                            <br />
                                            Saudi Arabia 12654
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">
                                            Phone Number
                                        </div>
                                        <a
                                            href="tel:+966595403769"
                                            className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                        >
                                            +966595403769
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">
                                            Email Address
                                        </div>
                                        <a
                                            href="mailto:abbas.contactme@gmail.com"
                                            className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                        >
                                            abbas.contactme@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">
                                            Working Hours
                                        </div>
                                        <div className="text-primary-foreground/80 text-sm">
                                            Sunday - Thursday: 9AM - 6PM
                                            <br />
                                            Saturday: 10AM - 2PM
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                    onClick={() =>
                                        window.open(
                                            "https://wa.me/966595403769",
                                            "_blank",
                                        )
                                    }
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: CheckCircle,
                                    text: "Free Consultation",
                                },
                                { icon: Clock, text: "24/7 Response" },
                            ].map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
                                >
                                    <item.icon className="w-5 h-5 text-accent" />
                                    <span className="text-sm font-medium text-foreground">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-card rounded-2xl p-8 shadow-card border"
                            style={{ borderColor: "hsl(var(--border))" }}
                        >
                            <h3 className="text-xl font-bold text-foreground mb-6">
                                Send Us an Inquiry
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Full Name *
                                    </label>
                                    <Input
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            handleChange("name", e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            handleChange(
                                                "email",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Phone Number *
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="+966 XXX XXX XXX"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            handleChange(
                                                "phone",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Destination Country *
                                    </label>
                                    <Select
                                        value={formData.country}
                                        onValueChange={(value) =>
                                            handleChange("country", value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((country) => (
                                                <SelectItem
                                                    key={country}
                                                    value={country}
                                                >
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Visa Type *
                                    </label>
                                    <Select
                                        value={formData.visaType}
                                        onValueChange={(value) =>
                                            handleChange("visaType", value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select visa type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {visaTypes.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Address
                                    </label>
                                    <Input
                                        placeholder="Your current address"
                                        value={formData.address}
                                        onChange={(e) =>
                                            handleChange(
                                                "address",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <Textarea
                                        placeholder="Tell us about your visa requirements..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) =>
                                            handleChange(
                                                "message",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="cta"
                                size="lg"
                                className="w-full mt-6 gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Submit Inquiry
                                    </>
                                )}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center mt-4">
                                By submitting this form, you agree to our
                                privacy policy. We'll never share your
                                information.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
