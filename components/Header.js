import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';


export default function Header() {
    return (
        <div className="header" onClick={() => scroll.scrollToTop()}>
            <div className="row">
                <div className="wrap">
                    <a href="" className="logo">
                        <div className="logo-first">WATCH</div>
                        <div className="logo-last">ME</div>
                    </a>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link href="/">
                                <a className="link" >HOME</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/Account">
                                <a className="link" >ACCOUNT</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/Contact">
                                <a className="link" >CONTACT</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/About">
                                <a className="link" >ABOUT</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="header-wrap">

                    </div>
                </div>
            </div>
        </div>
    )
}