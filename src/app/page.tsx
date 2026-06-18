export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="refresh" content="0; url=/zh" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/zh');` }} />
      </body>
    </html>
  );
}