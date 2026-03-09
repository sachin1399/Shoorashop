import { createContext, useContext, useState, useEffect } from 'react';

const RecentContext = createContext();

export const useRecentViews = () => useContext(RecentContext);

export const RecentProvider = ({ children }) => {
  const [recentItems, setRecentItems] = useState(() => {
    const saved = localStorage.getItem('shoorashop_recent');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoorashop_recent', JSON.stringify(recentItems));
  }, [recentItems]);

  const addRecentView = (product) => {
    setRecentItems(prev => {
      const filtered = prev.filter(item => item.id !== product.id);
      return [product, ...filtered].slice(0, 4); // Keep latest 4 items
    });
  };

  return (
    <RecentContext.Provider value={{ recentItems, addRecentView }}>
      {children}
    </RecentContext.Provider>
  );
};
