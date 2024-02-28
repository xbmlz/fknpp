import { createEffect, createSignal, onCleanup } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default function Editor() {
  const [editor, setEditor] =
    createSignal<monaco.editor.IStandaloneCodeEditor | null>(null);

  let monacoEl: HTMLDivElement | null = null;

  console.log("languages", monaco.languages.getLanguages());

  createEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(monacoEl!, {
          value: "",
          language: "python",
          fontSize: 14,
          fontFamily: "Monospace Regular",
          tabSize: 2,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: {
            enabled: false,
          },
          inlineSuggest: {
            enabled: false,
          },
          fixedOverflowWidgets: true,
        });
      });
    }
    return () => editor()?.dispose();
  });

  onCleanup(() => editor()?.dispose());

  return <div class="editor" ref={monacoEl!}></div>;
}
