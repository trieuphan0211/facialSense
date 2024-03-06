// Tên file: useIntersectionObserver.js

import {  useState, useEffect } from 'react';

const useIntersectionObserver = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0} // Chỉ cần một phần trăm xuất hiện để kích hoạt
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return isVisible;
};

export default useIntersectionObserver;
