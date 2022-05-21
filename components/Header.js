import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">
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
                            <Link href="/login">
                                <a className="link" >LOGIN</a>
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