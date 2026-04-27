import { Button } from "@/components/ui/button";

const countries = [
    {
        name: "United States",
        flag: "🇺🇸",
        visaTypes: ["Student", "Tourist", "Business", "Work"],
        popular: true,
    },
    {
        name: "Canada",
        flag: "🇨🇦",
        visaTypes: ["Student", "Tourist", "Work", "PR"],
        popular: true,
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧",
        visaTypes: ["Student", "Tourist", "Business"],
        popular: true,
    },
    {
        name: "Australia",
        flag: "🇦🇺",
        visaTypes: ["Student", "Tourist", "Work", "PR"],
        popular: true,
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        visaTypes: ["Student", "Work", "Business"],
        popular: false,
    },
    {
        name: "Japan",
        flag: "🇯🇵",
        visaTypes: ["Tourist", "Business", "Work"],
        popular: false,
    },
    {
        name: "Turkey",
        flag: "🇹🇷",
        visaTypes: ["Tourist", "Business"],
        popular: false,
    },
    {
        name: "New Zealand",
        flag: "🇳🇿",
        visaTypes: ["Student", "Tourist", "Work"],
        popular: false,
    },
    {
        name: "France",
        flag: "🇫🇷",
        visaTypes: ["Student", "Tourist", "Business"],
        popular: false,
    },
    {
        name: "UAE",
        flag: "🇦🇪",
        visaTypes: ["Tourist", "Business", "Work"],
        popular: false,
    },
    {
        name: "Singapore",
        flag: "🇸🇬",
        visaTypes: ["Tourist", "Business", "Work"],
        popular: false,
    },
    {
        name: "Malaysia",
        flag: "🇲🇾",
        visaTypes: ["Student", "Tourist", "Work"],
        popular: false,
    },
];

const CountriesSection = () => {
    return (
        <section id="countries" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                        Global Destinations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Select Your Dream Country
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We provide visa services to 50+ countries worldwide.
                        Choose your destination and let us handle the rest.
                    </p>
                </div>

                {/* Popular Countries */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {countries
                        .filter((c) => c.popular)
                        .map((country) => (
                            <div
                                key={country.name}
                                className="relative group bg-card rounded-2xl p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-card overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                    Popular
                                </div>

                                <div className="text-5xl mb-4">
                                    {country.flag}
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {country.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {country.visaTypes.map((type) => (
                                        <span
                                            key={type}
                                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() =>
                                        document
                                            .querySelector("#contact")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                    }
                                >
                                    Apply Now
                                </Button>
                            </div>
                        ))}
                </div>

                {/* Other Countries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {countries
                        .filter((c) => !c.popular)
                        .map((country) => (
                            <div
                                key={country.name}
                                className="group bg-card rounded-xl p-4 border transition-all duration-300 text-center cursor-pointer hover:shadow-soft"
                                style={{ borderColor: "hsl(var(--border))" }}
                                onClick={() =>
                                    document
                                        .querySelector("#contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                <div className="text-3xl mb-2">
                                    {country.flag}
                                </div>
                                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {country.name}
                                </div>
                            </div>
                        ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        Don't see your destination? We cover 50+ countries!
                    </p>
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() =>
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Contact Us for More Countries
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CountriesSection;
