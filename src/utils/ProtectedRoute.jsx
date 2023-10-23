import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const auth = true;

  const navigate = useNavigate();
  useEffect(() => {
    // check firebase auth here
    if (!auth) {
      navigate('/');
    }
  });

  return auth === true ? children : <div />;
}
