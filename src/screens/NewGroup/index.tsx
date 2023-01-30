import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";

import * as S from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      if (group.length === 0)
        return Alert.alert("Novo grupo", "Informe o nome da turma.");

      await groupCreate(group);
      navigation.navigate("players", { group: group.trim() });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Novo Grupo", err.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
      }
    }
  };

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button title="Criar" style={{ marginTop: 15 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
}
