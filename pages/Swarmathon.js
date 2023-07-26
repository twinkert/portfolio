import React, { Fragment, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic'
//import VideoPlayer from 'react-video-js-player';
import getConfig from 'next/config'
import Link from 'next/link';
import { Nav } from '../components/Navbar';
import { about, contact, intro, navigation, links, projects, home, SEO, work } from '../config/config';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

//import images
import swarmTeam from '../pages/swarmathonMCteam.jpg';
import swarm1 from '../pages/swarmie.jpg';
import swarm2 from '../pages/swarmiee.jpg';
import ksc from '../pages/KSC.jpg';
import ros1 from '../pages/ROS.png';
import ros2 from '../pages/ROS2.png';
import ros3 from '../pages/ROS3.png';


/*loaders: [{
      test: /\.html$/,
      loader: 'html-loader?attrs[]=video:src'
    }, {
      test: /\.mp4$/,
      loader: 'url?limit=10000&mimetype=video/mp4'
  }]
*/


export default function Home() {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  //const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  //const playerRef = dynamic(( )=> {ssr: false });
  //const TestimonialCard = dynamic(() => import('./TestimonialCard'), { ssr: false })

  return (//<div><img src = {swarmTeam.src} alt = "swarm team" width="400" height="400"/></div>

    <Fragment>

      <Header seo={SEO} />

      <Nav
        title={home.name}
        links={home.links}
      />


      <div className="d-flex flex-column flex-row justify-content-between bg-secondary min-vh-100">

        <div className="py-5 px-5 container-small text-center justify-content-between text-align-justify ">
          <h3>NASA&apos;s Swarmathon Competition</h3> <br></br>


          <h5>My team began by creating a plan. We came up with how many tasks we had to accomplish and how much time we had to spend ont each task. We then divided each task and assigned roles for each member on the team.</h5>

          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Phase One. Build the Swarmies.</h5>

          <img className="img-fluid my-3 card-image" src={swarm1.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >My team was given three disassembled robots to assemble. We set one month timeframe to assemble each of the robots. We had to attach electronic motors and wheels to the base. We then connected the ultrasonic sensors, camera, gps, and wifi chip to the robots logic board. </h5>

          <img className="img-fluid my-3 card-image" src={swarm2.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Phase one completed! Swarmies are built and ready to be programmed!</h5>
          <br></br>
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Phase Two. Program the swarmies!</h5>

          <img className="img-fluid my-3 card-image" src={ros1.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >This is ROS Kinetic Kame we used in Linux. This was our interface to connect with the robot to run scripts and read data associated with the robot. </h5>
          <img className="img-fluid my-3 card-image" src={ros2.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Physics modeling in a virtual environment.</h5>
          <img className="img-fluid my-3 card-image" src={ros3.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >We are able to see odometry, sensor, and camera data from the robot. You&apos;re right now seeing a virtual environment from the camera.</h5>
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Programming Method</h5>
          <h6 className="py-5 px-5 container-small text-center justify-content-between" >
            There was a number of controllers we were able to use to develop.
            We used the drive, drop off, manual way point, obstacle, pick up, range, and search controllers
            to program and communicate with each other. First, we had to get the robot to even move. The drive
            controller was simple enough for this task. We sent commands on loop to the wheels motors. We figured out
            how much power to give each wheel to determine driving in a straight line, turning, and reversing.
            Then our next challenge was to program path planning for our little swarmie.
            This was a tough task as we were learning. We tried using a few different algorithmns, but found
            <q>Improved Dijkstra Algorithm for Mobile Robot Path Planning and Obstacle Avoidance</q> by Shaher Alshammrei, Sahbi Boubaker, and Lioua Kolsi to be
            our guide for obstacles. This guide allowed us to follow Dijkstras algorithmn with and without obstacles using
            our ultrasonic sensors. We first got the robot to follow a black straight line on the floor, then we
            advanced to adding turns into the black tape course.
            After avoiding obstacles, we worked on picking object blocks up. Using the ultrasonic sensor, we we&apos;re able to
            pick small block objects up by communicating with the claw on the robot. The drop off was used to
            release the objected that was picked up.
          </h6>



          <div className="row align-items-center">


            {isSSR ? null : <ReactPlayer className="col-md-8 mx-auto " controls url={"https://youtu.be/IXaHsQAIwE0"} />}

            {isSSR ? null : <ReactPlayer className="col-md-8 mx-auto " controls url={"https://youtu.be/FQLYXFW1JmU"} />}

          </div>


          <div className="row align-items-center my-4">
            {isSSR ? null : <ReactPlayer className="col-md-8 mx-auto " controls url={"https://youtu.be/-DNvPT3Y8vw"} />}
            {isSSR ? null : <ReactPlayer className="col-md-8 mx-auto " controls url={"https://youtu.be/gcmbdR64JCI"} />}

          </div>



          <h5 className="py-5 px-5 container-small text-center justify-content-between" >
            Phase Three! Compete against Swarmies from other teams.</h5>
          <img className="img-fluid my-3 card-image" src={swarmTeam.src} alt="image" width="600" height="600" />
          <br></br>

          <a className="py-5 px-5 container-small text-center justify-content-between" href="https://www.nasa.gov/feature/swarmathon-improves-student-skills-in-robotics-computer-science">Image taken from NASA/Frank Michaux</a>
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >
            This is me and my team watching our Swarmies in action at the Kennedy Space Center!</h5>

          <img className="img-fluid my-3 card-image" src={ksc.src} alt="image" width="600" height="600" />
          <br></br>
          <a className="py-5 px-5 container-small text-center justify-content-between" href="https://www.nasa.gov/feature/swarmathon-improves-student-skills-in-robotics-computer-science">Image taken from NASA/Frank Michaux</a>
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >
            Swarmies in action!</h5>


          <br></br>

          <div className="container">
          <h3 >Project Resources</h3>
            <ul className="list-unstyled">
              <li><a href="https://www.nasa.gov/feature/swarmathon-improves-student-skills-in-robotics-computer-science/">Swarmathon Improves Student Skills in Robotics, Computer Science</a></li>
              <li><a href="https://www.techscience.com/cmc/v72n3/47552/html">Improved Dijkstra Algorithm for Mobile Robot Path Planning and Obstacle Avoidance</a></li>
            </ul>
          </div>





        </div>


      </div>

    </Fragment>
  );
}


function Button({ title, link }) {
  return (
    <div className="row justify-content-center">
      <div className="card card-work mx-sm-4 my-2" style={{ width: "20rem" }}>
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <h4 className="text-primary py-3 px-3">{title}</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}