"use client";

import { useState } from "react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300 ${
        expanded ? "fixed inset-4 z-50 flex flex-col" : ""
      }`}
    >
      {expanded && (
        <div
          className="fixed inset-0 z-[-1] bg-black/60 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        />
      )}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <button
          onClick={() => setExpanded(false)}
          className="group h-3 w-3 rounded-full bg-red-500/80 transition-all duration-200 hover:bg-red-500 hover:shadow-[0_0_8px_rgba(239,68,68,0.6)] hover:scale-110"
          title="Minimize"
        />
        <div className="h-3 w-3 rounded-full bg-amber-500/80 transition-all duration-200 hover:bg-amber-500 hover:shadow-[0_0_8px_rgba(245,158,11,0.6)] hover:scale-110" />
        <button
          onClick={() => setExpanded(true)}
          className="group h-3 w-3 rounded-full bg-emerald-500/80 transition-all duration-200 hover:bg-emerald-500 hover:shadow-[0_0_8px_rgba(16,185,129,0.6)] hover:scale-110"
          title="Expand"
        />
        <span className="ml-2 text-xs text-zinc-500">
          Python
        </span>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-white caret-white focus:outline-none ${
          expanded ? "flex-1" : ""
        }`}
        style={expanded ? undefined : { minHeight: "300px" }}
        spellCheck={false}
        placeholder="Write your Python code here..."
      />
    </div>
  );
}
