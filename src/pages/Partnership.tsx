import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, BookOpen, Heart, Briefcase, GraduationCap } from "lucide-react";

const Partnership = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Partnership & Leadership
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet our dedicated leadership team and discover partnership opportunities at Lincoln Castle Academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-4"
            >
              Our Leadership Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Dedicated professionals committed to excellence in education and student development
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Ms.J</CardTitle>
                  <CardDescription className="text-lg">School Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Leading Harrow Academy with vision and dedication to educational excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">William Oyston</CardTitle>
                  <CardDescription className="text-lg">executive Headteacher</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Creator of the School Comms system, providing innovative management solutions and resources.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Mr F Sears</CardTitle>
                  <CardDescription className="text-lg">Headteacher</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Ensuring academic excellence and fostering an environment where every student can thrive.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* School Comms System */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
              School Comms Management System
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Harrow is powered by the innovative School Comms system, designed by our Leading Governor William Oyston. 
              This comprehensive management platform provides the formats and resources we need to deliver exceptional education 
              and support services to our students and community.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Innovation in Education Management
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Lincoln Castle Academy focuses on striving to make children the best they can be in today's diverse society. 
              We believe in nurturing every student's potential and preparing them for success in an interconnected world.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Heart className="w-16 h-16 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Current Recruitment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
              Join Our Team
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Leadership Positions</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        MLT Positions - Head of Departments
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        Head of Years
                      </li>
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Apply for Leadership Roles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-8 h-8 text-secondary" />
                      <CardTitle className="text-2xl">Teaching Staff</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Teaching Staff (Multiple Positions)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        SEND Staff (Special Educational Needs)
                      </li>
                    </ul>
                    <Button className="w-full mt-6" variant="default">
                      Apply for Teaching Positions
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to make a difference in education? Join our dedicated team at Lincoln Castle Academy.
              </p>
              <Button size="lg" className="px-8">
                View All Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;