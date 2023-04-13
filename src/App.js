import Users from "./features/UserCrud/components/Users";
import Spinner from "./shared/components/ui/Spinner";
function App() {
  return (
    <div className="container">
      <Spinner />
      <Users />
    </div>
  );
}
export default App;
