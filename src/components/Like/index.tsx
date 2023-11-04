import React, { useState } from "react";
import styles from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => {
        onClick();
        setIsActive(() => !isActive);
        console.log({ isActive, otherwise: !isActive });
      }}
      className={styles.btn}
    >
      {isActive ? (
        <AiFillHeart color={"#ff4e4e"} size={50} />
      ) : (
        <AiOutlineHeart size={50} />
      )}
    </button>
  );
};

export default Button;
