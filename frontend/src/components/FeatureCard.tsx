import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
    gradientType?: "primary" | "accent"
}

const FeatureCard = ({ icon: Icon, title, description, gradientType = "primary" }: FeatureCardProps) => {
    return (
        <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-glow">
            <CardHeader>
                <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    gradientType === "primary" 
                        ? "bg-gradient-primary" 
                        : "bg-gradient-accent"
                )}>
                    <Icon className={cn(
                        "h-6 w-6",
                        gradientType === "primary" 
                            ? "text-primary-foreground" 
                            : "text-accent-foreground"
                    )} />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default FeatureCard

