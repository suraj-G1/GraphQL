// import { buildSchema } from "graphql";

// const schema = buildSchema(`
//     type Course{
//     id:ID
//     courseName:String
//     category:String
//     price:Int
//     language:String
//     email:String
//     techStack : TechStack
//     teachingAssists :[TeachingAssists]
//     }

//     type TeachingAssists{
//     firstName:String
//     lastName:String
//     experience:Int
//     }

//     enum TechStack {
//     MERN
//   JAVA
//   MEAN
//   DOTNET
//     }

//     type Query {
//     getCourse(id:ID) : Course
//     }

//     input CourseInput{
//     id:ID
//     courseName:String!
//     category:String
//     price:Int!
//     language:String
//     email:String
//     techStack : TechStack
//     teachingAssists :[TeachingAssistsInput]
//     }

//     input TeachingAssistsInput{
//     firstName:String!
//     lastName:String!
//     experience:Int!
//     }

//     type Mutation{
//     createCourse(input:CourseInput):Course
//     }
//     `);

// export default schema;

import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Course {
    id: ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    techStack: TechStack
    teachingAssists: [TeachingAssists]
  }

  type TeachingAssists {
    firstName: String
    lastName: String
    experience: Int
  }

  enum TechStack {
    MERN
    JAVA
    MEAN
    DOTNET
  }

  type Query {
    getCourse(id: ID): Course
  }

  input TeachingAssistsInput {
    firstName: String!
    lastName: String!
    experience: Int!
  }

  input CourseInput {
    id: ID
    courseName: String!
    category: String
    price: Int!
    language: String
    email: String
    techStack: TechStack
    teachingAssists: [TeachingAssistsInput]
  }

  type Mutation {
    createCourse(input: CourseInput): Course
  }
`);

export default schema;
