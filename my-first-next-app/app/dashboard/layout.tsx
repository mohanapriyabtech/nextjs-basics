import React, { ReactNode } from 'react';

type DashboardProps = {
  children: ReactNode; // ReactNode includes all valid React children types
};

export default function Dashboard({ children }: DashboardProps) {
  return (
    <section>
      <nav></nav>
      <h2>HEADER</h2>
      {children}
      <h2>FOOTER</h2>
    </section>
  );
}
