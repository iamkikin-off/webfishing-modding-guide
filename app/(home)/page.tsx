import Link from 'next/link';

export const metadata = {
  title: 'WEBFISHING Modding Guide',
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Welcome to the WEBFISHING Modding Guide!
      </h1>
      <p>
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          Open Docs
        </Link>
      </p>
    </main>
  );
}
