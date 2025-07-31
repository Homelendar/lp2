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
            <div className='platforma'>
                <div className='stat_heading'>
                    <h2>
                        Unique platform for comfortable trading from anywhere in the world
                    </h2>
                </div>
                <div className='text_calculation'>
                    <div className='text_company'>
                        <p>
                            COMPANY NAME is an award-winning platform that allows you to trade the world's financial markets.
                        </p>
                    </div>
                    <div className='calculation'>
                        <div className='text_numbers'>
                            <span>
                                2 <span className='plus'>+</span>
                            </span>
                            <p>
                                Total users
                            </p>
                        </div>
                        <div className='text_numbers'>
                            <span>
                                3410 <span className='plus'>+</span>
                            </span>
                            <p>
                                Orders in the last 24 hours
                            </p>
                        </div>
                        <div className='text_numbers'>
                            <span>
                                250 <span className='plus'>+</span>
                            </span>
                            <p>
                                instrument
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='binan_img'>
                <img src={require('./images/trade_binan_img.png')} alt="" />
            </div>
            <div className='benefits'>
                <div className='benefits__header'>
                    <h2>
                        Take advantage of the many benefits of our trading platform
                    </h2>
                </div>
                <div className='benefits__description'>
                    <p>
                        COMPANY NAME's platform, web trader, and applications for mobile devices and tablets give you the ability to trade anywhere in the world and at any time.
                    </p>
                    <button className='benefits_button spi'>
                        <span className='spi'>
                            Start Trading
                        </span>
                        <img src={require('./images/arrow.svg').default} alt="" />
                    </button>
                </div>
            </div>
            <div className='benefits_cards'>
                <div className='benefits__feature'>
                    <img className='img_cards' src={require('./images/hand_img.svg').default} alt="" />
                    <h3>
                        Free account opening
                    </h3>
                    <p>
                        You do not pay for opening and subsequent maintenance of your cryptocurrency account
                    </p>
                </div>
                <div className='benefits__feature'>
                    <img className='img_cards' src={require('./images/phone_img.svg').default} alt="" />
                    <h3>
                        24/7 Support
                    </h3>
                    <p>
                        You work with your investment manager to help you make effective financial decisions
                    </p>
                </div>
                <div className='benefits__feature'>
                    <img className='img_cards' src={require('./images/rozetka.svg').default} alt="" />
                    <h3>
                        Real-time trading
                    </h3>
                    <p>
                        Trade cryptocurrencies, S&P 500, metals, and other assets at your fingertips.
                    </p>
                </div>
                <div className='benefits__feature'>
                    <img className='img_cards' src={require('./images/money.svg').default} alt="" />
                    <h3>
                        Investments of any amount
                    </h3>
                    <p>
                        The minimum amount depends on the selected investment instrument (value of the cryptocurrency asset)
                    </p>
                </div>
            </div>
            <div className='black_fitch'>
                <div className='black_block'>
                    <div className='play_span_block'>
                        <div className='play_text'>
                            <h3>
                                Achieve your financial goals with COMPANY NAME
                            </h3>
                            <p className=''>
                                Trade bitcoins, S&P 500, gold, EUR/USD and over 100 assets. Get easy access to cryptocurrencies, stock indices, commodities and Forex markets from a single account.
                            </p>
                        </div>
                        <div className='block_text'>
                            <span>
                                We will help you achieve your goals
                            </span>
                            <p>
                                You can trade at absolutely any time from absolutely anywhere in the world. In order to make your trading comfortable, our technical support specialists work 24/7.
                            </p>
                        </div>
                       <div className='block_text'>
                            <span>
                                Quick transactions
                            </span>
                            <p>
                                You can trade at absolutely any time from absolutely anywhere in the world. In order to make your trading comfortable, our technical support specialists work 24/7.
                            </p>
                        </div>
                        <div className='block_text'>
                            <span>
                                Fair payouts
                            </span>
                            <p>
                                You can trade at absolutely any time from absolutely anywhere in the world. In order to make your trading comfortable, our technical support specialists work 24/7.
                            </p>
                        </div>                    
                    </div>
                    <div className='black_img'>
                        <img src={require('./images/pad_black.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className='sixth_block'>
                <div className='central_sixth'>
                    <h3>
                        Just 4 steps to open a trading account
                    </h3>
                </div>
                <div className='sixth_text'>
                    <p>
                        After which you will be able to plunge into professional trading together with COMPANY NAME
                    </p>
                    <button className='farther_button'>
                        <span>
                            Sign up
                        </span>
                    </button>
                </div>
            </div>
            <div className='group_numbers'>
                <div className='numbers_cards'>
                    <img className='img_numbers' src={require('./images/1.svg').default} alt="" />
                    <span>
                        Go to the <a href="#">registration page</a>
                    </span>
                    <p>
                        To get started, go the registration section.
                    </p>
                </div>
                <div className='numbers_cards'>
                    <img className='img_numbers' src={require('./images/2.svg').default} alt="" />
                    <span>
                        Specify user details
                    </span>
                    <p>
                        Enter the contact details of the new user and go to the personal account after successful registration.
                    </p>
                </div>
                <div className='numbers_cards'>
                    <img className='img_numbers' src={require('./images/3.svg').default} alt="" />
                    <span>
                        Make a deposit
                    </span>
                    <p>
                        Fill your account through your personal cabinet in any convenient way, whether it's a credit card or a digital wallet.
                    </p>
                </div>
                <div className='numbers_cards'>
                    <img className='img_numbers' src={require('./images/4.svg').default} alt="" />
                    <span>
                        Start earning
                    </span>
                    <p>
                        Start trading in any asset you like. You will have to choose from more than 250 instruments!
                    </p>
                </div>
            </div>
  </div>
  );
}

export default App;
