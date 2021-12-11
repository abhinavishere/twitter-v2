import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Feed from "./Components/Feed/Feed";
import WidgetsList from "./Components/Widgets.js/WidgetsList";
function App() {
  return (
    <div className="text-white w-full h-screen mx-auto relative base:max-w-xl laptop-sm:max-w-5xl">
      <Nav />
      <div className="flex gap-x-6 h-full ">
        <div className="flex flex-col flex-grow h-full base:ml-16 overflow-y-scroll scrollbar-hide">
          <Header />
          <Feed />
        </div>
        <WidgetsList />
      </div>
    </div>
  );
}

export default App;
