import React from "react";
import { Link } from "react-router-dom";
import ImpactosSP from "../assets/ImpactosSP.jpeg";

export const ImpactosPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Impactos da Mudança Climática em São Paulo
          </h2>
          <p className="text-lg">
            A cidade de São Paulo enfrenta uma série de desafios decorrentes da
            mudança climática, refletindo um fenômeno global com implicações
            locais significativas. O aumento das temperaturas tem sido uma das
            manifestações mais evidentes, resultando em ondas de calor mais
            frequentes e intensas, afetando diretamente a saúde da população e
            aumentando o risco de doenças relacionadas ao calor. <br />
            Além disso, as alterações nos padrões de chuva têm impactado a
            disponibilidade de água, com períodos de seca prolongados seguidos
            por chuvas intensas e eventos de inundação. Essas variações
            climáticas exacerbam os desafios de gestão de recursos hídricos e
            aumentam a vulnerabilidade da infraestrutura urbana, com danos a
            estradas, edifícios e sistemas de drenagem. A poluição atmosférica,
            muitas vezes agravada por condições climáticas desfavoráveis, também
            representa uma preocupação constante para a qualidade do ar e a
            saúde respiratória dos habitantes. Diante desse cenário, a adaptação
            às mudanças climáticas torna-se crucial para mitigar seus impactos e
            promover a resiliência da cidade e de sua população.
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md"
          style={{
            backgroundImage: `url(${ImpactosSP})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default ImpactosPage;
