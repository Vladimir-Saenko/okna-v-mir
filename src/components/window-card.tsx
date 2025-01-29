/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
  // Button,
} from "@material-tailwind/react";

interface CardProps {
  imageSrc: string;
  headerText: string;
  description: string;
}

export function WindowCard(cardProps: CardProps) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={cardProps.imageSrc} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {cardProps.headerText}
        </Typography>
        <Typography>{cardProps.description}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
