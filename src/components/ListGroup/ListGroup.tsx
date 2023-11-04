import React, { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
// {items: [], heading: string}
const List = styled.ul`
  list-style: none;
  padding: 0;
  border-bottom: 1px solid red;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  border: 1px solid #ccc;
  padding: 10px 5px;
  border: collapse;
  background-color: ${(props) => (props.active ? "red" : "none")};
`;
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item:string => void)
  onSelectItem?: (item: string) => void;
}

const ListGroup = (props: ListGroupProps) => {
  const { items, heading } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number): void => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 ? (
        <p>No Item found</p>
      ) : (
        <List>
          {items.map((item, index) => {
            return (
              <ListItem
                key={item}
                active={index === selectedIndex}
                onClick={() => {
                  handleClick(index);
                }}
              >
                {item}
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ListGroup;
