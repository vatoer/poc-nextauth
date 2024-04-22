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
  "Cara mudah mendaftar sekolah secara online",
  "Yuk, temukan cara praktis untuk mendaftar sekolah secara online!",
  "Nikmati kemudahan mendaftar sekolah tanpa harus antri di lokasi pendaftaran",
  "Dengan sistem Penerimaan Peserta Didik baru online, Anda bisa mendaftar kapan pun dan di mana pun.",
  "Pendaftaran sekolah sekarang lebih mudah dengan Smart PPDB",
  "Dapatkan akses langsung ke formulir pendaftaran tanpa harus datang ke sekolah.",
  "Pendaftaran sekolah sekarang lebih mudah dengan Smart PPDB",
  "Tak perlu lagi ribet bawa berkas-berkas, cukup unggah secara digital!",
  "Jangan lewatkan kesempatan untuk bergabung dengan sekolah impian Anda, daftar sekarang juga secara online!",
  "Manfaatkan fitur-fitur pintar yang disediakan dalam sistem pendaftaran online ini.",
  "Tunggu apa lagi? Segera daftar online dan raih impian pendidikan Anda dengan mudah!",
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
        <CardTitle className="text-6xl">Smart PPDB</CardTitle>
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
