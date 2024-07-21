import React from "react";
import "../global.css";

interface ImcItem {
  categoria: string;
  imcMin: number;
  imcMax: number;
  classificacao: string;
}

interface ImcTableProps {
  imcTabela: ImcItem[];
  imc: number | null;
}

const ImcTable: React.FC<ImcTableProps> = ({ imcTabela, imc }) => {
  return (
    <div className="container">
      <h2 className="text-center">Tabela de IMC</h2>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>IMC Mínimo</th>
            <th>IMC Máximo</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          {imcTabela.map((item, index) => {
            const isHighlighted =
              imc !== null && imc >= item.imcMin && imc < item.imcMax;
            return (
              <tr key={index} className={isHighlighted ? "highlight" : ""}>
                <td>{item.categoria}</td>
                <td>{item.imcMin}</td>
                <td>
                  {item.imcMax === Infinity ? ">" + item.imcMin : item.imcMax}
                </td>
                <td>{item.classificacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ImcTable;
