import Hero from './partials/hero';
import Navbar from './partials/navbar';
import Roles from './partials/role';

const Home = () => {
  return (
    <div className='bg-primary-400 min-h-screen'>
      <Navbar />
      <Hero />
      <Roles />
    </div>
  );
};

export default Home;
