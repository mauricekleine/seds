export type Child = {
  id: string;
  firstName: string;
  age: number;
  grade: string;
  shortBio: string;
  dream: string;
  isSponsored: boolean;
};

export const children: Child[] = [
  {
    id: "anitha",
    firstName: "Anitha",
    age: 10,
    grade: "5th",
    shortBio:
      "Anitha loves drawing and dreams of becoming an artist. She joined SEDS school after her father lost his farmland to drought.",
    dream: "I want to paint murals that tell the story of my village.",
    isSponsored: false,
  },
  {
    id: "ravi",
    firstName: "Ravi",
    age: 12,
    grade: "7th",
    shortBio:
      "Ravi is passionate about science and regularly wins prizes at school science fairs. He walks 3km daily to attend SEDS school.",
    dream: "I want to become an engineer and build check dams like SEDS.",
    isSponsored: true,
  },
  {
    id: "lakshmi",
    firstName: "Lakshmi",
    age: 9,
    grade: "4th",
    shortBio:
      "Lakshmi is the youngest of four siblings and the first in her family to attend an English-medium school.",
    dream: "I want to become a teacher and teach other village children.",
    isSponsored: false,
  },
  {
    id: "suresh",
    firstName: "Suresh",
    age: 11,
    grade: "6th",
    shortBio:
      "Suresh has a natural talent for mathematics. He helps younger students with their homework at the hostel every evening.",
    dream: "I want to work with computers and help my parents with their farm.",
    isSponsored: false,
  },
  {
    id: "priya",
    firstName: "Priya",
    age: 13,
    grade: "8th",
    shortBio:
      "Priya is a natural leader who organizes eco-clubs and tree planting drives at school. She lives in the SEDS hostel.",
    dream: "I want to study environmental science and protect our forests.",
    isSponsored: true,
  },
  {
    id: "venkat",
    firstName: "Venkat",
    age: 8,
    grade: "3rd",
    shortBio:
      "Venkat is energetic and loves sports. His favorite subject is English and he practices speaking with volunteers.",
    dream: "I want to travel the world and tell people about Anantapur.",
    isSponsored: false,
  },
  {
    id: "divya",
    firstName: "Divya",
    age: 11,
    grade: "6th",
    shortBio:
      "Divya excels at singing and performs at school events. She discovered her talent through SEDS' arts program.",
    dream: "I want to become a singer and make my village proud.",
    isSponsored: false,
  },
  {
    id: "kumar",
    firstName: "Kumar",
    age: 14,
    grade: "9th",
    shortBio:
      "Kumar is the top student in his class and aspires to study medicine. He mentors younger students at the SEDS hostel.",
    dream: "I want to become a doctor and serve rural communities.",
    isSponsored: true,
  },
];
