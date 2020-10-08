import React from "react";

import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const options = [
  { value: "Rodrigo", label: "Rodrigo" },
  { value: "Maria", label: "Maria" },
  { value: "Ana", label: "Ana" },
];

const List: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options}></SelectInput>
      </ContentHeader>
    </Container>
  );
};

export default List;
