import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/FeatureCard"
import HowItWorksStep from "@/components/HowItWorksStep"
import { Calendar, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from '@/assets/hero-events.jpg';
import { useAuth } from "@/hooks/useAuth"
import { features, steps } from "@/constants/landing"

const Index = () => {
    const { isAuthenticated } = useAuth()

    return (
        <Layout>
            <SEO 
                title="EventHub - Discover Amazing Events Near You"
                description="Join thousands of people discovering and attending incredible events. From music festivals to tech conferences, find your next adventure with EventHub."
                keywords="events, concerts, festivals, conferences, tickets, networking, entertainment, music, tech, discover events"
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-hero min-h-[calc(100vh)] flex items-center">
                {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${heroImage})` }} /> */}
                <img
                    src={heroImage}
                    alt="Discover Amazing Events"
                    loading="eager"
                    fetchPriority="high" 
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-90" />
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-float">
                            Discover Amazing                                
                            <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2">
                                Events Near You
                            </span>
                        </h1>    
                        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join thousands of people discovering and attending incredible events. 
                            From music festivals to tech conferences, find your next adventure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/events">
                                <Button variant="accent" size="xl" className="w-full sm:w-auto animate-pulse-glow">
                                    <Calendar className="mr-2 h-5 w-5" /> Explore Events 
                                </Button>
                            </Link>
                            {!isAuthenticated && (
                                <Link to="/register">
                                    <Button variant="outline" size="xl" className="w-full sm:w-auto bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                                        Create Account
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Why <span className="bg-gradient-primary bg-clip-text text-transparent">EventHub?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover the best events near you with our innovative features
                        </p>
                    </div>
                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                gradientType={feature.gradientType}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gradient-to-b from-background to-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            How It <span className="bg-gradient-accent bg-clip-text text-transparent">Works</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            In three simple steps to your perfect event
                        </p>
                    </div>

                    {/* How It Works Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {steps.map((step) => (
                            <HowItWorksStep
                                key={step.stepNumber}
                                stepNumber={step.stepNumber}
                                title={step.title}
                                description={step.description}
                                gradientType={step.gradientType}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/events">
                            <Button variant="accent" size="lg" className="group">
                                Discover Events Now
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Index