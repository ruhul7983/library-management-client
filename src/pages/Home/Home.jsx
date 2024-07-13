import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import Books from "./Books";
import Categories from "./Categories";
import Feature from "./Feature";

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            {/* Our Features */}
            <Feature></Feature>
            {/* Our Books Category */}
            <Categories></Categories>
            {/* Our Books */}
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;