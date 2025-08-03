import './App.scss';

function App() {
  return (
  <div className="App">
        <header>
            <div className='header_section'>
                <img src={require('./images/Logo dark.svg').default} alt="" />
                <div className='burger_menu'>
                    <img className='burger_img' src={require('./images/burger_img.svg').default} alt="" />
                    <div className='nav'>
                        <a href="">About Us</a>
                        <a href="">Marketplace</a>
                        <a href="">Accounts and Platforms</a>
                        <a href="">FAQ</a>
                        <div className='first_buttons mobile'>
                            <button className='min_but'>
                                Log in
                            </button>
                            <button className='black_button'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
                <div className='first_buttons desktop'>
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
            <img className='img_group_wan desktop' src={require('./images/img_group.png')} alt="" />
            <img className='img_group_wan mobile' src={require('./images/group_img_adap.svg').default} alt="" />
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
                        <img className='trading_img' src={require('./images/pad_black.png')} alt="" />
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
                <div className='logistics'>
                    <div className='text_location'>
                        <div className='text_h'>
                            <h3>
                                24/7 technical support. 
                                Contact us anytime
                            </h3>
                        </div>
                        <div className='replick'>
                            <p>
                                Our support works non-stop to ensure that you can contact our managers with any question you may have. We are ready to help you and give you sound advice for your success
                            </p>
                            <button className='button_map'>
                                <span>
                                    Sign up
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='map'>
                        <img className='map_img' src={require('./images/white_group.png')} alt="" />
                    </div>
                    <div className='location'>
                        <div className='data'>
                            <span>
                                E-Mail
                            </span>
                            <p>
                                Write an email and you will be answered at any time of the day.
                            </p>
                            <a href="#">support@company-name.com</a>
                        </div>
                        <div className='data'>
                            <span>
                                Our Address
                            </span>
                            <p>
                                Any questions? We're looking forward to your visit!
                            </p>
                            <a href="#">Russia, Moscow, Presnenskaya Embankment 12, Building 2, floor 12, office 37</a>
                        </div>
                        <div className='data'>
                            <span>
                                Phone Number
                            </span>
                            <p>
                                Mon-Fri: 9:00 - 21:00 Moscow Time
                            </p>
                            <a href="#">+3 (712) 674 22 42</a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className='glav_links'>
                        <div className='finite'>
                            <img className='img_logo' src={require('./images/Logo dark.svg').default} alt="" />
                            <p>
                                COMPANY NAME, as well as the web COMPANY-NAME.com, does not provide any services to citizens and residents of the United States, Belgium, Turkey, Israel, Syria, Sudan, Iran, North Korea, Japan, as well as other countries and jurisdictions where said services cannot be provided due to applicable laws.
                            </p>
                            <div className='span_engine'>
                                <span>
                                    COMPANY NAME 2022 ©
                                </span>
                                <span>
                                    All rights reserved
                                </span>
                            </div>
                        </div>
                        <div className='general_container'>
                            <div className='offer_links' >
                                <span>
                                    Main
                                </span>
                                <a href="#">Sign up</a>
                                <a href="#">Log into your account</a>
                            </div>
                            <div className='offer_links'>
                                <span>
                                    Marketplace
                                </span>
                                <a href="#">Real-Time Markets</a>
                                <a href="#">Forex</a>
                                <a href="#">Commodities</a>
                                <a href="#">Stocks</a>
                                <a href="#">Index</a>
                                <a href="#">Cryptocurrencies</a>
                            </div>
                            <div className='offer_links'>
                                <span>
                                    Accounts and platforms
                                </span>
                                <a href="#">Account types</a>
                                <a href="#">Our platform</a>
                                <span>
                                    FAQ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pp'>
                        <p>
                            Trading contracts for difference and currency pairs carries a high risk of loss due to the fact that such trading is realized through lending, which can lead to the complete loss of your capital. This type of trading is not suitable for all categories of investors. Click here for the full text of our Risk Warning and before you start trading, make sure that you understand all the risks, taking into account your experience in this area. If necessary, contact independent consultants. The information contained on this website and in the documents posted on it is of a general nature and does not take into account your personal circumstances, financial situation or needs. In order to assess whether trading in such financial assets is suitable for you, you should carefully study our Client Agreement and seek independent expert advice. COMPANY NAME is a trademark of COMPANY NAME LTD. Company Number: 26350 BC 2021 Registered Address: Suite 305, Griffith Corporate Center, Kingstown, St. Vincent and the Grenadines. COMPANY-NAME.com transactions are processed by Dotwallet OÜ. Company number: 16253252. Registration address: Harju maakond, Tallinn, Kesklinna linnaosa, Tuukri tn 19-315, 10120, Estonia. COMPANY-NAME.com © 2022 - All rights reserved.
                        </p>
                    </div>
                </footer>
  </div>
  );
}

export default App;
