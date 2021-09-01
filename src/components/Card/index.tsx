import { FunctionComponent } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  href: string;
  size: string;
  imageSrc: string;
  imageAlt: string;
  imageStyle?: React.CSSProperties;
};

const Card: FunctionComponent<CardProps> = ({
  size,
  href,
  imageAlt,
  imageSrc,
  imageStyle
}) => {
  return (
    <a href={href} className={styles.Card} style={{ gridRowEnd: size }}>
      <img src={imageSrc} alt={imageAlt} style={imageStyle} />
    </a>
  );
};

export default Card;
