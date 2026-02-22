'use client'

import { ArrowRight, Calendar } from 'lucide-react'

interface NewsItem {
  id: string
  date: string
  title: string
  excerpt: string
  source: string
  category: string
  isFeatured?: boolean
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    date: 'FEB 20 2026',
    title: 'New Features Released: Enhanced AI Capabilities',
    excerpt: 'We are thrilled to announce the release of our latest features, including improved AI integration and faster processing speeds.',
    source: 'Official',
    category: 'Product Update',
    isFeatured: true,
  },
  {
    id: '2',
    date: 'FEB 18 2026',
    title: 'Case Study: How TechCorp Increased Productivity by 40%',
    excerpt: 'Discover how leading companies are using our platform to streamline their workflows and boost team efficiency.',
    source: 'Press',
    category: 'Success Story',
  },
  {
    id: '3',
    date: 'FEB 15 2026',
    title: 'Upcoming Webinar: Best Practices for Modern Development',
    excerpt: 'Join industry experts as we discuss the latest trends in web development and share insights from our team.',
    source: 'Events',
    category: 'Webinar',
  },
  {
    id: '4',
    date: 'FEB 12 2026',
    title: 'Security Update: Improved Data Protection Measures',
    excerpt: 'We have implemented additional security protocols to ensure your data remains safe and protected.',
    source: 'Security',
    category: 'Update',
  },
  {
    id: '5',
    date: 'FEB 10 2026',
    title: 'Q4 2025 Report: Record Growth and Expansion',
    excerpt: 'Our latest quarterly report shows significant growth in user adoption and market expansion across regions.',
    source: 'Reports',
    category: 'Announcement',
  },
]

export function NewsSection() {
  const featuredNews = newsItems.find((item) => item.isFeatured)
  const otherNews = newsItems.filter((item) => !item.isFeatured)

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Recent News & Updates
          </h2>
        </div>

        {/* Featured Article */}
        {featuredNews && (
          <div className="mb-16">
            <div className="group cursor-pointer">
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {featuredNews.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {featuredNews.date}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                        {featuredNews.title}
                      </h3>

                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {featuredNews.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {featuredNews.source}
                        </span>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News List */}
        <div className="space-y-1">
          {otherNews.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer border-b border-border py-6 hover:bg-muted/30 transition-colors duration-200 px-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground hidden md:block">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-3 md:ml-6">
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                    {item.source}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary group">
            View All Updates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
