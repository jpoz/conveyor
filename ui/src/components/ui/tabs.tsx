import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {children}
          </nav>
        </div>
      </div>
    </div>
  )
}

type TabProps = {
  active: boolean;
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

export function Tab({
  active,
  href,
  icon,
  children,
}: TabProps) {
  return (
    <a
      href={href}
      className={classNames(
        active
          ? 'border-primary text-primary'
          : 'border-transparent text-muted-foreground hover:border-primary hover:text-primary',
        'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
      )}
      aria-current={active ? 'page' : undefined}
    >
      {React.createElement(icon, {
        className: classNames(
          active ? 'text-primary' : 'text-muted-foreground group-hover:text-primary',
          '-ml-0.5 mr-2 h-5 w-5'
        ),
        'aria-hidden': 'true'
      })}
      <span>{children}</span>
    </a>
  )
}
