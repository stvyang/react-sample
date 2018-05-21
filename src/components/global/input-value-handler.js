export default function (newValue, inputType) {
  let value = newValue;
  switch (inputType) {
    case 'number':
      value = Number(newValue);
      break;
    default:
  }
  return value;
}
