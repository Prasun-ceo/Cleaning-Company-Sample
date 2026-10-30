import { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  MapPin,
  X,
  User,
  Calendar,
  ChevronRight
} from 'lucide-react';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS_DATA,
  BlogPost
} from '../data/blogData';
import { BUSINESS_INFO, MAIN_CITIES } from '../data/cleaningData';

interface BlogPageViewProps {
  onOpenBooking: () => void;
  onSelectCity: (citySlug: string) => void;
}

export default function BlogPageView({ onOpenBooking, onSelectCity }: BlogPageViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    document.title = `Cleaning Tips & Home Organizing Advice | ${BUSINESS_INFO.name}`;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', `Expert home cleaning tips, organizing guides, and seasonal maintenance advice from ${BUSINESS_INFO.name} in Austin, TX.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter posts
  const filteredPosts = BLOG_POSTS_DATA.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Expert Cleaning &amp; Home Guides</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cleaning Tips &amp; Home Organizing Advice
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Professional advice, room decluttering strategies, and Austin home care insights from our local team.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: CATEGORIES & LIVE SEARCH BAR */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#16221D] text-white shadow-md'
                      : 'bg-[#FAF9F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF9F5] border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 4 & POST GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Grid Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {filteredPosts.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
                <p className="text-slate-600 font-bold text-base">No articles found matching "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-bold text-emerald-700 underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#16221D]/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-5 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-emerald-600" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-base text-[#131E19] leading-snug hover:text-emerald-700 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium">By {post.author}</span>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Sidebar CTA & Service Areas */}
          <div className="lg:col-span-4 space-y-8 sticky top-36">
            
            {/* Get A Quote CTA Box */}
            <div className="bg-[#16221D] text-white p-6 sm:p-8 rounded-3xl border border-[#273B32] shadow-xl space-y-4">
              <div className="p-3 bg-[#23382F] text-emerald-400 rounded-2xl w-fit">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white">
                Get Your Free Cleaning Quote
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Enjoy a spotless, stress-free home. Transparent pricing with no contracts or hidden fees.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-white text-[#16221D] font-extrabold text-sm rounded-xl hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Calculate My Quote</span>
                <ArrowRight className="w-4 h-4 text-[#16221D]" />
              </button>
            </div>

            {/* Service Areas Sidebar Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-extrabold text-sm text-[#131E19] uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Service Areas</span>
              </h4>

              <div className="space-y-2 text-xs">
                {MAIN_CITIES.map((city) => (
                  <button
                    key={city.slug}
                    onClick={() => onSelectCity(city.slug)}
                    className="w-full flex items-center justify-between text-left py-1.5 px-2 rounded-lg hover:bg-[#FAF9F5] text-slate-700 font-medium"
                  >
                    <span>{city.name}, TX</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INDIVIDUAL POST TEMPLATE MODAL VIEW */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
            
            {/* Post Banner Header */}
            <div className="relative h-64 bg-slate-900">
              <img
                src={selectedPost.image}
                alt={selectedPost.imageAlt}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16221D] via-[#16221D]/60 to-transparent" />

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-300">
                  <span className="bg-emerald-800/80 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.date}</span>
                  <span>· {selectedPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Post Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 text-xs font-bold text-slate-600">
                <User className="w-4 h-4 text-emerald-600" />
                <span>Written by {selectedPost.author} · Cleanfy Home Services Expert</span>
              </div>

              <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedPost.contentHeadings.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#131E19]">
                      {section.heading}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Related Posts Recommendation */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <h4 className="font-extrabold text-sm text-[#131E19] uppercase tracking-wider">
                  Related Articles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BLOG_POSTS_DATA.filter(p => p.id !== selectedPost.id).slice(0, 2).map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => setSelectedPost(rel)}
                      className="p-3 bg-[#FAF9F5] rounded-xl border border-slate-200 text-left hover:border-emerald-500 transition-colors"
                    >
                      <div className="text-[10px] font-bold text-emerald-700">{rel.category}</div>
                      <div className="text-xs font-extrabold text-[#131E19] line-clamp-1">{rel.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Article Footer CTA */}
              <div className="p-6 bg-[#16221D] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base text-white">Need professional help cleaning your home?</h4>
                  <p className="text-xs text-slate-300">Cleanfy brings 5-star perfection to every room.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 bg-white text-[#16221D] font-black text-xs rounded-xl hover:bg-slate-100 transition-colors shrink-0"
                >
                  Get A Free Quote
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
