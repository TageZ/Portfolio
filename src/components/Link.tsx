import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '../styling/Link.scss'

interface LinkProps {
  social: string;
  url: string;
}

const Link: React.FC<LinkProps> = ({ social, url }) => {
  let icon : IconProp;
  switch (social) {
    case 'linked-in':
      icon = faLinkedin;
      break;
    case 'github':
      icon = faGithub;
      break;
    default:
      icon = faLinkedin;
  }

  return (
    <a className='link' title={social} href={url}>
      <FontAwesomeIcon icon={icon}/>
    </a>
  );
};

export default Link;
