import Hero from './partials/hero';
import Navbar from './partials/navbar';
import Profile from './partials/profile';
import Roles from './partials/role';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Roles />
      <Profile />
    </div>
  );
};

export default Home;
