// Convert checked-in Markdown/MDX text to a minimal safe HTML subset.
// Escape raw HTML before adding our controlled heading, emphasis, link and list tags.
// Does not attempt full MDX support; no user-provided HTML is trusted.
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);
}

function safeHref(encodedUrl) {
  const href = encodedUrl.trim();
  const decoded = href.replace(/&amp;/g, '&');
  if (/[\u0000-\u001f\u007f]/.test(decoded)) return '#';
  if (!/^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(decoded)) return '#';
  return href;
}

export function renderSafeMarkdown(markdown) {
  const escaped = escapeHtml(markdown).replace(/\r\n?/g, '\n');
  return escaped
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-extrabold text-text-primary mt-8 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-text-primary mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-text-primary mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_all, label, url) =>
      '<a href="' + safeHref(url) + '" class="text-primary-blue hover:underline" rel="noopener noreferrer">' + label + '</a>')
    .replace(/^- (.+)$/gm, '<li class="text-text-secondary ml-4 mb-1">$1</li>')
    .replace(/(<li[^>]*>[^\n]*<\/li>\n?)+/g, (items) => '<ul class="list-disc list-inside space-y-1 my-4">' + items + '</ul>')
    .replace(/^(?!<(?:h[1-6]|ul|\/ul|li)\b)(.+)$/gm, '<p class="text-text-secondary leading-relaxed my-3">$1</p>')
    .replace(/<p[^>]*><\/p>/g, '');
}
