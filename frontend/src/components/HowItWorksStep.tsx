import { cn } from "@/lib/utils"

interface HowItWorksStepProps {
    stepNumber: number
    title: string
    description: string
    gradientType?: "primary" | "accent"
}

const HowItWorksStep = ({ stepNumber, title, description, gradientType = "primary" }: HowItWorksStepProps) => {
    return (
        <div className="text-center">
            <div className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow",
                gradientType === "primary" 
                    ? "bg-gradient-primary" 
                    : "bg-gradient-accent"
            )}>
                <span className={cn(
                    "text-3xl font-bold",
                    gradientType === "primary" 
                        ? "text-primary-foreground" 
                        : "text-accent-foreground"
                )}>
                    {stepNumber}
                </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default HowItWorksStep

