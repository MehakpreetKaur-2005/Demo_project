import React, { useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaClipboardList, FaSmile } from 'react-icons/fa';

interface HRMetrics {
  totalEmployees: number;
  leave: number;
  pendingRequests: number;
  satisfactionScore: number;
}

const HRDashboard: React.FC = () => {
  const [hrMetrics, setHRMetrics] = useState<HRMetrics | null>(null);

  useEffect(() => {
    const fetchData = () => {
      // Mock data for HR Metrics (simulate Gold API)
      setHRMetrics({
        totalEmployees: 250,
        leave: 15,
        pendingRequests: 7,
        satisfactionScore: 92,
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
        HR Dashboard
      </h1>

      {hrMetrics ? (
        <SectionContainer bgColor="#e6ffe6" borderColor="#000">
          <HRCard label="Total Employees" value={hrMetrics.totalEmployees} icon={<FaUsers size={30} color="#000" />} />
          <HRCard label="Leave" value={hrMetrics.leave} icon={<FaCalendarAlt size={30} color="#000" />} />
          <HRCard label="Pending Requests" value={hrMetrics.pendingRequests} icon={<FaClipboardList size={30} color="#000" />} />
          <HRCard label="Satisfaction Score" value={hrMetrics.satisfactionScore} icon={<FaSmile size={30} color="#000" />} />
        </SectionContainer>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading HR Metrics...</p>
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
        <ActionButton label="Approve Leave Requests" />
        <ActionButton label="Employee Onboarding" />
        <ActionButton label="Performance Reviews" />
        <ActionButton label="Training Programs" />
      </div>
    </div>
  );
};

interface HRCardProps {
  label: string;
  value: number;
  icon: JSX.Element;
}

const HRCard: React.FC<HRCardProps> = ({ label, value, icon }) => (
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

export default HRDashboard;