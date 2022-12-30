import Location from "./Location";
import LocationError from "./LocationError";
import ThrowError1 from "./ThrowError1";
import ThrowError2 from "./ThrowError2";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ThrowError1>
          <SectionOne />
        </ThrowError1>
        <ThrowError2>
          <SectionTwo />
        </ThrowError2>
        <LocationError>
          <Location />
        </LocationError>
      </div>
    </section>
  );
}

export default Main;
