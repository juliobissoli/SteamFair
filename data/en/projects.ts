import { TextProjectsI } from "@/app/projects/[id]/page";

export const enTextProjects: Array<TextProjectsI> = [
  {
    id: "toddler_and_nursery",
    projectSubtitle:
      "A dive under the sea - different projects in environmental preservation",
    projectDescription: [
      "Students will have the opportunity to explore a simulated beach, where they can experience different sensations. In addition, they will learn about different types of turtles. A sensory table will be available to pique the children's curiosity. Interactive activities are also planned, such as a bag with a photo of a jellyfish. Another interactive activity will involve an experiment with straws. These activities have been carefully designed to provide students with a fun and educational experience at the science fair, encouraging their interest in science and the world around them.",
    ],
  },
  {
    id: "jk",
    projectSubtitle:
      "A dive under the sea - different projects in environmental preservation",
    projectDescription: [
      "The JK students have prepared a truly immersive sensory experience in the marine world! There will be an artistic representation of turtles hatching and making their way to the sea. To make it even more fun, we have included an interactive activity where they would aim sardines into the mouth of a drawn turtle. These engaging activities will allow students and visitors to learn about the ocean floor, sea turtles, and have fun at the same time!",
    ],
  },
  {
    id: "sk",
    projectSubtitle:
      "Together and mixed - miscegenation, flora and fauna of ES",
    projectDescription: [
      "SK Red will present a variety of activities related to the fauna and flora of the Atlantic Forest in Espírito Santo. Students will have the opportunity to learn about three native animals of the state: the Harpy Eagle, the Bush Dog, and the Yellow-breasted Caiman. There will be a representation of these animals, allowing children to learn about their characteristics and peculiarities. Two interactive activities are planned. In the first interaction, they will be challenged to put the correct food in the mouth of the caiman. In the second interaction, students will be invited to place the correct food in the den of the bush dog.",
      "SK White will explore the cultural mix in Espírito Santo, with a focus on three peoples who have helped shape our state: Indigenous people, Europeans (Portuguese, Italians, Germans, etc.), and Africans. We will learn about their cultures, traditions, and contributions to the diversity of the state, creating various panels and interactions on the theme!",
    ],
  },
  {
    id: "year1",
    projectSubtitle: "Art that enchants in Espírito Santo",
    projectDescription: [
      "Year 1 will work with various aspects of our culture! Mosaic panels and representations of Capixaba architecture have been assembled. We also have a dedicated panel showcasing the art of photography, inspired by the renowned photographer Sebastião Salgado.",
      "Another panel will exhibit the production of Congo masks, traditional in Espirito Santo. Additionally, a special corner has been created for the famous clay pots, and inspired by the works of Capixaba artist Vânia Caus, we have sculptures made from recycled materials.",
      "In the Year 1 exhibition, you can also find the 'Reading Yard', Capixaba Dictionary, and reading workshops and games!",
    ],
  },
  {
    id: "year2",
    projectSubtitle: "Capixaba Sports",
    projectDescription: [
      "Learning about Capixaba sports, Year 2 created a special 'Walk of Fame,' highlighting inspiring Capixaba athletes. Students learned about their achievements and contributions to sports.",
      "We will explore basketball, delving into the history and evolution of this exciting sport.",
      "The exhibition also takes time to understand how volleyball is practiced in the Paralympic Games, emphasizing inclusion and the importance of accessibility. It features an interview with students and staff members of the school about accessibility, encouraging everyone to reflect on the importance of an inclusive environment.",
    ],
  },
  {
    id: "year3",
    projectSubtitle: "Capixaba cooking and fishing",
    projectDescription: [
      "The Year 3 class immersed themselves in a world of discoveries about the cuisine and products of Espírito Santo.",
      "In the exhibition, they will explore the famous Capixaba moqueca and its ingredients, as well as present a clay pot made by them. There will also be a panel about the different species of fish found on the Capixaba coast, emphasizing the importance of fishing and how this activity contributes to the livelihood of coastal communities and the local economy. Additionally, there will be an interactive component on the theme.",
      "Furthermore, they will share about other products cultivated in our state, such as coffee and cocoa.",
    ],
  },
  {
    id: "year4",
    projectSubtitle: "Places that tell histories and stories",
    projectDescription: [
      "The Year 4 class will present a variety of activities to explore the wonders of Espírito Santo.",
      "In the exhibition, we will find 3D reproductions of famous landmarks such as the Third Bridge, Santa Luzia Lighthouse, and the Cathedral. We will also have models of Pedra da Cebola and Pedra Azul, panels with artistic representations of tourist spots and their curiosities, and a special space dedicated to the beaches of Espírito Santo, where we can learn about the diversity of beaches that the state offers.",
    ],
  },
  {
    id: "year5",
    projectSubtitle: "Capixaba entrepreneurship",
    projectDescription: [
      'The Year 5 class has created a company called "Re-imagine Funland" with the aim of creating fun toys using recycled materials.',
      'They have learned about sustainability, recycling, and reusing, putting their imagination into practice to transform objects into amazing toys. They have also developed entrepreneurial skills by planning, designing, and presenting their products.',
      'In addition, there will be an exhibition showcasing the art of seed paper, with an interactive experience involving the visitors.',
      'Furthermore, there will be a display featuring "Docelandia"'
    ],
  },
];

export const enTextProjectsMap = new Map(
  enTextProjects.map((el) => [el.id, el])
);
