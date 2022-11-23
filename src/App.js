import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MyCalendar } from './components/Calendar/Calendar';
import { Footer } from './components/Footer';
import { Logout } from './components/Logoutage';
import { Content } from './components/MainContent';
import { SideBar } from './components/Sidebar';
import { StudentInfo } from './components/Studentinfo/StudentInfo';
import { Timetable } from './components/Timetable';
import { TopBar } from './components/Topbar';
import { RegisterStudent } from './components/Studentinfo/RegisterStudent';
import { HomeWork } from './components/Homework';
import { Examinations } from './components/Examinations';
import { EditStudent } from './components/Studentinfo/Editstudent';

function App() {




  return (
    <div className="App">
      {/* Page Wrapper */}
      <div id="wrapper">
        <SideBar />
        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/*Main Content */}
          <div id="content">
            <TopBar />
            {/* Begin Page Content  */}
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/events" element={<MyCalendar />} />
                <Route path="/homework" element={<HomeWork />} />
                <Route path="/exam" element={<Examinations />} />
                <Route path="/student_info" element={<StudentInfo />} />
                <Route path="/student/edit/:id" element={<EditStudent />} />
                <Route path="/register_student" element={<RegisterStudent />} />
              </Routes>
            </div>
          </div>
          {/* Footer  */}
          <Footer />
        </div>
      </div>
      <Logout />
    </div>
  );
}

export default App;
