import React from 'react';
import AddCourseModal from '../components/AddCourseModal';
import AddProjectModal from '../components/AddProjectModal';
import Clients from '../components/Clients';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddCourseModal />
        {/* <AddProjectModal /> */}
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
