import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaRegFileAlt, FaBan } from "react-icons/fa";
import { IconType } from 'react-icons';
import '../styling/Link.scss'

interface LinkProps {
  social: string;
  url: string;
}

const Link: React.FC<LinkProps> = ({ social, url }) => {
  let Icon : IconType;
  switch (social) {
    case 'linkedin':
      Icon = FaLinkedinIn;
      break;
    case 'github':
      Icon = FaGithub;
      break;
    case 'email':
      Icon = FaRegEnvelope;
      break;
    case 'resume':
      Icon = FaRegFileAlt;
      break;
    default:
      Icon = FaBan;
  }

  return (
    <a className='link' title={social} href={url} target="_blank">
      <Icon />
    </a>
  );
};

export default Link;
