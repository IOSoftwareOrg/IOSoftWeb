import { redirect } from "next/navigation";

// Redirigé vers /fr par le proxy — cette page ne devrait jamais être servie
export default function RootPage() {
  redirect("/fr");
}
