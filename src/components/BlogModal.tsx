import { useEffect } from 'react';
import { X, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/cleaningData';

interface BlogModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function BlogModal({ onClose, onOpenBooking }: BlogModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        <div className="bg-[#16221D] text-white p-6 flex items-center justify-between border-b border-[#253930]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#23362E] text-emerald-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 id="blog-modal-title" className="text-2xl font-black text-white">Cleaning Tips &amp; Blog</h2>
              <p className="text-xs text-slate-300">Expert advice for keeping your home fresh and organized</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close blog modal"
            className="p-2 text-slate-400 hover:text-white hover:bg-[#23362E] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-[#FAF9F5] rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-36 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-[#16221D] leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Read Article &amp; Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#16221D] text-white font-bold rounded-xl hover:bg-[#23362E] text-sm"
            >
              Close Blog
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
