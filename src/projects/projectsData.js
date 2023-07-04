import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "AI_Virtual_Mouse",
    image: projectOne,
    description: (
      <>
        <p>
        The hand gesture virtual mouse using Python is an innovative application that allows users to control their computer cursor using hand movements. By leveraging computer vision and machine learning techniques, it captures the webcam feed, detects hand gestures, and translates them into mouse actions. This intuitive and interactive system enhances user experience and opens up new possibilities for natural human-computer interaction.
        </p>
      </>
    ),
    github: "https://github.com/deven1003/AI_Virtual_Mouse/tree/master",
    demo: "https://netlify.com",
  },
  2: {
    title: "DCE (Block-chain)",
    image: projectTwo,
    description: (
      <>
        <p>
        A decentralized crypto exchange (better known as a DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders. Decentralized crypto exchanges provide one of core opportunities, that is growing  financial transactions that aren’t offered by banks, brokers, payment  processors, or any other kind of mediatory. 
        </p>
      </>
    ),
    github: "https://github.com/deven1003/DCE-blockchain/tree/master",
    demo: "https://netlify.com",
  },
  3: {
    title: "Working on it",
    image: projectThree,
    description: (
      <>
        <p>
          ........................................................................................................
        </p>
      </>
    ),
    github: "https://github.com/deven1003",
    demo: "https://netlify.com",
  },
};

export default projects;
