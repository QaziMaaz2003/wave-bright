import { Link } from 'react-router-dom';
import { Icon } from './Icon';

type Props = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'sm';
  arrow?: boolean;
};

/** → core/button */
export function Button({ to, children, variant = 'primary', size = 'md', arrow = true }: Props) {
  const cls = `wb-btn wb-btn--${variant}${size === 'sm' ? ' wb-btn--sm' : ''}`;
  return (
    <Link to={to} className={cls}>
      {children}
      {arrow && <Icon name="arrow" size={16} />}
    </Link>
  );
}
