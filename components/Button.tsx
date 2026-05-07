import Image from 'next/image';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, href, onClick, variant = 'primary' }: ButtonProps) {
  const baseClasses =
    'px-6 py-2 rounded-md font-medium transition-colors duration-200';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent/90'
      : 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white';

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${styles}`}>
      {children}
    </button>
  );
}
