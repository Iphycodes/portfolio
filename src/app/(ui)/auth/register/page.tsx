'use client';
import { useContext } from 'react';
import { mediaSize, useMediaQuery } from '@grc/_shared/components/responsiveness';
import { AppContext } from '@grc/app-context';
import Register from '@grc/components/auth/register';

const RegisterPage = () => {
  const mobileResponsive = useMediaQuery(mediaSize.mobile);
  const { theme } = useContext(AppContext);

  return <Register mobileResponsive={mobileResponsive} theme={theme} />;
};

export default RegisterPage;
