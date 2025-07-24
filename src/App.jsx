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
  </div>
  );
}

export default App;
