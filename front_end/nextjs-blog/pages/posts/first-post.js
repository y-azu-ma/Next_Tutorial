import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function FirstPost () {
  return (
    <>
      <p>this is first post</p>

      <h4 className={styles.title}>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h4>
    </>
  );
};
