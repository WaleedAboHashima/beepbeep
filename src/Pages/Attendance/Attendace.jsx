import {
  Box,
  Backdrop,
  CircularProgress,
  Tooltip,
  IconButton,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAttendance } from "../../apis/Attendance/GetAttendance";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
const Attendace = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const todayDate = new Date();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDay();
  const todayYear = todayDate.getFullYear();
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        field: "date",
        operator: "contains",
        value: `${todayYear} - ${todayMonth} - ${todayDay}`,
      },
    ],
  });
  const state = useSelector((state) => state.GetAttendance);
  const columns = [
    {
      field: "captin_fullname",
      headerName: "اسم الكابتن",
      flex: 1,
      valueGetter: (data) => data.row.user.captin_fullname,
    },
    {
      field: "phone",
      headerName: "الهاتف",
      flex: 1,
      valueGetter: (data) => data.row.user.phone,
    },
    {
      headerName: "الموقع",
      renderCell: ({
        row: {
          _id,
          checkIn_lat,
          checkIn_long,
          checkOut_lat,
          checkOut_long,
          checkIn,
          checkOut,
        },
      }) => {
        const checkinTime = new Date(checkIn);
        const checkoutTime = new Date(checkOut);
        let CheckInHours = checkinTime.getHours();
        let CheckInMin = checkinTime.getMinutes();
        let CheckInSeconds = checkinTime.getSeconds();
        const CheckInAMPM = CheckInHours >= 12 ? "PM" : "AM";
        CheckInHours = CheckInHours % 12 || 12;
        CheckInMin = CheckInMin < 10 ? "0" + CheckInMin : CheckInMin;
        CheckInSeconds = CheckInSeconds < 10 ? "0" + CheckInSeconds : CheckInSeconds;
        const formattedCheckInTime =
        CheckInHours + ":" + CheckInMin + ":" + CheckInSeconds + " " + CheckInAMPM;
        let hours = checkoutTime.getHours();
        let minutes = checkoutTime.getMinutes();
        let seconds = checkoutTime.getSeconds();
        const amOrPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        const formattedCheckOutTime =
          hours + ":" + minutes + ":" + seconds + " " + amOrPm;
        return (
          <Box key={_id}>
            <Tooltip title="الموقع" placement="left">
              <IconButton
                onClick={() =>
                  navigator(
                    `/map/${checkIn_lat}/${checkIn_long}/${checkOut_lat}/${checkOut_long}/${formattedCheckInTime}/${formattedCheckOutTime}`
                  )
                }
              >
                <LocationOnIcon color="error" />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
    {
      field: "governorate",
      headerName: "المحافظه",
      flex: 1,
      valueGetter: (data) =>
        data.row.user.governorate === "Cairo" ? "بغداد" : "الدوحه",
    },
    {
      field: "date",
      headerName: "التاريخ",
      flex: 1,
      valueGetter: (data) => {
        const date = new Date(data.row.date);
        const month = date.getMonth() + 1;
        const day = date.getDay();
        const year = date.getFullYear();
        return `${year} - ${month} - ${day}`;
      },
    },
    {
      field: "checkIn",
      headerName: " تاريخ الحضور و الوقت",
      flex: 1,
      valueGetter: (data) => {
        const checkInDate = new Date(data.row.checkIn);
        const newCheckInDate = checkInDate.toLocaleDateString("en-GB");
        let hours = checkInDate.getHours();
        let minutes = checkInDate.getMinutes();
        let seconds = checkInDate.getSeconds();
        const amOrPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        const formattedTime =
          amOrPm + " " + hours + ":" + minutes + ":" + seconds;
        return formattedTime + " " + newCheckInDate;
      },
    },
    {
      field: "checkOut",
      headerName: "تاريخ الانصراف",
      flex: 1,
      valueGetter: (data) => {
        if (data.row.checkOut) {
          const checkOutDate = new Date(data.row.checkOut);
          const newCheckOutDate = checkOutDate.toLocaleDateString("en-GB");
          let hours = checkOutDate.getHours();
          let minutes = checkOutDate.getMinutes();
          let seconds = checkOutDate.getSeconds();
          const amOrPm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          const formattedTime =
            amOrPm + " " + hours + ":" + minutes + ":" + seconds;
          return formattedTime + " " + newCheckOutDate;
        } else {
          return "";
        }
      },
    },
    { field: "totalHours", headerName: "اجمالي الساعات", flex: 1 },
  ];
  useEffect(() => {
    dispatch(GetAttendance());
  }, [dispatch]);
  return (
    <>
      {state.loading ? (
        <Box height="100%" width="100%">
          <Backdrop sx={{ color: "#fff" }} open={state.loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      ) : (
        <Box
          display="flex"
          sx={{
            backgroundColor: "#ffc90b",
          }}
          height="100%"
          alignItems="center"
        >
          {state.data.attendances ? (
            <DataGrid
              disableRowSelectionOnClick
              checkboxSelection
              filterModel={filterModel}
              onFilterModelChange={(model) => setFilterModel(model)}
              autoPageSize
              sx={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                border: "1px solid black",
                "& .MuiTablePagination-root": { direction: "ltr" },
              }}
              rows={state.data.attendances.map((user, index) => ({
                id: index + 1,
                ...user,
              }))}
              columns={columns}
              localeText={arabicLocaleText}
              components={{ Toolbar: GridToolbar }}
            />
          ) : (
            <DataGrid rows={[]} columns={[]} />
          )}
        </Box>
      )}
    </>
  );
};

const arabicLocaleText = {
  toolbarDensity: "كثافة",
  toolbarDensityLabel: "كثافة",
  toolbarDensityCompact: "مضغوط",
  toolbarDensityStandard: "معياري",
  toolbarDensityComfortable: "مريح",
  toolbarColumns: "أعمدة",
  toolbarFilters: "تصفية",
  filterOperatorAnd: "Custom And",
  filterOperatorOr: "Custom Or",
  filterValuePlaceholder: "Custom Value",
  toolbarFiltersTooltipHide: "إخفاء الفلاتر",
  toolbarFiltersTooltipShow: "عرض الفلاتر",

  noResultsOverlayLabel: "لا يوجد سجلات حضور اليوم",
  noRowsLabel: "لا توجد نتائج",
  toolbarFiltersTooltipActive: (count) =>
    `${count} ${count === 1 ? "فلتر" : "فلاتر"}`,
  toolbarExport: "تصدير",
  toolbarExportPrint: "طباعه",
  toolbarExportCSV: "CSV تنزيل",
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} صفوف محددة`
      : `${count.toLocaleString()} صف محدد`,
};

export default Attendace;
