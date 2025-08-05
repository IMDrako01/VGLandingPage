import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Steps = () => {
    const steps = [
        {
            number: "1",
            title: "Connect Your Socials & Website",
            description: "Connect your social media and product website. ViralGenie scans your profiles and business, then builds a tailored foundation for your growth."
        },
        {
            number: "2", 
            title: "AI Coach Builds 30 Day Roadmap",
            description: "AI Coach Generates 30 day Roadmap & organizes all your content into a monthly calendar so you know exactly what, where & when to post."
        },
        {
            number: "3",
            title: "Post. Go Viral. Repeat.",
            description: "You will get daily viral content ideas, post scripts, and proven growth strategies for your niche and target audience that actually get you customers. Users see visible results in under 7 days."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Get more customers in 3 steps
                    </h2>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                {steps.map((step, index) => (
                    <Container key={index} delay={0.1 + index * 0.1}>
                        <MagicCard
                            gradientFrom="#fb923c"
                            gradientTo="#ea580c"
                            gradientColor="rgba(249,115,22,0.1)"
                            className="p-6 lg:p-8 h-full"
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-base text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    );
};

export default Steps; 