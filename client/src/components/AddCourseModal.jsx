import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_COURSE } from '../mutations/courseMutations';
import { GET_COURSES } from '../queries/courseQueries';

export default function AddCourseModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('pending');

  const [addCourse] = useMutation(ADD_COURSE, {
    variables: { name, description, duration, status },
    update(cache, { data: { addCourse } }) {
      const { courses } = cache.readQuery({ query: GET_COURSES });

      cache.writeQuery({
        query: GET_COURSES,
        data: { courses: [...courses, addCourse] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || duration === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addCourse(name, description, duration, status);

    setName('');
    setDescription('');
    setDuration('');
    setStatus('pending');
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addCourse"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Course</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addCourse"
        aria-labelledby="addCourseLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCourseLabel">
                Add Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
