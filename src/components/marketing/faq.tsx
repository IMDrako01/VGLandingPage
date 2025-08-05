import Container from "../global/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "What exactly is ViralGenie?",
            answer: "ViralGenie is an AI 24/7 growth coach specifically built for small founders. It gives daily viral post ideas, platform specific content & daily strategies, so you can grow and get more users."
        },
        {
            question: "Who is this for?",
            answer: "ViralGenie is specifically built for small founders, solopreneurs, Indie hackers, struggling with marketing and user acquisition. No audience? No problem. Just bring your product, It will get you customers."
        },
        {
            question: "How is it different from ChatGPT & other AI tools?",
            answer: "It is NOT another AI post generator giving you generic content. ViralGenie is your personal Growth Coach with a decade of experience — it studies your business, builds a strategy, creates a 30-day content plan, and evolves with your results."
        },
        {
            question: "Will it actually help me grow?",
            answer: "It will save you 10+ hours a week. Most users go from spending hours on content to just 30 minutes per day, so you can focus on building, not guesswork."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. After cancellation, you'll retain access to the product until the end of your billing cycle."
        },
        {
            question: "I have another question?",
            answer: "We are here to help! You can reach us at support@viralgenie.io for anything. We typically respond within 12 hours on weekdays."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Still Have Questions?
                    </h2>
                </div>
            </Container>

            <Container>
                <div className="max-w-4xl mx-auto w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default FAQ; 