"use client";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border border-white/10"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <div className="h-3 w-3 rounded-full" style={{ background: "var(--error)" }} />
        <div className="h-3 w-3 rounded-full" style={{ background: "var(--warning)" }} />
        <div className="h-3 w-3 rounded-full" style={{ background: "var(--success)" }} />
        <span className="ml-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          Python
        </span>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none p-4 font-mono text-sm leading-relaxed focus:outline-none"
        style={{
          background: "transparent",
          color: "var(--text-primary)",
          minHeight: "300px",
          caretColor: "var(--accent)",
        }}
        spellCheck={false}
        placeholder="Write your Python code here..."
      />
    </div>
  );
}
