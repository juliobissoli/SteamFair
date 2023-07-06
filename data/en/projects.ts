import { TextProjectsI } from "@/app/projects/[id]/page";

export const enTextProjects: Array<TextProjectsI> = [
  {
    id: "toddler_and_nursery",
    projectSubtitle:
      "A dive under the sea - different projects in environmental preservation",
    projectDescription: [
      "Beach",
      "Life Cycle - Types of Turtles and Interactive Voting",
      "Sensory Table",
      "Interactive Activity - Bag with the Photo of the Jellyfish!",
      "Interactive Activity - Straw Experiment",
    ],
  },
  {
    id: "jk",
    projectSubtitle:
      "A dive under the sea - different projects in environmental preservation",
    projectDescription: [""],
  },
  {
    id: "sk",
    projectSubtitle:
      "Together and mixed - miscegenation, flora and fauna of ES",
    projectDescription: [
      "Atlantic Forest in Espírito Santo",
      "Representation of three animals in the Capixaba fauna: Harpy Eagle, Bush Dog, and Yellow-Bellied Caiman",
      "Interaction 1: Place the correct food in the mouth of the caiman!",
      "Interaction 2: Place the correct food in the den of the bush dog!",
    ],
  },
  {
    id: "year1",
    projectSubtitle: "Art that enchants in Espírito Santo",
    projectDescription: [
      "SCULPTURES - Student sculptures - Vânia Caus - Hands On",
      "PHOTOGRAPHY - My favorite place in the school",
      "DANCES, MUSIC, and POETRY",
    ],
  },
  {
    id: "year2",
    projectSubtitle: "Capixaba Sports",
    projectDescription: [
      "Walk of Fame of Capixaba Athletes",
      "Basketball - History and evolution of the sport",
      "Volleyball - How the sport is practiced in the Paralympics",
      "Interview about accessibility in school",
    ],
  },
  {
    id: "year3",
    projectSubtitle: "Capixaba cooking and fishing",
    projectDescription: [
      "Moqueca and the different ingredients it can contain.",
      "Production of clay pots and interaction.",
      "Fishing.",
      "Products cultivated in Espírito Santo - Coffee and Cocoa.",
    ],
  },
  {
    id: "year4",
    projectSubtitle: "Places that tell histories and stories",
    projectDescription: [
      "Maquetes - Pedra da Cebola e Pedra Azul",
      "Painel com pontos turísticos",
      "Esculturas 3D: Farol de Santa Luzia, 3ª ponte, Catedral",
      "Praias",
      "Curiosidades sobre o Espírito Santo",
    ],
  },
  {
    id: "year5",
    projectSubtitle: "Capixaba entrepreneurship",
    projectDescription: [
      "Reusable Toys Company",
      "Re-Imagine Funland",
      "Candyland",
    ],
  },
];

export const enTextProjectsMap = new Map(
  enTextProjects.map((el) => [el.id, el])
);
