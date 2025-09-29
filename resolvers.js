import { nanoid } from "nanoid";
class Course {
  constructor(
    id,
    { courseName, price, language, email, techStack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.price = price;
    this.language = language;
    this.email = email;
    this.techStack = techStack;
    this.teachingAssists = teachingAssists;
  }
}

const courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseHolder[id]);
  },
  createCourse: ({ input }) => {
    const id = nanoid();
    courseHolder[id] = input;
    return new Course(id, input);
  },
};

export default resolvers;
