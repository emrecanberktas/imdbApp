import React from "react";
import { Card, Row, Text } from "@nextui-org/react";

function SwiperCard(props) {
  return (
    <Card isHoverable key={props.id}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.src}
          alt={props.title}
          objectFit="cover"
          width="100%"
          height={350}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row justify="space-between" align="center">
          <Text b>{props.title}</Text>
          <Text
            css={{
              color: "$accents7",
              fontweight: "$semibold",
              fontsize: "$sm",
            }}
          >
            {props.vote_average.toFixed(1)}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default SwiperCard;
