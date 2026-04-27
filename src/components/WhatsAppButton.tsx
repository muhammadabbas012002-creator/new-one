import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/966595403769"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_49%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Chat with us!
            </span>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_49%)] animate-ping opacity-30" />
        </a>
    );
};

export default WhatsAppButton;
