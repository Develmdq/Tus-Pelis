import { Routes, Route } from "react-router-dom";
import {
  LoginForm,
  ListMovies,
  NotFound,
  Layout,
  MyList,
} from "./components/pages";
import "./style/bootstrap.min.css";
import { MovieProvider, UserProvider } from "./context";

const App = () => {
  return (
    <div className="container">
      <UserProvider>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LoginForm />} />
              <Route path="listmovies" element={<ListMovies />} />
              <Route path="mylistmovies" element={<MyList />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MovieProvider>
      </UserProvider>
    </div>
  );
};

export default App;
