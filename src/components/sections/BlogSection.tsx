import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BlogCard } from '@/components/portfolio/BlogCard'
import { ArrowRight } from 'lucide-react'

interface Props { posts: any[] }

export function BlogSection({ posts }: Props) {
  if (!posts.length) return null
  return (
    <section id="blog" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Writing</p>
              <h2 className="text-4xl font-bold">Latest Posts</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/blog">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
