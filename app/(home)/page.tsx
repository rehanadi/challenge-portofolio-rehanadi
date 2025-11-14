import Advantage from './partials/advantage';
import Hero from './partials/hero';
import LatestWork from './partials/latest-work';
import Navbar from './partials/navbar';
import Profile from './partials/profile';
import Roles from './partials/role';
import Skill from './partials/skill';
import Testimonial from './partials/testimonial';
import WorkExperience from './partials/work-experience';

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
      <WorkExperience />
      <Testimonial />
    </div>
  );
};

export default Home;
