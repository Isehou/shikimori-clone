import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Pagination } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#173a5e",
    },
    secondary: {
      main: "#173a5e",
    },
  },
});

export default function Palette(props) {
  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={100}
        page={props.page}
        onChange={handleChangePage}
        color="primary"
        shape="rounded"
        hideNextButton="false"
        hidePrevButton="false"
      ></Pagination>
    </ThemeProvider>
  );
}
