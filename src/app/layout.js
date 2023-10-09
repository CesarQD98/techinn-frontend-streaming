export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}