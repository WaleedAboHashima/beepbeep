import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Item = ({
  title,
  to,
  selected,
  setSelected,
  customClick,
  style,
  textAlign,
  icon,
  show,
}) => {
  return (
    <MenuItem
      active={window.location.pathname === to ? (selected = title) : null}
      style={
        style
          ? style
          : {
              color: "black",
              border: "2px solid black",
              borderRadius: "5px",
              margin: 15,
            }
      }
      onClick={
        customClick
          ? customClick
          : () =>
              window.location.pathname === to
                ? setSelected(title)
                : setSelected(null)
      }
      dir="rtl"
    >
      {icon ? (
        <Box display="flex" justifyContent="space-between">
          <Typography
            textAlign={textAlign ? textAlign : "right"}
            fontSize="18px"
          >
            {title}
          </Typography>
          {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Box>
      ) : (
        <Typography textAlign={textAlign ? textAlign : "right"} fontSize="18px">
          {title}
        </Typography>
      )}

      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // //Variables
  const [show, setShow] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const navigator = useNavigate();
  const cookies = new Cookies();
  const [selected, setSelected] = useState(window.location.pathname);
  return (
    <Box
      sx={{
        height: "100%",
        borderLeft: "5px solid black",
        "& .pro-sidebar-inner": {
          background: `#ffc90b !important`,
        },
        "& .pro-inner-item": { padding: "5px 35px 5px 20px !important" },
        "& .pro-inner-item:hover": {
          color: `#0071bd !important`,
        },
        "& .pro-menu-item.active": {
          borderColor: `#0071bd !important`,
          color: `#0071bd !important`,
        },
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          {/* Logo and Icon */}
          {/* User */}
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="../../assets/LogoSm.png"
                alt="profile-user"
                width="187px"
                height="105px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                onClick={() => navigator("/")}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color="green"
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {cookies.get("_auth_verify")}
              </Typography>
            </Box>
          </Box>
          {/* Menu Items */}
          <Box margin="15% 0">
            <Item
              title="الطلبات"
              style={{
                color: "black",
                border: "2px solid black",
                borderRadius: "5px",
                margin: 15,
              }}
              icon
              show={show}
              selected={selected}
              setSelected={setSelected}
              customClick={() => setShow(!show)}
            />
            {show ? (
              <>
                <Item
                  title="الحاليه"
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  to="/current"
                  textAlign="center"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="تم تسليمها"
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  to="/delivered"
                  selected={selected}
                  setSelected={setSelected}
                  textAlign="center"
                />
                <Item
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  title="تم الغائها"
                  to="/denied"
                  textAlign="center"
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            ) : null}
            <Item
              title="المطاعم و المحلات"
              style={{
                color: "black",
                border: "2px solid black",
                borderRadius: "5px",
                margin: 15,
              }}
              icon
              show={showRest}
              selected={selected}
              setSelected={setSelected}
              customClick={() => setShowRest(!showRest)}
            />
            {showRest ? (
              <>
                <Item
                  title="النشطه"
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  to="/activePlaces"
                  textAlign="center"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="المحظوره"
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  to="/forbiddenPlaces"
                  selected={selected}
                  setSelected={setSelected}
                  textAlign="center"
                />
                <Item
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  title="طلبات الانظمام"
                  to="/joinRequests"
                  textAlign="center"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  style={{
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "5px",
                    margin: "5px 40px",
                  }}
                  title="انشاء حساب متجر"
                  to="/addStoreAcc"
                  textAlign="center"
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            ) : null}
            <Item
              title="كباتن التوصيل"
              to="/captain"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="انشاء حساب"
              to="/createaccount"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="مشاهده الجميع"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="تحديد خاص"
              to="/prselection"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="التقارير"
              to="/reports"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="ارسال اشعارات"
              to="/sendnotif"
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              style={{
                textAlign: "right",
                color: "red",
                border: "2px solid red",
                borderRadius: "5px",
                margin: "60px 15px",
                fontSize: "18px",
              }}
              onClick={() => {
                cookies.remove("token");
                window.location.pathname = "/";
              }}
              dir="rtl"
            >
              تسجيل الخروج
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
