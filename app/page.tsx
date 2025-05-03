import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-6 bg-background text-foreground">
      <div className="max-w-3xl space-y-8">
        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Your AI-Powered<br />
          <span className="text-primary">Fitness Companion</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg sm:text-xl text-muted-foreground">
          Get personalized workouts and meal plans in seconds. No guesswork, just results — tailored to your body and your goals.
        </p>

        {/* STATS */}
        <div className="flex justify-center flex-wrap gap-8 pt-4 text-sm font-mono">
          <div className="flex flex-col items-center">
            <span className="text-2xl text-primary font-semibold">10K+</span>
            <span className="text-muted-foreground uppercase tracking-wide">Plans Generated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-primary font-semibold">2 mins</span>
            <span className="text-muted-foreground uppercase tracking-wide">Avg. Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-primary font-semibold">99%</span>
            <span className="text-muted-foreground uppercase tracking-wide">User Satisfaction</span>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Button
            size="lg"
            asChild
            className="bg-primary px-8 py-6 text-lg font-medium"
          >
            <Link href="/generate-program" className="flex items-center font-mono">
              Create My Plan
              <ArrowRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <UserPrograms/>
    </section>
  );
};

export default HomePage;
