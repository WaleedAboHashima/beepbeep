import { Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "./Pages/Auth/login";
import Sidebar from "./Pages/Global/Sidebar";
import Main from "./Pages/Main";
import PrivateSelection from "./Pages/PrivateSelect";
import Reports from "./Pages/Reports";
import SendNotif from "./Pages/SendNotif";
import CreateAccount from "./Pages/CreateAccount";
import Current from "./Pages/Orders/Current";
import RestAndMarket from "./Pages/RestandMarket";
import Captain from "./Pages/Captain";
import Delivered from "./Pages/Orders/Delivered";
import Denied from "./Pages/Orders/Denied";
import Map from "./Pages/Map";
import Active from "./Pages/Places/Active";
import Forbidden from "./Pages/Places/Forbidden";
import Requests from "./Pages/Places/Requests";
import AddStore from "./Pages/Places/AddStore";
import { isMobile } from "react-device-detect";
import { Box } from "@mui/material";
import Attendace from "./Pages/Attendance/Attendace";

function App() {
  const cookies = new Cookies();
  const verifyToken = "#%!TkzsOkcaKenasdN";
  return (
    <>
      {isMobile ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
        >
          برجاء تفعيل وضع الحاسوب للاستمرار
        </Box>
      ) : (
        <>
          {cookies.get("_auth_token") &&
          cookies.get("_auth_verify_token").startsWith(verifyToken) ? (
            <>
              <div className="App" dir="rtl">
                <Sidebar />
                <main className="content">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="prselection" element={<PrivateSelection />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="sendnotif" element={<SendNotif />} />
                    <Route path="createaccount" element={<CreateAccount />} />
                    <Route path="markets" element={<RestAndMarket />} />
                    <Route path="captain" element={<Captain />} />
                    <Route path="current" element={<Current />} />
                    <Route path="delivered" element={<Delivered />} />
                    <Route path="denied" element={<Denied />} />
                    <Route path="activePlaces" element={<Active />} />
                    <Route path="forbiddenPlaces" element={<Forbidden />} />
                    <Route path="joinRequests" element={<Requests />} />
                    <Route path="addStoreAcc" element={<AddStore />} />
                    <Route path="attendance" element={<Attendace />} />
                    <Route path="map/:inlat/:inlong/:outlat/:outlong/:intime/:outtime" element={<Map />} />
                  </Routes>
                </main>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
