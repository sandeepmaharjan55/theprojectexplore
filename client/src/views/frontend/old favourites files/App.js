import { Route, Switch } from "react-router-dom";
import AllDestinations from "./pages/AllDestinations";
import Favourites from "./pages/Favourites";
import NewDestinations from "./pages/NewDestinations";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
      <Route exact path="/" component={AllDestinations} />
      <Route exact path="/NewDestination" component={NewDestinations} />
      <Route exact path="/favourites" component={Favourites} />
        {/* <Route path="/" element={<AllMeetUps/>}/>
        <Route path="/newmeetups" element={<NewMeetups/>}/>
        <Route path="/favourites" element={<Favourites/>}/> */}
      </Switch>
    </Layout>
  );
}

export default App;
