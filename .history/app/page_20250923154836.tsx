// import styles from './page.module.css'
import Project from '../components/Projects';

export default function Home() {

  const projects = [

    {
      title1: "LLOYD",
      title2: "by OTOMATA",
      src: "/Lloyd-Inc-972.png",
      link: "",
    },
    {
      title1: "Atrium AI",
      title2: "by OTOMATA",
      src: "/AtriHome.png",
      link: "https://atrihome2024-mats-projects-ca2b516a.vercel.app/",
    },
    {
      title1: "OTOMATA",
      title2: "The Blog",
      src: "/coworkers.jpg",
      link: "https://blog2-eosin-beta.vercel.app/",
    },
    {
      title1: "Portfolio",
      title2: "Manuel",
      src: "/MTL.png",
      link:"https://portfolio-anim-manu.vercel.app/",
    },
 
  ]

  return (
    <main className="main2">
      <div className="gallery2">
        <p>OTOMATA</p>
          {
            projects.map( project => {
              return <Project project={project} key={project.title1}/>
            })
          }
      </div>
    </main>
  )
}
