import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import { countries } from "../data/countries";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link to="/noticias" className="text-teal-400 hover:text-teal-300 transition-colors">
            Volver a noticias
          </Link>
        </div>
      </div>
    );
  }

  const country = countries.find((c) => c.code === post.country);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        {/* Back button */}
        <Link
          to="/noticias"
          className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-white text-sm hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Noticias
        </Link>
      </div>

      {/* Content */}
      <article className="relative max-w-4xl mx-auto px-4 sm:px-6 -mt-24">
        <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-lg">{country?.flagSvg}</span>
            <span className="text-slate-400 text-sm">{country?.name}</span>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="text-slate-600 text-xs">
              {new Date(post.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Read time */}
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8 pb-6 border-b border-slate-800">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} minutos de lectura</span>
          </div>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ContentRenderer content={post.content} />
          </div>

          {/* Share */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a noticias
            </Link>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Enlace copiado al portapapeles");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 text-sm transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Compartir
            </button>
          </div>
        </div>
      </article>

      {/* Related spacing */}
      <div className="h-16" />
    </div>
  );
}

function ContentRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  lines.forEach((line, idx) => {
    if (line.startsWith("## ")) {
      if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      elements.push(
        <h2
          key={idx}
          className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 first:mt-0"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      inList = true;
      listItems.push(line.replace("- ", ""));
    } else if (line.startsWith("| ")) {
      if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      elements.push(
        <TableRenderer key={idx} lines={lines.slice(idx)} />
      );
    } else if (line.startsWith("> ")) {
      if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      elements.push(
        <blockquote
          key={idx}
          className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-500/5 rounded-r-lg text-slate-300 italic my-6"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(line.replace("> ", "")) }}
        />
      );
    } else if (line.trim() === "") {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    } else if (line.trim() !== "") {
      if (inList) {
        elements.push(
          <ul key={`list-${idx}`} className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      elements.push(
        <p
          key={idx}
          className="text-slate-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(line) }}
        />
      );
    }
  });

  // Handle remaining list items
  if (listItems.length > 0) {
    elements.push(
      <ul key="list-final" className="list-disc list-inside space-y-2 text-slate-300 mb-6">
        {listItems.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
        ))}
      </ul>
    );
  }

  return <>{elements}</>;
}

function TableRenderer({ lines }: { lines: string[] }) {
  const tableLines: string[] = [];
  let i = 0;

  while (i < lines.length && lines[i].startsWith("|")) {
    tableLines.push(lines[i]);
    i++;
  }

  if (tableLines.length < 2) return null;

  const headerCells = tableLines[0]
    .split("|")
    .filter((c) => c.trim())
    .map((c) => c.trim());

  const rows = tableLines.slice(2).map((line) =>
    line
      .split("|")
      .filter((c) => c.trim())
      .map((c) => c.trim())
  );

  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-slate-700">
      <table className="w-full text-sm">
        <thead className="bg-slate-800">
          <tr>
            {headerCells.map((cell, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-slate-300 font-semibold border-b border-slate-700"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(cell) }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-slate-800/50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-slate-400 border-b border-slate-800"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(cell) }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 bg-slate-800 rounded text-teal-400">$1</code>');
}
