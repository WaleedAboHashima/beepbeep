import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
const Forbidden = () => {
  const navigator = useNavigate();
  const rows = [
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
    {
      storeName: "ميِّت عُّقْبة",
      storeAdress: "",
      closePoint: "خلف العتبه",
      mobileNumber: "0123456789",
      averageOrders: 100,
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "storeName", headerName: "الاسم", flex: 1 },
    {
      field: "storeAdress",
      headerName: "عنوان المتجر",
      flex: 1,
      renderCell: ({ row: { location } }) => {
        return (
          <Box>
            <IconButton onClick={() => navigator("/map")}>
              <LocationOnIcon color="error" />
            </IconButton>
          </Box>
        );
      },
    },
    { field: "closePoint", headerName: "اقرب نقطه داله", flex: 1 },
    {
      field: "mobileNumber",
      headerName: "رقم الهاتف",
      type: "number",
      flex: 1,
    },
    {
      field: "averageOrders",
      headerName: "معدل الطلبات اليومي",
      type: "number",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "الأجرائات",
      flex: 1,
      renderCell: ({ row: { id } }) => {
        return (
          <Box>
            <Tooltip title="صوره المتجر" placement="right">
              <IconButton>
                <ImageOutlinedIcon sx={{ color: "#89CFF0" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="رفع الحظر" placement="left">
              <IconButton>
                <DoNotDisturbAltIcon color="success" />
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
      justifyContent="center"
      textAlign="centert"
      width="100%"
      height="100%"
    >
      <DataGrid
        rows={rows.map((user, index) => ({
          id: index + 1,
          ...user,
        }))}
        rowsid
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
        autoPageSize
        localeText={arabicLocaleText}
        sx={{ "& .MuiTablePagination-root": { direction: "ltr" } }}
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
export default Forbidden;
