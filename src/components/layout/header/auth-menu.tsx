import Link from '@components/ui/link';
import React from 'react';

import { GlobalContext } from 'src/pages/_app';

interface Props {
  href: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
}

const AuthMenu: React.FC<Props> = ({
  isAuthorized,
  href,
  btnProps,
  children,
}) => {

  const context = React.useContext(GlobalContext)

  return isAuthorized ? (
    <Link
      href={href}
      className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
    >
      {context.user?.fullName || 'Mi perfil'}
    </Link>
  ) : (
    <button
      className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
      aria-label="Authentication"
      {...btnProps}
    />
  );
};

export default AuthMenu;
