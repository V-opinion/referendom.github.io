import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No root element found');
}

(function () {
  // Find the current <script> tag that loaded badge.js
  var currentScript = document.currentScript || (function () {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  if (!currentScript) {
    console.warn('badge.js: could not find current script element.');
    return;
  }

  // Read data attributes
  var appId = currentScript.getAttribute('data-app-id') || 'multireligionval';
  var platformUrl =
    currentScript.getAttribute('data-platform-url') ||
    'https://referendum.multireligionvalsystem.eu.org';

  // Create a simple badge element
  var badge = document.createElement('a');
  badge.href = platformUrl;
  badge.target = '_blank';
  badge.rel = 'noopener noreferrer';
  badge.textContent = 'Besök ' + appId;
  badge.style.position = 'fixed';
  badge.style.bottom = '16px';
  badge.style.right = '16px';
  badge.style.padding = '8px 12px';
  badge.style.backgroundColor = '#0055aa';
  badge.style.color = '#ffffff';
  badge.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  badge.style.fontSize = '14px';
  badge.style.borderRadius = '4px';
  badge.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.15)';
  badge.style.textDecoration = 'none';
  badge.style.zIndex = '9999';

  // Append badge to the page
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(badge);
  });
})();
