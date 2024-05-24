import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, fa0 } from '@fortawesome/free-solid-svg-icons';
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
    case 'email':
      icon = faEnvelope;
      break;
    case 'resume':
      icon = faFile;
      break;
    default:
      icon = fa0;
  }

  return (
    <a className='link' title={social} href={url} target="_blank">
      <FontAwesomeIcon icon={icon}/>
    </a>
  );
};

export default Link;
