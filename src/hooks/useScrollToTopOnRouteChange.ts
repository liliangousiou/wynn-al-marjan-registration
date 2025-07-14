import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTopOnRouteChange = (smooth = false) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [pathname]);
};
