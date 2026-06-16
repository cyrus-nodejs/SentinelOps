import {
  LayoutDashboard,
  ShieldAlert,
  Search,
  Bot,
  Wrench,
} from 'lucide-react';

export const navigation = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Incidents',
    href: '/incidents',
    icon: ShieldAlert,
  },
  {
    label: 'Investigations',
    href: '/investigations',
    icon: Search,
  },
  {
    label: 'Agents',
    href: '/agents',
    icon: Bot,
  },
  {
    label: 'Remediations',
    href: '/remediations',
    icon: Wrench,
  },
];