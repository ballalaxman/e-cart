import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;
function App() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      //send state as sending request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-739f6-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      //Send state request is Successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Send Request to Database Successfully",
          type: "success",
        })
      );
    };

    sendRequest().catch((err) => {
      //sent state as Error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Send Request Failed",
          type: "error",
        })
      );
    });
  }, [cart]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
