import Link from "next/link";

export const MenuItems = () => {
  return (
    <>
      <Link href="/" className="transition-colors hover:underline">
        Panduan Pendaftaran
      </Link>
      <Link href="/" className="transition-colors hover:underline">
        Aturan dan Ketentuan
      </Link>
      <Link href="/" className="transition-colors hover:underline">
        Alur Proses
      </Link>
      <Link href="/" className="transition-colors hover:underline">
        Jadwal
      </Link>
      <Link href="/" className="transition-colors hover:underline">
        Daya Tampung
      </Link>
      <Link href="/" className="transition-colors hover:underline">
        Seleksi
      </Link>
    </>
  );
};

export default MenuItems;
