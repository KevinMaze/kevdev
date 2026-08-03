import "./home.css";
import Social from "./Social";
import Data from "./Data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    AOS.init();

    return (
        <div>
            <section
                className="home section"
                id="home"
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />

                        <div
                            className="home__img"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        ></div>

                        <Data />
                    </div>
                </div>
            </section>
        </div>
    );
}
