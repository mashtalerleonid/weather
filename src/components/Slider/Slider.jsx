import { Input } from "./Slider.styled";

export default function Slider({ handleSlider, sliderPos }) {
  return (
    <Input
      onInput={handleSlider}
      type="range"
      min="-30"
      max="40"
      step="1"
      value={sliderPos}
    />
  );
}
