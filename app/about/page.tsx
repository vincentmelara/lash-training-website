"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Sparkles } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Master Instructor",
    bio: "With over 10 years of experience in the lash industry, Sarah founded Luxe Lash Academy to share her passion and expertise with aspiring lash artists.",
    image: "/instructor-sarah-johnson.jpg",
  },
  {
    name: "Emily Chen",
    role: "Senior Instructor",
    bio: "Emily specializes in volume techniques and has trained hundreds of successful lash artists. Her attention to detail and patient teaching style make her a student favorite.",
    image: "/instructor-emily-chen.jpg",
  },
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in training and certification, ensuring our graduates are industry-ready.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our love for the art of lash extensions drives us to continuously improve and innovate our teaching methods.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build lasting relationships with our students, providing ongoing support and mentorship throughout their careers.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We stay ahead of industry trends, incorporating the latest techniques and products into our curriculum.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-secondary/30 via-background to-accent/10">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 font-serif text-5xl font-bold text-balance text-foreground md:text-6xl">
              About Luxe Lash Academy
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Empowering beauty professionals through world-class lash extension training since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Luxe Lash Academy was born from a simple vision: to elevate the art of lash extensions through
                  exceptional education and unwavering support for aspiring artists.
                </p>
                <p>
                  Founded in 2015 by master lash artist Sarah Johnson, our academy has grown from a small studio to a
                  premier training destination, graduating over 500 certified lash artists who now thrive in their own
                  successful businesses.
                </p>
                <p>
                  We believe that quality education should be accessible, comprehensive, and inspiring. Every course we
                  offer is designed not just to teach techniques, but to instill confidence, creativity, and
                  professionalism in our students.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {[
                { number: "500+", label: "Graduates" },
                { number: "10+", label: "Years Experience" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="mb-2 font-serif text-5xl font-bold text-accent">{stat.number}</p>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do at Luxe Lash Academy.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                      <value.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">Meet Our Instructors</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Learn from experienced professionals who are passionate about your success.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-80 w-full bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="mb-1 text-2xl font-semibold text-card-foreground">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-accent">{member.role}</p>
                    <p className="leading-relaxed text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
