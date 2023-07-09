import { useEffect, useRef, useState } from 'react';

const useDropdownPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // get dropdown reference to get the position
  const dropdownRef = useRef(null);

  // toggle menu on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // when user clicks other than the dropdown
  const handleClickOutside = (e) => {
    //when user clicks outside of the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { isOpen, toggleMenu, dropdownRef };
};

export default useDropdownPopup;
