import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";
import classroomImage from "@/assets/classroom.jpg";
import libraryImage from "@/assets/library.jpg";

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Excellence in Education",
      description: "Comprehensive curriculum designed for academic success and personal growth."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Dedicated teachers committed to nurturing each student's potential."
    },
    {
      icon: Trophy,
      title: "Achievement Focus",
      description: "Celebrating academic achievements and extracurricular excellence."
    },
    {
      icon: Star,
      title: "Holistic Development",
      description: "Building character, leadership skills, and lifelong learning habits."
    }
  ];

  const stats = [
    { number: "50+", label: "Students" },
    { number: "25+", label: "Teachers" },
    { number: "99%", label: "Success Rate" },
    { number: "12+", label: "Programs" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Welcome to
            <span className="block gradient-text text-transparent bg-gradient-hero bg-clip-text">
               Harrow Academy 
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Welcome to Harrow Academy Academy Secondary, a place where students thrive in our school prepared to be sent out to our amazing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="golden" size="lg" className="text-lg px-8 py-4">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Choose  Harrow Academy Academy?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our school is run by an amazing team of Executive Leadership starting with Jaycee Lauren, under him is an amazing group of Chair of Governors. They help and support the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">About Our School</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Harrow Academy is sponsored by School Comms, a system run by the Chair of Governors. 
                It's using a bot and documents to help run the school, providing innovative management solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join Harrow Academy, the place where students thrive today! Find out more by joining us.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
              <img src={classroomImage} alt="Modern Classroom" className="rounded-lg shadow-elegant hover-lift" />
              <img src={libraryImage} alt="School Library" className="rounded-lg shadow-elegant hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards an exceptional educational journey. Join 🐦‍⬛ Harrow Academy Academy today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://discord.gg/uDJKAKCdfS" target="_blank" rel="noopener noreferrer">
                Join Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;