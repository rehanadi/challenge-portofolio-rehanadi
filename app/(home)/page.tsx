import Advantage from './partials/advantage';
import FAQ from './partials/faq';
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
    <>
      <Navbar />
      <Hero />
      <Roles />
      <Profile />
      <Skill />
      <Advantage />
      <LatestWork />
      <WorkExperience />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default Home;
