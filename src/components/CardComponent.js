import React from "react";
import { Card, Text } from "@nextui-org/react";

function CardComponent(props) {
  return (
    <Card key={props.id} isHoverable css={{ width: "300px" }}>
      <Card.Image
        src={props.src}
        width="100%"
        height="450px"
        objectFit="cover"
        style={{ display: "block" }}
        alt="Film Poster"
      />
      <Text h4 css={{ padding: "$5 $8", lineHeight: "$sm" }}>
        {props.title}
      </Text>
    </Card>
  );
}

export default CardComponent;
