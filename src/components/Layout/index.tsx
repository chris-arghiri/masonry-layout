import { FunctionComponent } from 'react';
import styles from './Layout.module.scss';

import Card from '../Card';

import { imagesArray } from '../../utils/images/imagesArray';

type LayoutProps = {};
const sizes = [26, 33, 45];

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      {imagesArray.map((image, index) => {
        return (
          <Card
            href='#'
            imageSrc={image}
            imageAlt={`img-${index}`}
            size={`span ${sizes[Math.floor(Math.random() * sizes.length)]}`}
          />
        );
      })}
    </div>
  );
};

export default Layout;
