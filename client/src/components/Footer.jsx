import { useContext } from 'react';
import { AuthContext } from "../context/auth";

export default function Footer() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <div>Footer</div>
  )
}
