import React, { useEffect, useState } from 'react';
import { FaUsers, FaProjectDiagram, FaDollarSign, FaSmile } from 'react-icons/fa';

interface ClientMetrics {
  totalClients: number;
  activeProjects: number;
  revenue: number;
  clientSatisfaction: number;
}

const ClientManagement: React.FC = () => {
  const [clientMetrics, setClientMetrics] = useState<ClientMetrics | null>(null);

  useEffect(() => {
    const fetchData = () => {
      // Mock data fetching (simulate Gold API)
      setClientMetrics({
        totalClients: 50,
        activeProjects: 18,
        revenue: 125000,
        clientSatisfaction: 89,
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#000',
        marginTop: '20px'
      }}>
        Client Management
      </h1>

      {clientMetrics ? (
        <SectionContainer bgColor="#fff5e6" borderColor="#000">
          <ClientCard label="Total Clients" value={clientMetrics.totalClients} icon={<FaUsers size={30} color="#000" />} />
          <ClientCard label="Active Projects" value={clientMetrics.activeProjects} icon={<FaProjectDiagram size={30} color="#000" />} />
          <ClientCard label="Revenue" value={`$${clientMetrics.revenue}`} icon={<FaDollarSign size={30} color="#000" />} />
          <ClientCard label="Client Satisfaction" value={`${clientMetrics.clientSatisfaction}%`} icon={<FaSmile size={30} color="#000" />} />
        </SectionContainer>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading Client Metrics...</p>
      )}

      <h2 style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#000',
        marginTop: '40px'
      }}>
        Quick Actions
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        <ActionButton label="Project Proposal" />
        <ActionButton label="Client Meeting" />
        <ActionButton label="Project Status" />
        <ActionButton label="Generate Invoice" />
      </div>
    </div>
  );
};

interface ClientCardProps {
  label: string;
  value: number | string;
  icon: JSX.Element;
}

const ClientCard: React.FC<ClientCardProps> = ({ label, value, icon }) => (
  <div style={{ textAlign: 'center', width: '150px', margin: '10px' }}>
    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{label}</p>
    <div>{icon}</div>
    <p style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
  </div>
);

interface SectionContainerProps {
  children: React.ReactNode;
  bgColor: string;
  borderColor: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, bgColor, borderColor }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    padding: '20px',
    margin: '30px auto',
    width: '80%',
    borderRadius: '8px',
    flexWrap: 'wrap'
  }}>
    {children}
  </div>
);

interface ActionButtonProps {
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label }) => (
  <button style={{
    width: '150px',
    height: '100px',
    backgroundColor: '#cce6ff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem'
  }}>
    {label}
  </button>
);

export default ClientManagement;
