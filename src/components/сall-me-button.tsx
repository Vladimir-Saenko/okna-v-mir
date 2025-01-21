import { Button } from "@material-tailwind/react";

function handleClick() {}

function CallMeButton() {
  return (
    <Button
      color="blue"
      size="sm"
      className="border border-gray-400 hover:border-gray-600 hover:shadow-light-blue-300 hover:shadow-sm bg-blue-500 hover:text-gray-900 font-[family-name:var(--font-play)]"
      onClick={handleClick}
    >
      Заказать звонок
    </Button>
  );
}

export default CallMeButton;
