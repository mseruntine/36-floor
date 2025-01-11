import { useState } from 'react';
import './styles/Socials.css';
import { Button, HStack, Icon, IconButton, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
function Socials() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HStack spacing={4} display="flex" justifyContent="center" marginTop={8}>
        <Link href="https://www.tiktok.com/@36floor" isExternal>
          <FaTiktok color="black" size={30} />
        </Link>
        <Link href="https://www.instagram.com/36floor/" isExternal>
          <FaInstagram color="black" size={30} />
        </Link>
        <Link href="https://www.youtube.com/@36thFloorPodcast" isExternal>
          <FaYoutube color="black" size={30} />
          </Link>
    </HStack>
    </>
  );
}
export default Socials;