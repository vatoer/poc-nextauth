import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const listOfMessages = [
  "Mudah, cepat dan aman",
];

export const CardBanner = () => {
  const randomMessage =
    listOfMessages[Math.floor(Math.random() * listOfMessages.length)];

  return (
    <Card
      className="w-full md:w-[600px] h-full bg-blue-800 text-white bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.7)), url('https://source.unsplash.com/random?school')",
      }}
    >
      <CardHeader>
        <CardTitle className="text-6xl">Smart App</CardTitle>
        <CardDescription className="text-white text-3xl">
          {randomMessage}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Pelajari Lebih Lanjut</Button>
      </CardFooter>
    </Card>
  );
};

export default CardBanner;
