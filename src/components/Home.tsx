import MainContent from "../pages/MainContent";
import SideBar from "./Sidebar";


const Home = () => {
    return (
        <div className="flex h-screen">
          <SideBar/>
          <div className="rounded w-full justify-between flex-wrap">
            <MainContent ></MainContent>
          </div>

        </div>
    );
};

export default Home;