"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Clock, Users, Award } from "lucide-react"

const courses = [
  {
    id: "classic",
    title: "Classic Lash Extensions",
    level: "Beginner",
    duration: "1 Day",
    students: "Max 4 students",
    price: "$599",
    description:
      "Perfect for beginners. Learn the fundamentals of classic lash application with one extension per natural lash.",
    features: [
      "Theory and safety protocols",
      "Classic application techniques",
      "Lash mapping and styling",
      "Hands-on practice with live models",
      "Professional starter kit included",
      "Certification upon completion",
    ],
    image: "/classic-eyelash-extensions-training.jpg",
  },
  {
    id: "volume",
    title: "Volume Lash Extensions",
    level: "Intermediate",
    duration: "2 Days",
    students: "Max 4 students",
    price: "$899",
    description:
      "Master the art of volume lashes. Create beautiful, fluffy fans with multiple extensions per natural lash.",
    features: [
      "Advanced fan-making techniques",
      "Volume application methods",
      "Mega volume training",
      "Troubleshooting common issues",
      "Practice on live models",
      "Advanced certification",
    ],
    image: "/volume-eyelash-extensions-training.jpg",
    popular: true,
  },
  {
    id: "hybrid",
    title: "Hybrid Lash Mastery",
    level: "Intermediate",
    duration: "1.5 Days",
    students: "Max 4 students",
    price: "$749",
    description: "Combine classic and volume techniques for a textured, dimensional look that clients love.",
    features: [
      "Hybrid technique fundamentals",
      "Mixing classic and volume",
      "Custom styling approaches",
      "Client consultation skills",
      "Live model practice",
      "Certification included",
    ],
    image: "/hybrid-eyelash-extensions-training.jpg",
  },
  {
    id: "master",
    title: "Master Lash Artist Program",
    level: "Advanced",
    duration: "5 Days",
    students: "Max 3 students",
    price: "$2,499",
    description:
      "Comprehensive training covering all techniques. Become a certified master lash artist with business training included.",
    features: [
      "All classic, volume, and hybrid techniques",
      "Advanced troubleshooting",
      "Business setup and marketing",
      "Client retention strategies",
      "Extensive hands-on practice",
      "Master certification + business toolkit",
    ],
    image: "/professional-lash-artist-training-studio.jpg",
  },
]

export default function CoursesPage() {
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
              Our Training Programs
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choose from our comprehensive range of certification courses designed to take you from beginner to master
              lash artist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative flex h-full flex-col overflow-hidden">
                  {course.popular && (
                    <Badge className="absolute right-4 top-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>
                  )}

                  <div className="relative h-64 w-full overflow-hidden bg-muted">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="font-serif text-2xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Certified
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between border-t border-border/40 pt-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="font-serif text-3xl font-bold text-foreground">{course.price}</p>
                    </div>
                    <Button asChild>
                      <Link href="/schedule">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">What's Included</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Every course comes with everything you need to start your lash career
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Professional Kit",
                  description: "High-quality tools and products to start your practice immediately",
                },
                {
                  title: "Certification",
                  description: "Industry-recognized certificate upon successful completion",
                },
                {
                  title: "Lifetime Support",
                  description: "Ongoing mentorship and access to our private community",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg bg-card p-6 text-center shadow-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/30 p-12 text-center shadow-lg"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">Not Sure Which Course to Choose?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact us for a free consultation and we'll help you find the perfect training program.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/schedule">View Schedule</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
