import { useNavigate } from 'react-router-dom';
import css from './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate('/chat')}>Chat</button>
      <button onClick={() => navigate('/translator')}>Translator</button>
      <button onClick={() => navigate('/faq')}>FAQ</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

export default HomePage;
