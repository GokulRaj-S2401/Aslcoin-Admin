import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import KycDocument from "./pages/KycDocument";
import AvailableNetworks from "./pages/AvailableNetworks";
import TransactionHistory from "./pages/TransactionHistory";
import Staking from "./pages/Staking";
import Currencies from "./pages/Currencies";
import Blogs from "./pages/Blogs";
import WalletRequest from "./pages/WalletRequest";
import DepositWithdraw from "./pages/DepositWithdraw";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { Provider } from "react-redux";
// import { store } from "./store/store";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const body = document.body;
  //   body.classList.toggle('dark-mode', darkMode);
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    // <Provider store={store}>
      <BrowserRouter>
         <ToastContainer />
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path="user_management" element={<UserManagement />} />
            <Route path="kyc_document" element={<KycDocument />} />
            <Route path="available_networks" element={<AvailableNetworks />} />
            <Route path="currencies" element={<Currencies />} />
            <Route path="deposit_withdraw" element={<DepositWithdraw/>} />
            <Route
              path="transaction_history"
              element={<TransactionHistory />}
            />
            <Route path="staking" element={<Staking />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="wallet_request" element={<WalletRequest />} />

          </Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
