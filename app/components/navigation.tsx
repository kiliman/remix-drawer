import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  { name: 'Dashboard', href: '/app/', icon: HomeIcon },
  { name: 'Team', href: '/app/team/', icon: UsersIcon },
  {
    name: 'Projects',
    href: '/app/projects/',
    icon: FolderIcon,
  },
  {
    name: 'Calendar',
    href: '/app/calendar',
    icon: CalendarIcon,
  },
  {
    name: 'Documents',
    href: '/app/documents/',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Reports',
    href: '/app/reports/',
    icon: ChartPieIcon,
  },
]
export const teams = [
  { id: 1, name: 'Heroicons', href: '/app/team/1', initial: 'H' },
  { id: 2, name: 'Tailwind Labs', href: '/app/team/2', initial: 'T' },
  { id: 3, name: 'Workcation', href: '/app/team/3', initial: 'W' },
]
export const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]
