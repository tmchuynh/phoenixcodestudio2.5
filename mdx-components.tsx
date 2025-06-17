import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built-in components
    h1: ({ children }) => (
      <h1 className="mb-6 font-bold text-4xl text-fancy">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 font-semibold text-3xl text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 font-semibold text-2xl text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-2 font-semibold text-foreground text-xl">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-balance text-base leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-4 ml-6 list-disc list-outside">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-4 ml-6 list-decimal list-outside">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-secondary/20 my-4 py-2 pl-4 border-tertiary border-l-4 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted mb-4 p-4 rounded-lg overflow-x-auto">
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        className="shadow-lg mx-auto my-6 rounded-lg"
        width={800}
        height={400}
        alt={props.alt || "Blog image"}
      />
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-tertiary hover:text-fancy underline underline-offset-2"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="border border-border min-w-full">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-muted px-4 py-2 border border-border font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border border-border">{children}</td>
    ),
    ...components,
  };
}
