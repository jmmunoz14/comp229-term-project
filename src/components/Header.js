import Logo from './logo.png'

const Header = () => {
    return (
        <div className='horizontal-navbar'>
            <ul>
                <li>
                    <img src={Logo} height={40} />
                </li>
                <li>
                    <a>
                        Home
                    </a>
                </li>
                <li>
                    <a>Surveys</a>
                </li>
            </ul>
        </div>

    );
}

export default Header;
