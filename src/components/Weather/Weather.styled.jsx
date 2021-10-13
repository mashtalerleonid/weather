import styled from "@emotion/styled";

function getBgdColor(t) {
  let red = 0;
  let green = 0;
  let blue = 0;

  if (t <= -10) {
    red = 0;
    green = 256;
    blue = 256;
  } else if (t > -10 && t <= 10) {
    red = 12.8 * (t + 10);
    green = 256 - 0.45 * (t + 10);
    blue = 256 - 12.8 * (t + 10);
  } else if (t > 10 && t <= 30) {
    red = 256;
    green = 247 - 5.35 * (t - 10);
    blue = 0;
  } else {
    red = 256;
    green = 140;
    blue = 0;
  }

  return `rgb(${red},${green},${blue})`;
}

// 5.35, 0.45, 12.8 - це приріст певного кольору при зміні температури на 1 градус. Вирахувані на основі кольорів з ТЗ.

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => getBgdColor(props.temp)};
`;

export const WeatherCard = styled.div`
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
`;

export const Info = styled.p`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.span`
  margin-right: 10px;
  color: var(--accent-color);
  font-weight: bold;
`;

export const Description = styled.span`
  font-weight: bold;
`;

export const Temp = styled.span`
  margin-right: 20px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  background-color: rgb(80, 79, 79);
`;

export const Coord = styled.span`
  color: var(--accent-color);
`;

export const Thumb = styled.div`
  object-fit: cover;
`;
