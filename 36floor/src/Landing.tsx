import React, { useCallback, useEffect, useMemo, useRef } from "react";
import "./Landing.css";
import LandingHeader from "./components/LandingHeader.jsx";
import LandingBackground from "./components/LandingBackground.jsx";
import BandsInTownWidget from "./components/BandsInTownWidget.jsx";
import ContactForm from "./components/ContactForm.tsx";
import DrawerIcon from "./components/DrawerIcon.jsx"; // Assuming DrawerIcon is in `components`
import { Flex } from "@chakra-ui/react";

function Landing() {
  const bandsInTownRef = useRef(null);
  const contactFormRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollFunctions = useMemo(() => ({
    scrollToHome: () => scrollToSection(homeRef),
    scrollToShows: () => scrollToSection(bandsInTownRef),
    scrollToContact: () => scrollToSection(contactFormRef),
  }), [scrollToSection]);

  useEffect(() => {
    console.log("Scroll functions created:", scrollFunctions);
  }, [scrollFunctions]);

  return (
    <>
      {/* <DrawerIcon
        onScrollToHome={scrollFunctions.scrollToHome}
        onScrollToShows={scrollFunctions.scrollToShows}
        onScrollToContact={scrollFunctions.scrollToContact}
      /> */}
      <Flex direction="column" height="100%">
        {/* Add a reference to the Home section */}
        <div ref={homeRef}>
          <LandingHeader />
        </div>
        <LandingBackground />
        {/* Add a reference to the BandsInTownWidget */}
        <div ref={bandsInTownRef}>
          <BandsInTownWidget />
        </div>
        <LandingBackground />
        {/* Add a reference to the ContactForm */}
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </Flex>
    </>
  );
}

export default Landing;