import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Main Heading */}
      <h1 style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#0d47a1',
        marginTop: '20px'
      }}>
        O6AI Dashboard
      </h1>

      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        padding: '10px 20px',
        marginTop: '20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '30px',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          <Link href="/">Home</Link>
          <Link href="/recruitment">Recruitment</Link>
          <Link href="/hr">HR</Link>
          <Link href="/client">Client</Link>

          <Link href="/finance">Finance</Link>
          <Link href="#">Gold Data</Link>
          <Link href="#">Settings</Link>
        </div>
        <button style={{
          backgroundColor: '#0d47a1',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Sign Up
        </button>
      </nav>

      {/* Home Page Content */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Welcome to O6AI Dashboard</h2>
        <p>Select a section from the navigation bar above to get started.</p>
      </div>
    </div>
  );
}
