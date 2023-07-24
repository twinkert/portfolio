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
import img1 from './GSFC Intern 2019/img1.jpg';
import img2 from './GSFC Intern 2019/InternPoster_WinkertThomas.jpg';





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
          <h3>NASA Goddard Space Flight Center Internship</h3> <br></br>
          <img className="img-fluid my-3 card-image" src={img2.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Project findings.</h5>
          <img className="img-fluid my-3 card-image" src={img1.src} alt="image" width="600" height="600" />
          <h5 className="py-5 px-5 container-small text-center justify-content-between" >Me presenting my findings!</h5>




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