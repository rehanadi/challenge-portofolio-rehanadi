import Advantage from './partials/advantage';
import Hero from './partials/hero';
import LatestWork from './partials/latest-work';
import Navbar from './partials/navbar';
import Profile from './partials/profile';
import Roles from './partials/role';
import Skill from './partials/skill';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Roles />
      <Profile />
      <Skill />
      <Advantage />
      <LatestWork />
    </div>
  );
};

export default Home;
