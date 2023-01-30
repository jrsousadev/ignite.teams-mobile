import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
