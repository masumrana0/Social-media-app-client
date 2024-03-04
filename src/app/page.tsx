import Auth from "@/components/auth/Auth";
import { isLoggedIn } from "@/service/auth.service";

const HomePage = () => {
  const isLogged = isLoggedIn();

  return <div>{isLogged ? <h3>This is home page</h3> : <Auth />}</div>;
};

export default HomePage;
