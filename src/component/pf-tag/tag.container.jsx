import React from 'react';
import style from './tag.containe.module.css';

function PFTag({ variant, label, onClick }) {
  let tagContent = null;

  switch (variant) {
    case 'Primary':
      tagContent = (
        <div
          style={{ marginLeft: 0 }}
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${style.primary_bg} ${style.primary_text} border`}
          onClick={onClick}
        >
          {label || variant}
        </div>
      );
      break;

    case 'Success':
      tagContent = (
        <div
          style={{ marginLeft: 0 }}
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${style.success_bg} ${style.success_text} border`}
          onClick={onClick}
        >
          {label || variant}
        </div>
      );
      break;

    case 'Warning':
      tagContent = (
        <div
          style={{ marginLeft: 0 }}
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${style.warning_bg} ${style.warning_text} border`}
          onClick={onClick}
        >
          {label || variant}
        </div>
      );
      break;

    case 'Error':
      tagContent = (
        <div
          style={{ marginLeft: 0 }}
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${style.error_bg} ${style.error_text} border`}
          onClick={onClick}
        >
          {label || variant}
        </div>
      );
      break;

    default:
      tagContent = (
        <div
          style={{ marginLeft: 0 }}
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${style.default_bg} ${style.default_text} border`}
          onClick={onClick}
        >
          {label || variant}
        </div>
      );
  }

  return tagContent;
}

export { PFTag };
