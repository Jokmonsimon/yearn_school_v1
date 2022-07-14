import { useQuery } from '@apollo/client';
import { GET_COURSES } from '../queries/clientQueries';
import ClientRow from './ClientRow';
import Spinner from './Spinner';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Decription</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.courses.map((course) => (
              <ClientRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
