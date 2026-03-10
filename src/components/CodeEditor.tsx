"use client";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-amber-500/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs text-zinc-500">
          Python
        </span>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-white caret-white focus:outline-none"
        style={{ minHeight: "300px" }}
        spellCheck={false}
        placeholder="Write your Python code here..."
      />
    </div>
  );
}
