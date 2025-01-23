import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="">
      <h1>Такой страницы не существует, возможно она ещё разрабатывается.</h1>
      <Link href="/" className="hover:underline">
        Вернуться на Главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
