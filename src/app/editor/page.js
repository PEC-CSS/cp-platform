'use client'

import { Editor } from "@monaco-editor/react";
import React from "react";

function CodeEditor() {
    return (
        <div>
            <Editor
                height="90vh"
                defaultLanguage="cpp"
                defaultValue="// hello world"
            />
        </div>
    );
}

export default CodeEditor;
