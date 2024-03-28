import ColorBox from "../../../UI/ColorBox/ColorBox";

const RetroStyleColorBoxes = () => {
  return (
    <>
      <ColorBox color="#E4DFCC" text="Бежевый фоновый" />
      <ColorBox color="#F6EDDE" text="Бежевый фоновый 2" />
      <ColorBox color="#2E4056" text="Акцентный синий" />
      <ColorBox color="#A75F6D" text="Основной красный" />
      <ColorBox
        color="#65707A"
        text="Дополнительный синий"
        marginLeft="-30px"
      />
      <ColorBox color="#FFFFFF" text="Белый для текста" />
    </>
  );
};

export default RetroStyleColorBoxes;
