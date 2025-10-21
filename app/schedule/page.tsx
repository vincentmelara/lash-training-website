"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const upcomingClasses = [
  {
    id: 1,
    course: "Classic Lash Extensions",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    spotsLeft: 2,
    instructor: "Sarah Johnson",
  },
  {
    id: 2,
    course: "Volume Lash Extensions",
    date: "March 22-23, 2025",
    time: "9:00 AM - 5:00 PM",
    spotsLeft: 1,
    instructor: "Emily Chen",
  },
  {
    id: 3,
    course: "Hybrid Lash Mastery",
    date: "March 29, 2025",
    time: "10:00 AM - 4:00 PM",
    spotsLeft: 3,
    instructor: "Sarah Johnson",
  },
  {
    id: 4,
    course: "Classic Lash Extensions",
    date: "April 5, 2025",
    time: "9:00 AM - 5:00 PM",
    spotsLeft: 4,
    instructor: "Emily Chen",
  },
]

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedCourse, setSelectedCourse] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your class booking.",
    })
  }

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
              Book Your Training
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choose from our upcoming classes or request a custom training date that works for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Upcoming Classes */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">Upcoming Classes</h2>

              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <motion.div
                    key={classItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{classItem.course}</CardTitle>
                            <CardDescription className="mt-1">Instructor: {classItem.instructor}</CardDescription>
                          </div>
                          <Badge variant={classItem.spotsLeft <= 2 ? "destructive" : "secondary"}>
                            {classItem.spotsLeft} {classItem.spotsLeft === 1 ? "spot" : "spots"} left
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            {classItem.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {classItem.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Luxe Lash Academy Studio
                          </div>
                        </div>
                        <Button className="mt-4 w-full" onClick={() => setSelectedCourse(classItem.course)}>
                          Select This Class
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Location Info */}
              <Card className="mt-6 bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5" />
                    Training Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Luxe Lash Academy Studio
                    <br />
                    123 Beauty Boulevard, Suite 200
                    <br />
                    Los Angeles, CA 90028
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Request a Booking</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course">Select Course</Label>
                      <Select value={selectedCourse} onValueChange={setSelectedCourse} required>
                        <SelectTrigger id="course">
                          <SelectValue placeholder="Choose a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Classic Lash Extensions">Classic Lash Extensions</SelectItem>
                          <SelectItem value="Volume Lash Extensions">Volume Lash Extensions</SelectItem>
                          <SelectItem value="Hybrid Lash Mastery">Hybrid Lash Mastery</SelectItem>
                          <SelectItem value="Master Lash Artist Program">Master Lash Artist Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border border-border"
                        disabled={(date) => date < new Date()}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Previous Experience (Optional)</Label>
                      <Textarea
                        id="experience"
                        placeholder="Tell us about any previous lash or beauty experience..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Notes</Label>
                      <Textarea id="message" placeholder="Any questions or special requests?" rows={3} />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Booking Request
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting this form, you agree to be contacted about your booking request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Booking Information</h2>

            <div className="space-y-6">
              {[
                {
                  question: "What's your cancellation policy?",
                  answer:
                    "We require 7 days notice for cancellations to receive a full refund. Cancellations within 7 days will receive a 50% refund or credit toward a future class.",
                },
                {
                  question: "What should I bring to class?",
                  answer:
                    "We provide all necessary tools and materials. Just bring yourself, a notebook, and comfortable clothing. Your professional starter kit is included in the course fee.",
                },
                {
                  question: "Do you offer payment plans?",
                  answer:
                    "Yes! We offer flexible payment plans for all courses. Contact us to discuss options that work for your budget.",
                },
                {
                  question: "Can I reschedule my class?",
                  answer:
                    "We understand life happens. You can reschedule to any available date with at least 48 hours notice at no additional charge.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg bg-card p-6 shadow-sm"
                >
                  <h3 className="mb-2 font-semibold text-card-foreground">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
