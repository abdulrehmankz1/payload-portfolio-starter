import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface Props { post: any }

export function BlogCard({ post }: Props) {
  const coverUrl = typeof post.coverImage === 'object' ? post.coverImage?.url : null

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="flex gap-6 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 border border-transparent hover:border-border">
        {coverUrl && (
          <div className="relative w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-muted">
            <Image src={coverUrl} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags?.slice(0, 3).map((t: any) => (
              <Badge key={t.tag} variant="secondary" className="text-xs">{t.tag}</Badge>
            ))}
          </div>
          <h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {post.publishedAt && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.publishedAt)}
              </span>
            )}
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            )}
            <span className="flex items-center gap-1 text-primary font-medium ml-auto">
              Read more <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
