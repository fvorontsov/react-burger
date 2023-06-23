import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FC, useEffect } from "react";
import {
  ordersWSConnect,
  ordersWSDisconnect,
} from "../../store/actions/OrdersActions";
import styles from "./profile-orders.module.css";
import { OrderList } from "../../components/order/order-list/OrderList";
import { getCorrectOrders } from "../../utils/utils";

export const ProfileOrdersPage: FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((s) => s.ordersSliceReducer.orders);

  const ingredientsData = useAppSelector(
    (s) => s.ingredientsReducer.ingredients
  );

  const correctOrders = orders && getCorrectOrders(orders, ingredientsData);

  const accessToken = localStorage
    .getItem("accessToken")
    ?.replace("Bearer ", "");
  const token = accessToken ? `?token=${accessToken}` : "";

  useEffect(() => {
    dispatch(ordersWSConnect(`wss://norma.nomoreparties.space/orders${token}`));
    return () => {
      dispatch(ordersWSDisconnect());
    };
  }, [dispatch, token]);

  return (
    <div className={styles.page}>
      <OrderList orders={correctOrders} />
    </div>
  );
};
