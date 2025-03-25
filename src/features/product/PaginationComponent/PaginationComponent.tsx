import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pagination, PaginationItem, Stack } from "@mui/material";

type props = {
  totalPages?: number;
  currentPage?: number;
};

export const PaginationComponent = ({
  totalPages = 1,
  currentPage = 1,
}: props) => {
  // theme mui

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
        light: "#ae2525",
        dark: "#000000",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="my-[40px] w-full flex justify-center">
      {totalPages > 1 && (
        <Stack spacing={2}>
          {/* <ThemeProvider theme={theme}> */}
          <Pagination
            count={totalPages}
            page={Number(currentPage)}
            // onChange={(_, num) => dispatch(setCurrentPages(num))}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
            sx={{
              color: "red",
            }}
            renderItem={(item) => (
              <ThemeProvider theme={theme}>
                <PaginationItem
                  // вылетает ошибка если ...item не поставить выше стилей
                  {...item}
                  variant="text"
                  color="primary"
                  sx={{
                    width: "38px",
                    height: "50px",
                    color: "#000000",
                    background: "#ffffff",
                    border: "1px solid #E5E5E5",
                  }}
                />
              </ThemeProvider>
            )}
          />
          {/* </ThemeProvider> */}
        </Stack>
      )}
    </div>
  );
};
