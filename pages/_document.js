import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-900 scroll-smooth p-8 scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
