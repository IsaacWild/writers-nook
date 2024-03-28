import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';

export default function NavMenu() {
    return(
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image
                    src="/menu.svg"
                    width={40}
                    height={40}
                    alt="Next Logo"
                />
            </Link>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/press'}>Press</Link>
                </li>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link href={'/updates'}>Updates</Link>
                </li>
                <li>
                    <Link href={'/user'}>User</Link>
                </li>
            </ul>
        </nav>
    )
}