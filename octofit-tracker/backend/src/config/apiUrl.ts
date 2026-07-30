export const API_PORT = 8000;

export function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;

  if (codespaceName) {
    return `https://${codespaceName}-${API_PORT}.app.github.dev`;
  }

  return `http://localhost:${API_PORT}`;
}