import { useState, useEffect, useCallback } from 'react';

// Type definition for Pyodide
declare global {
  interface Window {
    loadPyodide: (options: { indexURL: string }) => Promise<any>;
  }
}

export function usePython() {
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function initPyodide() {
      try {
        if (!window.loadPyodide) {
          // Dynamically append the Pyodide script if not present
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
          document.head.appendChild(script);
          
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
        
        if (!active) return;
        
        const py = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
        });
        
        // Setup initial environment (e.g. redirecting stdout)
        await py.runPythonAsync(`
          import sys
          import io
          sys.stdout = io.StringIO()
        `);
        
        if (active) {
          setPyodide(py);
          setIsLoading(false);
        }
      } catch (err) {
        if (active) {
          console.error("Failed to load Pyodide:", err);
          setError(err instanceof Error ? err.message : String(err));
          setIsLoading(false);
        }
      }
    }

    initPyodide();

    return () => {
      active = false;
    };
  }, []);

  const runCode = useCallback(async (code: string) => {
    if (!pyodide) {
      throw new Error("Pyodide is not loaded yet");
    }

    try {
      // Clear previous stdout
      await pyodide.runPythonAsync(`
        import sys
        import io
        sys.stdout = io.StringIO()
      `);
      
      await pyodide.loadPackagesFromImports(code);
      await pyodide.runPythonAsync(code);
      
      // Get stdout
      const output = await pyodide.runPythonAsync("sys.stdout.getvalue()");
      return { output, success: true };
    } catch (err) {
      return { 
        output: err instanceof Error ? err.message : String(err), 
        success: false 
      };
    }
  }, [pyodide]);

  return { pyodide, isLoading, error, runCode };
}
