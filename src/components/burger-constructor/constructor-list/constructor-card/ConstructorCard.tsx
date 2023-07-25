import styles from "./constructor-card.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { ItemTypes } from "../../../../utils/constants";
import React, { FC } from "react";
import { TConstructorCard, TConstructorIngredient } from "../../../../types";
import { useAppDispatch } from "../../../../store/hooks/redux";
import {
  moveIngredient,
  removeIngredient,
} from "../../../../store/actions/BurgerConstructorActions";
import { decreaseQuantity } from "../../../../store/actions/BurgerIngredientActions";

export const ConstructorCard: FC<TConstructorCard> = ({
  ingredient,
  index,
}) => {
  const dispatch = useAppDispatch();
  const { name, price, image, uuid, _id } = ingredient;

  const ref = React.useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CONSTRUCTOR_CARD,
    item: () => {
      return { uuid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  function handleClose(uuid: string, _id: string) {
    dispatch(removeIngredient(uuid));
    dispatch(decreaseQuantity(_id));
  }

  const [, dropRef] = useDrop({
    accept: ItemTypes.CONSTRUCTOR_CARD,
    hover: (item: TConstructorIngredient, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const clientOffset: XYCoord | null = monitor.getClientOffset();

      if (clientOffset && ref && ref.current) {
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
      }

      dispatch(moveIngredient({ dragIndex, hoverIndex }));

      item.index = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <div
      className={`${styles.item} ${isDragging && styles.item_drag}`}
      ref={ref}
      data-testid="constructorElement"
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
