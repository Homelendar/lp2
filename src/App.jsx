import './App.scss';

function App() {
  return (
  <div className="App">
        <header>
            <div className='header_section'>
                    <img src={require('./images/Logo dark.svg').default} alt="" />
                <div className='nav'>
                    <a href="">About Us</a>
                    <a href="">Marketplace</a>
                    <a href="">Accounts and Platforms</a>
                    <a href="">FAQ</a>
                </div>
                <div className='first_buttons'>
                    <button className='min_but'>
                        Log in
                    </button>
                    <button className='black_button'>
                        Sign up
                    </button>
                </div>
            </div>
        </header>
        <div className='hero'>
            <div className='hero_section'>
                <span>
                    TRUSTED INVESTMENT PLATFORM
                </span>
                <h1>
                    Earn in comfort and safety
                </h1>
            </div>
            <div className='hero_section'>
                <p>
                    We provide you with a synthesis of the best features and convenient trading. Enjoy trading with our modernized platform.
                </p>
                <div className='buttons_first'>
                    <button className='green_but white'>
                        <span className='white'>
                            Start Trading
                        </span>
                        <img className='img_arrow' src={require('./images/img_but_micro.svg').default} alt="" />
                    </button>
                    <button className='demo_btn'>
                        Try out the Demo
                    </button>
                </div>
            </div>
        </div>
        <div className='img_group'>
             <img className='img_group_wan' src={require('./images/img_group.png')} alt="" />
        </div>
        <div className='second_section'>
            <h2>
                Our partners include world market leaders
            </h2>
            <div className='img_group2'>
                <img src={require('./images/binan_img.svg').default} alt="" />
                <img src={require('./images/coin_img.svg').default} alt="" />
                <img src={require('./images/ivest_img.svg').default} alt="" />
                <img src={require('./images/bloc_img.svg').default} alt="" />
            </div>
        </div>
        <div>
            <div>
                <h2>
                    Unique platform for comfortable trading from anywhere in the world
                </h2>
                <p>
                    COMPANY NAME is an award-winning platform that allows you to trade the world's financial markets.
                </p>

            </div>
        </div>   
  </div>
  );
}

export default App;
