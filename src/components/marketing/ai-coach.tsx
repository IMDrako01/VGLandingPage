import { MagicCard } from "../ui/magic-card";
import Container from "../global/container";
import { Bot, TrendingUp, CalendarCheck } from "lucide-react";
import Image from "next/image";

const AiCoach = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">Not Just an AI.</h2>
          <p className="text-base md:text-lg text-accent-foreground/80 max-w-xl mx-auto">
            Meet Your AI Growth Coach, Available 24/7
          </p>
        </div>
      </Container>
      <Container>
        <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg max-w-4xl mx-auto w-full flex flex-col md:flex-row items-stretch overflow-hidden mb-8">
          <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Create Your Growth Plan</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Tell the Coach your goals — it gives you a crystal-clear 30 day roadmap with actions built just for your niche, time, and audience.<br />
            </p>
            <a href="https://app.viralgenie.io" className="inline-block w-fit px-6 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-orange-500 hover:text-white transition text-base md:text-lg">Get My Plan</a>
          </div>
          <div className="flex-1 flex items-center justify-center md:border-l border-border/30 p-8 md:p-10 bg-transparent">
            <Image
              src="/images/aicoach.png"
              alt="AI Coach Demo"
              width={240}
              height={480}
              className="rounded-xl border border-border/40 shadow-lg object-contain w-auto h-72 md:h-96"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/40 text-orange-400 text-xs font-semibold uppercase tracking-wide">
                <CalendarCheck className="w-4 h-4 mr-1" /> Daily High-Impact Tasks
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Each day, get one high-impact move that drives real traction.<br />
              "Post this. DM them. Tweak that."<br />
              It's not theory — it's execution that compounds.
            </p>
            <div className="mt-auto">
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/40 text-orange-400 text-xs font-semibold uppercase tracking-wide">
                <TrendingUp className="w-4 h-4 mr-1" /> Real-Time Insights
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The Coach daily tracks your socials and business, tells you what's working and what's falling flat — and why. So you're not just throwing content at a wall
            </p>
            <div className="mt-auto">
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiCoach; 