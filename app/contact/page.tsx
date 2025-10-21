"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@luxelashacademy.com",
    link: "mailto:info@luxelashacademy.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "123 Beauty Boulevard, Suite 200\nLos Angeles, CA 90028",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
    link: null,
  },
]

export default function ContactPage() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
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
              Get in Touch
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Have questions about our courses? We're here to help you start your lash artist journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select required>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                          <SelectItem value="booking">Booking Question</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="certification">Certification Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="flex items-start gap-4 pt-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <info.icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1 font-semibold text-card-foreground">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="whitespace-pre-line text-sm text-muted-foreground transition-colors hover:text-accent"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="whitespace-pre-line text-sm text-muted-foreground">{info.details}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-accent/10 to-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us on Social Media</CardTitle>
                  <CardDescription>Stay updated with our latest courses and student success stories.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-foreground transition-colors hover:text-accent"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="font-medium">@luxelashacademy</span>
                  </a>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full bg-muted">
                  <img src="/map-location-pin.png" alt="Location map" className="h-full w-full object-cover" />
                </div>
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
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Quick answers to common questions. Don't see what you're looking for? Contact us!
            </p>

            <div className="space-y-4 text-left">
              {[
                {
                  question: "How quickly will I hear back?",
                  answer: "We typically respond to all inquiries within 24 hours during business days.",
                },
                {
                  question: "Can I visit the academy before booking?",
                  answer: "We welcome studio tours by appointment. Contact us to schedule a visit.",
                },
                {
                  question: "Do you offer group training?",
                  answer: "Yes, we offer private group sessions for teams of 3 or more. Contact us for custom pricing.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-2 font-semibold text-card-foreground">{faq.question}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
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
