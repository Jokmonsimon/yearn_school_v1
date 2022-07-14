import { gql } from '@apollo/client';

const GET_COURSES = gql`
  query getCourses {
    courses {
      id
      name
      description
      duration
      status
    }
  }
`;

export { GET_COURSES };
