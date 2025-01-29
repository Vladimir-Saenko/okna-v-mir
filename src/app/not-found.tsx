/* eslint-disable @next/next/no-img-element */

function NotFound() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src="/images/404.png" alt="404-image" />
      <div className="flex flex-col items-center">
        <h1 className="font-[family-name:var(--font-oswald)] text-2xl lg:text-4xl mb-10 text-blue-gray-800">
          Такой страницы не существует...
        </h1>
        <h1 className="font-[family-name:var(--font-oswald)] text-xl lg:text-2xl text-blue-900 mb-10">
          Или она ещё разрабатывается.
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
