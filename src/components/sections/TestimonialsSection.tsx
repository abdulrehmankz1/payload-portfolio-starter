import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Props { testimonials: any[] }

export function TestimonialsSection({ testimonials }: Props) {
  if (!testimonials.length) return null
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Social Proof</p>
          <h2 className="text-4xl font-bold mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t: any) => (
              <Card key={t.id} className="p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-muted/30" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  {t.avatar && typeof t.avatar === 'object' ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image src={(t.avatar as any).url} alt={t.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{t.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role} at {t.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
