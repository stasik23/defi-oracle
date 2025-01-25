export interface ProfileProps {
    avatarUrl: string;
    name: string;
    email?: string;
    role?: string;
    stats?: { label: string; value: string }[];
    actions?: { label: string; onClick: () => void }[];
  }