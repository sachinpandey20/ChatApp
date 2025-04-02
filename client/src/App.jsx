import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Routes , Route} from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import Auth from "./pages/auth";
// import Chat from "./pages/chat";
// import Profile from "./pages/profile";
// import { useAppStore } from "./store";

// const PrivateRoute = ({ Children }) => {
//   const { userInfo } = useAppStore();
//   console.log(userInfo);
//   const isAuthenticated = !!userInfo;
//   return isAuthenticated ? Children : <Navigate to="/auth" />;
// };

// const AuthRoute = ({ Children }) => {
//   const { userInfo } = useAppStore();
//   console.log(userInfo);
//   const isAuthenticated = !!userInfo;
//   return isAuthenticated ? <Navigate to="/chat" /> : Children;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/auth"
//           element={
//             <AuthRoute>
//               <Auth />
//             </AuthRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/chat"
//           element={
//             <PrivateRoute>
//               <Chat />
//             </PrivateRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/auth" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
