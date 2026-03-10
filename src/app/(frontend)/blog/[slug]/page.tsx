import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/payload'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug).catch(() => null) as any
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug).catch(() => null) as any
  if (!post) notFound()

  return (
    <article className="container mx-auto px-4 py-24 max-w-3xl">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 -ml-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </Link>
      <header className="mb-10">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t: any) => <Badge key={t.tag} variant="secondary">{t.tag}</Badge>)}
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {post.publishedAt && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />{formatDate(post.publishedAt)}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />{post.readingTime} min read
            </span>
          )}
        </div>
      </header>
      {post.coverImage && typeof post.coverImage === 'object' && (
        <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border">
          <Image src={(post.coverImage as any).url} alt={(post.coverImage as any).alt || post.title} fill className="object-cover" />
        </div>
      )}
    </article>
  )
}
