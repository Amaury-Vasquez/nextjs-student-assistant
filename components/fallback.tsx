import styles from 'styles/layout.module.css';
import animate from 'styles/animation.module.css';

const { content, fallback } = styles;
const { bounceWrapper, bounceLoader } = animate;

export const FallbackScreen = () => {
  return (
    <div className={`${content} ${fallback}`}>
      <div className={bounceWrapper}>
        <div className={bounceLoader} />
        <div className={bounceLoader} />
      </div>
    </div>
  );
};
