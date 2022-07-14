import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_COURSE } from '../mutations/clientMutations';
import { GET_COURSES } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ course }) {
  const [deleteCourse] = useMutation(DELETE_COURSE, {
    variables: { id: course.id },
    // Make new request to fetch new data
    refetchQueries: [{ query: GET_COURSES }, { query: GET_PROJECTS }],

    // Fetch data fromm cache
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <tr>
      <td>{course.name}</td>
      <td>{course.description}</td>
      <td>{course.duration}</td>
      <td>{course.status}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteCourse}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
