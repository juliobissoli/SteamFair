export interface SchoolClassesI {
  label: string;
  name: string;
  imagesDetail: Array<string>;
  imagePrimary: string;
}

export const schoolClasses: Array<SchoolClassesI> = [
  {
    label: "Toddler & Nursery",
    name: "toddler_and_nursery",
    imagesDetail: [
      "toddler-nursery/img1.jpg",
      "toddler-nursery/img2.jpg",
      "toddler-nursery/img3.jpg",
      "toddler-nursery/img4.jpg",
      "toddler-nursery/img5.jpg",
      "toddler-nursery/img6.jpg",
      "toddler-nursery/img7.jpg",
      "toddler-nursery/img8.jpg",
      "toddler-nursery/img9.jpg",
    ],
    imagePrimary: "toddler_and_nursery_baner.jpg",
  },
  {
    label: "JK",
    name: "jk",
    imagesDetail: [
      "jk/img1.jpg",
      "jk/img2.jpg",
      "jk/img3.jpg",
      "jk/img4.jpg",
      "jk/img5.jpg",
      "jk/img6.jpg",
      "jk/img7.jpg",
      "jk/img8.jpg",
      "jk/img9.jpg",
      "jk/img10.jpg",
      "jk/img11.jpg",
    ],
    imagePrimary: "jk_banner.jpeg",
  },
  {
    label: "SK",
    name: "sk",
    imagesDetail: [],
    imagePrimary: "sk.jpg",
  },
  {
    label: "Year 1",
    name: "year1",
    imagesDetail: [
      "year1/img1.jpg",
      "year1/img2.jpg",
      "year1/img3.jpg",
      "year1/img4.jpg",
      "year1/img5.jpg",
    ],
    imagePrimary: "year1_baner.png",
  },
  {
    label: "Year 2",
    name: "year2",
    imagesDetail: [
      "year2/img1.jpg",
      "year2/img2.jpg",
      "year2/img3.jpg",
      "year2/img4.jpg",
      "year2/img5.jpg",
    ],
    imagePrimary: "year2_baner.jpg",
  },
  {
    label: "Year 3",
    name: "year3",
    imagesDetail: [
      "year3/img1.jpg",
      "year3/img2.jpg",
      "year3/img3.jpg",
      "year3/img4.jpg",
      "year3/img5.jpg",
    ],
    imagePrimary: "year3_baner.png",
  },
  {
    label: "Year 4",
    name: "year4",
    imagesDetail: [
      "year4/img1.jpg",
      "year4/img2.jpg",
      "year4/img3.jpg",
      "year4/img4.jpg",
      "year4/img5.jpg",
    ],
    imagePrimary: "year4_baner.png",
  },
  {
    label: "Year 5",
    name: "year5",
    imagesDetail: [
      "year5/img6.jpeg",
      "year5/img7.jpeg",
      "year5/img8.jpeg",
      "year5/img1.jpg",
      "year5/img2.jpg",
      "year5/img3.jpg",
      "year5/img4.jpg",
      "year5/img5.jpg",
    ],
    imagePrimary: "year5_baner.png",
  },
];
