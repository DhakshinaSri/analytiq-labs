import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({ to, children, variant = 'primary', arrow = true, ...rest }) {
  return (
    <Link to={to} className={`btn btn--${variant}`} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />}
    </Link>
  );
}
