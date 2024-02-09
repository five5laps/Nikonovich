import ColorBox from "../../UI/ColorBox/ColorBox";

const SmartyPantsColorBoxes = () => {
  return (
    <>
      <ColorBox color="#FFFFFF" text="Белый фоновый" />
      <ColorBox color="#F89A9A" text="Акцентный розовый" />
      <ColorBox
        color="#B29AF8"
        text="Акцентный фиолетовый"
        marginLeft="-30px"
      />
      <ColorBox color="#C5E5CD" text="Основной зеленый" />
      <ColorBox color="#F3C941" text="Акцентный желтый" />
      <ColorBox color="#4D8853" text="Акцентный зеленый" />
      <ColorBox color="#F34141" text="Акцентный красный" />
      <ColorBox color="#3217B2" text="Акцентный синий" />
      <ColorBox color="#1E1E1E" text="Текстовый темный" />
    </>
  );
};

export default SmartyPantsColorBoxes;
