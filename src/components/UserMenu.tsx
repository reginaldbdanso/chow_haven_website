import React from 'react';
import { User } from 'lucide-react';

interface UserMenuProps {
  isLoggedIn: boolean;
  username?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ isLoggedIn, username }) => {
  return (
    <div className="flex items-center gap-2">
      <User className="w-5 h-5" />
      <span className="text-gray-700">
        {isLoggedIn ? username : 'Guest'}
      </span>
    </div>
  );
};

export default UserMenu;