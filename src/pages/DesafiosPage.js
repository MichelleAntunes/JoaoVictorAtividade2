import React from "react";
import { Link } from "react-router-dom";
import DesafiosSP from "../assets/DesafiosSP.jpg";

export const DesafiosPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className=" m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${DesafiosSP})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Desafios do Saneamento Básico na Metrópole
          </h2>
          <p className="text-lg">
            Os desafios do saneamento básico na metrópole representam uma
            questão complexa e multifacetada que afeta diretamente a qualidade
            de vida dos habitantes e a saúde ambiental da cidade. A gestão
            adequada do tratamento de esgoto e coleta de resíduos sólidos é
            essencial para garantir condições sanitárias adequadas e prevenir a
            propagação de doenças. No entanto, muitas áreas metropolitanas
            enfrentam dificuldades na oferta de serviços de saneamento básico,
            resultando em problemas como a contaminação de corpos d'água, o
            acúmulo de lixo nas ruas e a poluição do ar. <br />
            Além disso, a falta de infraestrutura adequada de saneamento também
            pode contribuir para inundações urbanas durante períodos de chuvas
            intensas, aumentando os riscos de desastres naturais e impactando
            negativamente a vida cotidiana dos moradores. Portanto, é
            fundamental investir em políticas públicas e projetos de
            infraestrutura que promovam o acesso universal ao saneamento básico,
            visando garantir a saúde e o bem-estar de todos os cidadãos e a
            sustentabilidade ambiental da metrópole.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default DesafiosPage;
