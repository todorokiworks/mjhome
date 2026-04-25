export interface ProductLogoItem {
  href: string;
  src: string;
  srcSp: string;
  alt: string;
  /** 一覧カードなどで使うキャッチ（任意） */
  title?: string;
  /** 一覧カードなどで使う説明（改行は \n） */
  description?: string;
}
