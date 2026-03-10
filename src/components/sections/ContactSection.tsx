'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message is too short'),
})

type FormData = z.infer<typeof schema>

interface Props { settings: any }

export function ContactSection({ settings }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {settings?.email && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${settings.email}`} className="font-medium hover:text-primary transition-colors">
                      {settings.email}
                    </a>
                  </div>
                </div>
              )}
              {settings?.location && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{settings.location}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact form */}
            <Card className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center gap-4">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" {...register('name')} placeholder="Your name" />
                      {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" {...register('email')} placeholder="you@email.com" />
                      {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" {...register('subject')} placeholder="What's this about?" />
                    {errors.subject && <p className="text-destructive text-xs">{errors.subject.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" {...register('message')} placeholder="Tell me about your project..." rows={5} />
                    {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
