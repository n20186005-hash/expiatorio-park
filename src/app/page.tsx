export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/zh" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/zh');` }} />
      </body>
    </html>
  );
}