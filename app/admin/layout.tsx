import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Galera Properties',
  description: 'Manage your properties and listings',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

