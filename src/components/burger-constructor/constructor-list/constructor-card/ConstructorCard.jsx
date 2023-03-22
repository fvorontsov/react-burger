import styles from "./constructor-card.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../../../utils/constants";
import { useDispatch } from "react-redux";
import React from "react";
import {
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
} from "../../../../services/actions/burger-constructor";
import { DECREASE_INGREDIENT_QUANTITY } from "../../../../services/actions/burger-ingredients";

export const ConstructorCard = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const { name, price, image, uuid, _id } = ingredient;

  const ref = React.useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CONSTRUCTOR_CARD,
    item: () => {
      return { uuid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  function handleClose(uuid, _id) {
    dispatch({
      type: REMOVE_INGREDIENT,
      uuid: uuid,
    });
    dispatch({
      type: DECREASE_INGREDIENT_QUANTITY,
      _id: _id,
    });
  }

  const [, dropRef] = useDrop({
    accept: ItemTypes.CONSTRUCTOR_CARD,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch({
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });

      item.index = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <div
      className={`${styles.item} ${isDragging && styles.item_drag}`}
      ref={ref}
    >
      <DragIcon type={"primary"} />
      <ConstructorElement
        text={name}
        thumbnail={image}
        price={price}
        handleClose={() => handleClose(uuid, _id)}
      />
    </div>
  );
};
