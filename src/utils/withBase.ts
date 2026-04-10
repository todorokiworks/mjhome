/**
 * GitHub Pages などサブパス配信時に `astro.config` の `base` を先頭に付与する。
 * 例: base `/mjhome` + path `/beginner` → `/mjhome/beginner`
 */
export function withBase(path: string): string {
  const raw = import.meta.env.BASE_URL;
  const normalizedBase = raw.endsWith("/") ? raw.slice(0, -1) : raw;
  const pathname = path.startsWith("/") ? path : `/${path}`;
  if (!normalizedBase) {
    return pathname;
  }
  return `${normalizedBase}${pathname}`;
}
