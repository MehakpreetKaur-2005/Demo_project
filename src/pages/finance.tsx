import React, { useEffect, useState } from 'react';
import { FaUsers, FaProjectDiagram, FaDollarSign, FaSmile, FaChartLine, FaMoneyBillWave, FaFileInvoice } from 'react-icons/fa';

interface FinanceMetrics {
  totalRevenue: number;
  expenses: number;
  profit: number;
  growthRate: number;
}

const FinanceDashboard: React.FC = () => {
  const [financeMetrics, setFinanceMetrics] = useState<FinanceMetrics | null>(null);

  useEffect(() => {
    const fetchData = () => {
      // Mock data fetching (simulate Gold API)
      setFinanceMetrics({
        totalRevenue: 500000,
        expenses: 320000,
        profit: 180000,
        growthRate: 12.5,
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
        Finance Dashboard
      </h1>

      {financeMetrics ? (
        <SectionContainer bgColor="#f5e6ff" borderColor="#000">
          <FinanceCard label="Total Revenue" value={`$${financeMetrics.totalRevenue}`} icon={<FaDollarSign size={30} color="#000" />} />
          <FinanceCard label="Expenses" value={`$${financeMetrics.expenses}`} icon={<FaMoneyBillWave size={30} color="#000" />} />
          <FinanceCard label="Profit" value={`$${financeMetrics.profit}`} icon={<FaDollarSign size={30} color="#000" />} />
          <FinanceCard label="Growth Rate" value={`${financeMetrics.growthRate}%`} icon={<FaChartLine size={30} color="#000" />} />
        </SectionContainer>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading Finance Metrics...</p>
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
        <ActionButton label="Financial Report" />
        <ActionButton label="Process Expenses" />
        <ActionButton label="Budget Planning" />
        <ActionButton label="Invoice Management" />
      </div>
    </div>
  );
};

interface FinanceCardProps {
  label: string;
  value: number | string;
  icon: JSX.Element;
}

const FinanceCard: React.FC<FinanceCardProps> = ({ label, value, icon }) => (
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

export default FinanceDashboard;
