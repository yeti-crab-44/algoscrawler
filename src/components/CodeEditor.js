import React from 'react';
import AceEditor from 'react-ace';
import ace from 'ace-builds/src-noconflict/ace';
// ace.config.set('basePath', '/ace'); // Set base path to load Ace modules
import 'ace-builds/src-noconflict/mode-javascript'; // import mode - js
ace.config.setModuleUrl(
  'ace/mode/javascript_worker',
  '/ace/worker-javascript.js'
);
import 'ace-builds/src-noconflict/theme-monokai'; // import theme

const CodeEditor = ({ value, onChange }) => {
  return (
    <div className='codeEditor'>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={value}
        onChange={onChange}
        name="solutionEditor"
        editorProps={{ $blockScrolling: true }}
        placeholder="Enter your solution"
        required
      />
      <br></br>
    </div>
  );
};
//exported to Problem.js & AddSolution.js to utlize code editors
export default CodeEditor;
