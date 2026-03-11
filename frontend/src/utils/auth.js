export function isJwtValid(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  try {
    const payloadJson = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
    const payload = JSON.parse(payloadJson);

    // If exp not present, treat as valid (server decides). If present, validate.
    if (payload && typeof payload.exp === 'number') {
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    }
    return true;
  } catch {
    return false;
  }
}

export function getValidAccessToken() {
  const token = localStorage.getItem('accessToken');
  if (!isJwtValid(token)) {
    localStorage.removeItem('accessToken');
    return null;
  }
  return token;
}

