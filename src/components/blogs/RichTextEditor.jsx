import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import React, {  useEffect, useState } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js'; // Import additional plugins if needed

const RichTextEditor = ({onChange,model}) => {
  const [content, setContent] = useState(model);

  useEffect(() => {
    setContent(model);
  }, [model]);

 const handleModelChange = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };
  // console.log("Model value:", model);
 
  const editorConfig = {
    attribution: false, // Remove "Powered by Froala Editor"
    charCounterCount: false, // Remove character count
    // Add more configurations as needed
    toolbarButtonsSize: 'small',
    height: '250px',

  };

  return (
    // <div style={{ width: '336px', height: '140px' }}>
      <FroalaEditorComponent
        model={content}
        onModelChange={handleModelChange}
        config={editorConfig}
      />
    // </div>
  );
};

export default RichTextEditor;
