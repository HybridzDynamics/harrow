import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import libraryImage from "@/assets/library.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from academics to character development."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We foster a caring environment where every individual is valued and supported."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong relationships and work together to achieve common goals."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new ideas and technologies to enhance the learning experience."
    }
  ];

  const leadership = [
    {
      name: "Ryan Lauren",
      position: "Leading Governor",
     
    },
    {
      name: "Jaycee Lauren",
      position: "Executive Headteacher",
     
    },
    {
      name: "William Oyston",
      position: "Headteacher",
      
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Harrow Academy</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Committed to educational excellence and nurturing the leaders of tomorrow through innovative teaching and holistic development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-primary">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide a comprehensive, innovative educational experience that empowers students to become confident, 
                    creative, and responsible global citizens while fostering a lifelong love of learning.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-secondary">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be a leading educational institution that transforms lives through excellence in teaching, 
                    character development, and community engagement, preparing students for success in an ever-changing world.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 animate-scale-in">
              <img src={classroomImage} alt="Students in classroom" className="rounded-lg shadow-elegant hover-lift" />
              <img src={libraryImage} alt="School library" className="rounded-lg shadow-elegant hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our school community toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{leader.name}</h3>
                  <p className="text-secondary font-medium mb-3">{leader.position}</p>
                  <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-primary">Our History</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2025, Harrow Academy began as a small institution with a big vision: 
                to create an educational environment where every student could reach their full potential. 
                From our humble beginnings with just 50 students, we have grown into a thriving community of over 500 students.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we have continuously evolved our programs and facilities to meet the changing needs 
                of our students and society. Our commitment to excellence has earned us recognition as one of the 
                leading secondary schools in the region.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to build on our legacy of educational excellence, preparing students not just 
                for academic success, but for meaningful lives as engaged global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;