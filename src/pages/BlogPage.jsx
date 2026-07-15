import { motion } from "framer-motion";
import { Calendar, BookOpen } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  const publishedPosts = blogPosts.filter((post) => post.published);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Blog Tecnico</h1>
          <p className="text-[var(--color-muted)] text-lg">
            Artículos y tutoriales sobre data engineering, ML y backend
          </p>
        </motion.div>

        {publishedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post, idx) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--color-surface)] rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-[var(--color-primary)] group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={20} className="text-[var(--color-primary)]" />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition">
                  {post.title}
                </h3>
                <p className="text-[var(--color-muted)] mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  {post.date}
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-2xl bg-[var(--color-surface)] border border-blue-100 rounded-xl p-8 text-center shadow-sm"
          >
            <p className="text-[var(--color-muted)] text-lg mb-5">
              Esta seccion se activara cuando publique articulos tecnicos.
            </p>
            <a
              href="https://github.com/LuisRomero20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:opacity-95 transition font-semibold"
            >
              Ver recursos en GitHub
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
