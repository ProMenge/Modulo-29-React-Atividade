import Header from "./components/Header";
import FormIMC from "./components/FormIMC";
import IMCTable from "./components/IMCTable";
import { useEffect, useState } from "react";
import "./global.css";

interface ImcItem {
  categoria: string;
  imcMin: number;
  imcMax: number;
  classificacao: string;
}

const App: React.FC = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [imc, setImc] = useState<number | null>(null);

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedImc = weightInKg / (heightInMeters * heightInMeters);
      setImc(calculatedImc);
    }
  }, [height, weight]);

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) >= 0 && parseFloat(value) <= 300) {
      setHeight(value);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) >= 0 && parseFloat(value) <= 500) {
      setWeight(value);
    }
  };

  const imcTabela: ImcItem[] = [
    { categoria: "Magreza", imcMin: 0, imcMax: 18.5, classificacao: "Magreza" },
    {
      categoria: "Normal",
      imcMin: 18.5,
      imcMax: 24.9,
      classificacao: "Peso Normal",
    },
    {
      categoria: "Sobrepeso",
      imcMin: 24.9,
      imcMax: 29.9,
      classificacao: "Sobrepeso",
    },
    {
      categoria: "Obesidade Grau I",
      imcMin: 29.9,
      imcMax: 34.9,
      classificacao: "Obesidade Grau I",
    },
    {
      categoria: "Obesidade Grau II",
      imcMin: 34.9,
      imcMax: 39.9,
      classificacao: "Obesidade Grau II",
    },
    {
      categoria: "Obesidade Grau III",
      imcMin: 39.9,
      imcMax: Infinity,
      classificacao: "Obesidade Grau III",
    },
  ];

  return (
    <div className="App">
      <Header />
      <FormIMC
        height={height}
        weight={weight}
        onHeightChange={handleHeightChange}
        onWeightChange={handleWeightChange}
      />
      <IMCTable imcTabela={imcTabela} imc={imc} />
    </div>
  );
};

export default App;
