import {
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAttendance } from "../../apis/Attendance/GetAttendance";

const Attendace = () => {
  const dispatch = useDispatch();
  const todayDate = new Date();
  const todayMonth = todayDate.getMonth() + 1;
  const todayDay = todayDate.getDay();
  const todayYear = todayDate.getFullYear();
  const [filterModel, setFilterModel] = useState({
    items: [{ field: "date", operator: "contains", value: `${todayYear} - ${todayMonth} - ${todayDay}` }],
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
        const newCheckInTime = checkInDate.toLocaleTimeString("en-GB");
        return newCheckInDate + " " + newCheckInTime;
      },
    },
    {
      field: "checkOut",
      headerName: "تاريخ الانصراف",
      flex: 1,
      valueGetter: (data) => {
        const checkOutDate = new Date(data.row.checkOut);
        const newCheckOutDate = checkOutDate.toLocaleDateString("en-GB");
        const newCheckOutTime = checkOutDate.toLocaleTimeString("en-GB");
        return newCheckOutDate + " " + newCheckOutTime;
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

  noResultsOverlayLabel: "لا توجد نتائج",
  noRowsLabel: "لا يوجد سجلات حضور اليوم",
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
