import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <h5>Web Development</h5>
                  <p className="text-skill-level">Intermediate</p>
                  <p>
                    Proficient in building modern, responsive websites using a variety of technologies including HTML, CSS, JavaScript, and frameworks like React and Next.js.
                  </p>
                </div>
                <div className="item">
                  <h5>Flutter Developer</h5>
                  <p className="text-skill-level">Advanced</p>
                  <p>
                    Experienced in developing cross-platform mobile applications with Flutter, utilizing a wide range of widgets and tools to create seamless user experiences.
                  </p>
                </div>
                <div className="item">
                  <h5>Entrepreneur</h5>
                  <p className="text-skill-level">Intermediate</p>
                  <p>
                    Driven by a passion for entrepreneurship, I have experience in launching and scaling business ventures, with a focus on technology solutions and innovation.
                  </p>
                </div>
                <div className="item">
                  <h5>Problem Solver</h5>
                  <p className="text-skill-level">Advanced</p>
                  <p>
                    Skilled at analyzing complex problems and developing innovative solutions. I thrive on identifying challenges, evaluating different approaches, and implementing effective strategies to solve them.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
