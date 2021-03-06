import { Navbar, Welcome, Services, Transactions, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar items={["Market", "Exchange", "Wallets"]} />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer items={["Market", "Exchange", "Wallets"]} />
    </div>
  );
}

export default App;
