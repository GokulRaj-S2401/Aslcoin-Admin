import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import Community from "./pages/Community";
import Wallet from "./pages/Wallet";
import Transfer from "./pages/Transfer";
import { Web3ModalProvider } from "./components/wallet/Web3ModalProvider";
import Orders from "./pages/Orders";

const isAuthenticated = () => {
  const token = localStorage.getItem("admintoken");
  return !!token;
};

function ProtectedRoute({ element, path }) {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Web3ModalProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Index />}>
            <Route index element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="user_management" element={<ProtectedRoute element={<UserManagement />} />} />
            <Route path="wallet" element={<ProtectedRoute element={<Wallet />} />} />
            <Route path="transfer" element={<ProtectedRoute element={<Transfer />} />} />
            <Route path="orders" element={<ProtectedRoute element={<Orders />} />} />
            <Route path="community" element={<ProtectedRoute element={<Community />} />} />
            <Route path="kyc_document" element={<ProtectedRoute element={<KycDocument />} />} />
            <Route path="available_networks" element={<ProtectedRoute element={<AvailableNetworks />} />} />
            <Route path="currencies" element={<ProtectedRoute element={<Currencies />} />} />
            <Route path="deposit_withdraw" element={<ProtectedRoute element={<DepositWithdraw />} />} />
            <Route path="transaction_history" element={<ProtectedRoute element={<TransactionHistory />} />} />
            <Route path="staking" element={<ProtectedRoute element={<Staking />} />} />
            <Route path="blogs" element={<ProtectedRoute element={<Blogs />} />} />
            <Route path="wallet_request" element={<ProtectedRoute element={<WalletRequest />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3ModalProvider>
  );
}

export default App;
