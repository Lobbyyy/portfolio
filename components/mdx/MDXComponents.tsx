import type { Components } from "react-markdown"
import Link from "next/link"

export const MDXComponents: Components = {
  // Headings with proper typography
  h1: ({ children }) => (
    <h1 className="font-serif text-3xl md:text-4xl text-[rgb(var(--text))] mt-12 mb-6 leading-tight first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl md:text-3xl text-[rgb(var(--text))] mt-10 mb-4 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl md:text-2xl text-[rgb(var(--text))] mt-8 mb-3 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-serif text-lg md:text-xl text-[rgb(var(--text))] mt-6 mb-2 leading-snug">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="font-mono text-sm uppercase tracking-wider text-[rgb(var(--muted))] mt-6 mb-2">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--muted))] mt-4 mb-2">
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-[rgb(var(--text))] leading-relaxed mb-6 text-base md:text-lg">
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http")
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--primary))] hover:underline underline-offset-2"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || "#"} className="text-[rgb(var(--primary))] hover:underline underline-offset-2">
        {children}
      </Link>
    )
  },

  // Images
  img: ({ src, alt }) => {
    if (!src) return null
    return (
      <span className="block my-8">
        <img
          src={src}
          alt={alt || ""}
          className="rounded-lg w-full h-auto"
          loading="lazy"
        />
        {alt && (
          <span className="block text-center text-sm text-[rgb(var(--muted))] mt-2 italic">
            {alt}
          </span>
        )}
      </span>
    )
  },

  // Blockquotes - styled like callouts
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[rgb(var(--primary))] pl-6 py-2 my-6 bg-[rgb(var(--surface))] rounded-r-lg">
      <div className="text-[rgb(var(--text))] italic">{children}</div>
    </blockquote>
  ),

  // Code blocks
  code: ({ className, children }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="font-mono text-sm bg-[rgb(var(--border))] text-[rgb(var(--text))] px-1.5 py-0.5 rounded">
          {children}
        </code>
      )
    }
    return (
      <code className="font-mono text-sm">{children}</code>
    )
  },

  // Pre (code blocks)
  pre: ({ children }) => (
    <pre className="bg-[rgb(var(--surface))] border border-[rgb(var(--border))] rounded-lg p-4 my-6 overflow-x-auto">
      {children}
    </pre>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-[rgb(var(--text))]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-[rgb(var(--text))]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base md:text-lg leading-relaxed pl-2">
      {children}
    </li>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="border-t border-[rgb(var(--border))] my-12" />
  ),

  // Strong/Bold
  strong: ({ children }) => (
    <strong className="font-semibold text-[rgb(var(--text))]">{children}</strong>
  ),

  // Emphasis/Italic
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-[rgb(var(--border))]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[rgb(var(--surface))]">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-[rgb(var(--border))]">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-[rgb(var(--text))] border border-[rgb(var(--border))]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[rgb(var(--text))] border border-[rgb(var(--border))]">
      {children}
    </td>
  ),
}
