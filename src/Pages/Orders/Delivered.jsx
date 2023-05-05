import { Box, Tooltip, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import LocationOnIconOutline from "@mui/icons-material/LocationOn";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const Delivered = () => {
  const navigator = useNavigate();
  const rows = [
    //   deliveryTime: "30 دقيقه",
    //   deliveryName: "احمد محسن",
    //   deliveryAdress: "شارع القارون",
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات فوريه",
      deliveryTime: "30 دقيقه",
      deliveryName: "احمد محسن",
      deliveryNumber: "12345",
      orderInfo: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات المحافظات",
      deliveryTime: "30 دقيقه",
      deliveryName: "احمد محسن",
      deliveryNumber: "12345",
      orderInfo: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات المحافظات",
      orderInfo: 0,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات المحافظات",
      orderInfo: 500,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات المحافظات",
      orderInfo: 1000,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات فوريه",
      orderInfo: 500,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات المحافظات",
      orderInfo: 900,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات فوريه",
      deliveryTime: "30 دقيقه",
      deliveryName: "احمد محسن",
      deliveryNumber: "12345",
      orderInfo: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      orderPrice: "100",
      orderAdress: "شارع احمد علي",
      deliveryCost: "15",
      notes: "لا يوجد",
      orderType: "طلبات فوريه",
      orderInfo: 0,
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "storeName",
      headerName: "اسم المتجر",
      flex: 1,
    },
    {
      field: "storeAdress",
      headerName: "عنوان المتجر",
      renderCell: ({ row: { storeAdress } }) => {
        return (
          <Box>
            <Tooltip title="الخريطه" placement="right">
              <IconButton
                onClick={() => {
                  navigator(`/map/${storeAdress}`);
                }}
              >
                <LocationOnIconOutline sx={{ color: "red" }} />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
      flex: 1,
    },
    { field: "orderAdress", headerName: "عنوان الطلب", flex: 1 },
    { field: "orderPrice", headerName: "سعر الطلب", flex: 1 },
    { field: "orderType", headerName: "نوع الطلب", flex: 1 },
    { field: "deliveryCost", headerName: "كلفه التوصيل", flex: 1 },
    { field: "notes", headerName: "الملاحظات", flex: 1 },
    {
      field: "info",
      headerName: "حاله الطلب",
      flex: 3,
      renderCell: ({ row: { orderInfo } }) => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            backgroundColor={
              orderInfo === 100
                ? "Green"
                : orderInfo === 500
                ? "Orange"
                : orderInfo === 900
                ? "Red"
                : orderInfo === 1000
                ? "#20525C"
                : "#0071bd"
            }
            borderRadius="4px"
          >
            {orderInfo === 100 ? (
              <CheckOutlinedIcon sx={{ color: "white", ml: 1 }} />
            ) : orderInfo === 500 ? (
              <HourglassEmptyOutlinedIcon sx={{ color: "white", ml: 1 }} />
            ) : orderInfo === 900 ? (
              <CloseOutlinedIcon sx={{ color: "white", ml: 1 }} />
            ) : orderInfo === 1000 ? (
              <DownloadDoneIcon sx={{ color: "white", ml: 1 }} />
            ) : (
              <MoreHorizOutlinedIcon sx={{ color: "white", ml: 1 }} />
            )}
            <Typography color="white" sx={{ color: "white", ml: 1 }}>
              {orderInfo === 100
                ? "تم التسليم"
                : orderInfo === 500
                ? "الطلب مؤجل"
                : orderInfo === 900
                ? "الطلب مرفوض"
                : orderInfo === 1000
                ? "تم التسليم ولاكن مؤجل"
                : "في الانتظار"}
            </Typography>
          </Box>
        );
      },
    },
    { field: "deliveryTime", headerName: "مده التوصيل", flex: 1 },
    { field: "deliveryName", headerName: "اسم السائق", flex: 1 },
    { field: "deliveryNumber", headerName: "هاتف السائق", flex: 1 },
    {
      filed: "actions",
      headerName: "أجراءات",
      flex: 1.2,
      renderCell: ({ row: { orderInfo, orderType } }) => {
        return (
          <Box>
            <Tooltip title="صوره الطلب" placement="right">
              <IconButton
                onClick={() => {
                  // setFormOpen(!formOpen);
                  // setUserDetails({ id: _id, name: username });
                }}
              >
                <ImageOutlinedIcon sx={{ color: "#89CFF0" }} />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "#ffc90b",
      }}
      height="100%"
      alignItems="center"
    >
      <DataGrid
        disableRowSelectionOnClick
        checkboxSelection
        autoPageSize
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          border: "1px solid black",
          "& .MuiTablePagination-root": { direction: "ltr" },
        }}
        rows={rows
          .filter((user) => user.orderInfo === 100)
          .map((user, index) => ({
            id: index + 1,
            ...user,
          }))}
        columns={columns}
        localeText={arabicLocaleText}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
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
  noRowsLabel: "لا تجود كروت اتصالات",
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

export default Delivered;
