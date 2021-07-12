import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import { SnackbarProvider } from "notistack";

//Global components
import { ModalWrapper } from "./components/global/modal.global";
import { SnackBarWrapper } from "./components/global/snackBar.global";
export const IdeasApp = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <ModalWrapper onHide={null} />
        <SnackBarWrapper onHide={null} />
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  );
};
