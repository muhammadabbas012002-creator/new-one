import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ahmed Al-Rashid",
        location: "Riyadh, Saudi Arabia",
        visa: "Student Visa - Canada",
        rating: 5,
        content:
            "MADZ Consultant made my dream of studying in Canada a reality. Their team handled everything from university selection to visa approval. Highly professional and always available to answer questions!",
        avatar: "A",
    },
    {
        name: "Fatima Khan",
        location: "Jeddah, Saudi Arabia",
        visa: "Tourist Visa - Japan",
        rating: 5,
        content:
            "I was worried about the complex Japan visa process, but MADZ made it so simple. Got my visa approved in just 2 weeks! Their travel planning service was an added bonus.",
        avatar: "F",
    },
    {
        name: "Mohammed Rahman",
        location: "Dammam, Saudi Arabia",
        visa: "Work Visa - Australia",
        rating: 5,
        content:
            "After two failed attempts elsewhere, MADZ helped me get my Australian work visa approved. Their expertise in documentation and SOP writing was incredible. Thank you team!",
        avatar: "M",
    },
    {
        name: "Priya Sharma",
        location: "Riyadh, Saudi Arabia",
        visa: "Student Visa - UK",
        rating: 5,
        content:
            "The best immigration consultants in Saudi Arabia! They guided me through the entire UK university admission and visa process. Very transparent with fees and timeline.",
        avatar: "P",
    },
    {
        name: "Ali Hassan",
        location: "Mecca, Saudi Arabia",
        visa: "Business Visa - USA",
        rating: 5,
        content:
            "Needed a US business visa urgently for a conference. MADZ expedited the entire process and I received my visa in record time. Their WhatsApp support is fantastic!",
        avatar: "A",
    },
    {
        name: "Sarah Williams",
        location: "Riyadh, Saudi Arabia",
        visa: "Family Visit Visa - Canada",
        rating: 5,
        content:
            "MADZ helped my parents visit me in Canada. The process was smooth and their team kept us updated at every step. Will definitely use their services again.",
        avatar: "S",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Join thousands of satisfied clients who achieved their
                        immigration goals with MADZ Consultant.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border relative"
                            style={{
                                borderColor: "hsl(var(--border))",
                            }}
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-accent text-accent"
                                        />
                                    ),
                                )}
                            </div>

                            {/* Content */}
                            <p className="text-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.location}
                                    </div>
                                    <div className="text-xs text-primary font-medium mt-1">
                                        {testimonial.visa}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-8 flex-wrap justify-center">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {["A", "F", "M", "P"].map((letter, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-sm font-bold border-2 border-background"
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                <strong className="text-foreground">
                                    5,000+
                                </strong>{" "}
                                Happy Clients
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-accent text-accent"
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                <strong className="text-foreground">
                                    4.9/5
                                </strong>{" "}
                                Average Rating
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
