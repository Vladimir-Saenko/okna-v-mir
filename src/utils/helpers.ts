// Функция форматирование телефонного номера к форме +7-000-000-0000
export function formatPhone(strPhone: string): string {
  const numbers: string = strPhone.replace(/[^\d]/g, "").slice(1);
  const nums: string[] = [
    "+7",
    numbers.slice(0, 3),
    numbers.slice(3, 6),
    numbers.slice(6),
  ];
  return nums.join("-");
}
