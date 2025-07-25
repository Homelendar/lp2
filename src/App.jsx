import './App.scss';

function App() {
  return (
  <div className="App">
        <header>
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
                    <button className='green_but'>
                        <span className='white'>
                            Start Trading
                        </span>
                        <img src={require('./images/img_but_micro.svg').default} alt="" />
                    </button>
                    <button className='demo_btn'>
                        Try out the Demo
                    </button>
                </div>
            </div>
             <div className='img_group'>
                <img src={require('./images/img_group.png')} alt="" />
            </div>
        </div>
  </div>
  );
}

export default App;
