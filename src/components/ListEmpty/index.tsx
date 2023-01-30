import * as S from "./styles";

type Props = {
  messsage: string;
};

export function ListEmpty({ messsage }: Props) {
  return (
    <S.Container>
      <S.Message>{messsage}</S.Message>
    </S.Container>
  );
}
