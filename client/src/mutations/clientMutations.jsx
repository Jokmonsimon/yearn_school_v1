import { gql } from '@apollo/client';

const ADD_COURSE = gql`
  mutation addCourse(
    $name: String!
    $description: String!
    $duration: String!
    $status: String!
  ) {
    addClient(
      name: $name
      description: $description
      duration: $duration
      status: $status
    ) {
      id
      name
      description
      duration
      status
    }
  }
`;

const DELETE_COURSE = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(id: $id) {
      id
      name
      description
      duration
      status
    }
  }
`;

export { ADD_COURSE, DELETE_COURSE };
