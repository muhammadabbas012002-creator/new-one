import { Users, Award, Globe, Clock } from "lucide-react";

const AboutSection = () => {
    const stats = [
        { icon: Users, value: "5,000+", label: "Happy Clients" },
        { icon: Award, value: "98%", label: "Success Rate" },
        { icon: Globe, value: "50+", label: "Countries" },
        { icon: Clock, value: "15+", label: "Years Experience" },
    ];

    const team = [
        {
            name: "Muhammad Abbas",
            role: "Founder & CEO",
            description:
                "15+ years in immigration consulting with expertise in student and work visas.",
            avatar: "M",
        },
        {
            name: "Mustafa Aziz",
            role: "Senior Visa Consultant",
            description:
                "Specializes in US, UK, and Canadian visa applications.",
            avatar: "S",
        },
        {
            name: "Ahmad Khan",
            role: "Travel Planning Head",
            description:
                "Expert in complete travel solutions and itinerary planning.",
            avatar: "A",
        },
    ];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                                About MADZ Consultant
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Your Trusted Immigration Partner in Saudi Arabia
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                Founded in Riyadh, MADZ Consultant has been
                                helping thousands of individuals and families
                                achieve their global aspirations since 2009. Our
                                team of certified immigration experts
                                specializes in student visas, tourist visas,
                                business visas, and comprehensive travel
                                planning.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We understand that immigration can be complex
                                and stressful. That's why we provide
                                personalized guidance, transparent processes,
                                and dedicated support at every step of your
                                journey. From document preparation to visa
                                approval, we're with you all the way.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 bg-secondary rounded-xl"
                                >
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Cards */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Meet Our Expert Team
                        </h3>
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft border hover:shadow-card transition-all duration-300"
                                style={{
                                    borderColor: "hsl(var(--border))",
                                }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                                    {member.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-primary font-medium mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Office Location */}
                        <div className="p-6 bg-secondary rounded-xl">
                            <h4 className="font-bold text-foreground mb-2">
                                Our Office
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                123 Business District, Riyadh, Saudi Arabia
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                <strong>Working Hours:</strong> Sun-Thu 9AM-6PM,
                                Sat 10AM-2PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
