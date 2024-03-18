import React from "react";
import { Link } from "react-router-dom";
import AcoesSP from "../assets/AcoesSP.jpeg";

export const AcoesPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Ações Individuais e Coletivas para a Sustentabilidade
          </h2>
          <p className="text-lg">
            Em meio aos desafios ambientais enfrentados na cidade de São Paulo,
            as ações individuais e coletivas para a sustentabilidade desempenham
            um papel crucial na busca por soluções eficazes. Essas iniciativas
            abrangem uma ampla gama de práticas que visam reduzir o impacto
            ambiental, promover a conservação dos recursos naturais e melhorar a
            qualidade de vida da população.
            <br />
            No âmbito individual, pequenas mudanças de hábitos cotidianos podem
            fazer uma grande diferença. Medidas como economizar água, reciclar
            resíduos, reduzir o consumo de energia e optar por meios de
            transporte sustentáveis contribuem para a preservação do meio
            ambiente e a redução da pegada ecológica. Além disso, a
            conscientização e a educação ambiental são fundamentais para
            sensibilizar a população sobre a importância da sustentabilidade e
            incentivar a adoção de comportamentos mais responsáveis.
            <br />
            Por outro lado, as ações coletivas envolvem a mobilização de grupos,
            comunidades e organizações em prol de objetivos comuns relacionados
            à sustentabilidade. Isso pode incluir a implementação de projetos de
            recuperação ambiental, a realização de campanhas de conscientização,
            a participação em atividades de reflorestamento e a promoção de
            práticas agrícolas sustentáveis. O envolvimento da sociedade civil,
            aliado à colaboração com o setor público e privado, é essencial para
            impulsionar mudanças significativas e duradouras.
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${AcoesSP})`,
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

export default AcoesPage;
