import { useState } from "react";

import {
  Container,
  Info,
  Name,
  Description,
  Temp,
  Coord,
  WeatherCard,
  Thumb,
} from "./Weather.styled";
import Slider from "../Slider/Slider";

export default function Weather({ weatherInfo }) {
  const { weather, main, wind, coord, name, sys } = weatherInfo;

  const [sliderPos, setSliderPos] = useState(main.temp);

  function handleSlider(event) {
    setSliderPos(Number(event.target.value));
  }

  return (
    <Container temp={sliderPos}>
      <WeatherCard>
        <Thumb>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather.main}
          />
        </Thumb>

        <div>
          <Info>
            <Name>{`${name}, ${sys.country}`}</Name>
            <Description>
              <i>{weather[0].description}</i>
            </Description>
          </Info>
          <Info>
            <Temp>{`${sliderPos}°C`}</Temp>
            <span>{`${wind.speed} m/s`}</span>
          </Info>
          <Info>
            <span>Geo cords </span>
            <Coord>{`[${coord.lat}, ${coord.lon}]`}</Coord>
          </Info>
        </div>
      </WeatherCard>
      <Slider handleSlider={handleSlider} sliderPos={sliderPos} />
    </Container>
  );
}
