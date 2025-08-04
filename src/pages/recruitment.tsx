import React, { useEffect, useState } from 'react';
import { FaUsers, FaClipboardList, FaCalendarCheck, FaUserCheck } from 'react-icons/fa';

interface RecruitmentMetrics {
  totalApplications: number;
  activeJobs: number;
  interviewsScheduled: number;
  hiredThisMonth: number;
}

const RecruitmentDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<RecruitmentMetrics | null>(null);

  useEffect(() => {
    const fetchData = () => {
      // Mock data for Recruitment Metrics (simulate Gold API)
      setMetrics({
        totalApplications: 500,
        activeJobs: 20,
        interviewsScheduled: 15,
        hiredThisMonth: 8,
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
        Recruitment Dashboard
      </h1>

      {metrics ? (
        <SectionContainer bgColor="#e6f2ff" borderColor="#003366">
          <MetricCard label="Total Applications" value={metrics.totalApplications} icon={<FaUsers size={30} color="#003366" />} />
          <MetricCard label="Active Jobs" value={metrics.activeJobs} icon={<FaClipboardList size={30} color="#003366" />} />
          <MetricCard label="Interviews Scheduled" value={metrics.interviewsScheduled} icon={<FaCalendarCheck size={30} color="#003366" />} />
          <MetricCard label="Hired This Month" value={metrics.hiredThisMonth} icon={<FaUserCheck size={30} color="#003366" />} />
        </SectionContainer>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading Metrics...</p>
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
        <ActionButton label="Create New Job" />
        <ActionButton label="Pending Applications" />
        <ActionButton label="Interview Slots" />
        <ActionButton label="Recruitment Report" />
      </div>
    </div>
  );
};

interface MetricCardProps {
  label: string;
  value: number;
  icon: JSX.Element;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon }) => (
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

export default RecruitmentDashboard;
// Removed Performance Metrics section as per user request