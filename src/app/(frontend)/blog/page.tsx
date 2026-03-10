import { getBlogPosts } from '@/lib/payload'
import { BlogCard } from '@/components/portfolio/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on web development and more.',
}

export default async function BlogPage() {
  const result = await getBlogPosts({ limit: 20 }).catch(() => ({ docs: [] })) as any

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">Thoughts on development and building things.</p>
        </div>
        {result.docs.length === 0 ? (
          <p className="text-muted-foreground">No posts yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {result.docs.map((post: any) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
