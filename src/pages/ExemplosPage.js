import React from "react";
import { Link } from "react-router-dom";
import Exemplos from "../assets/Exemplos.jpeg";

export const ExemplosPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md shadow-xl"
          style={{
            backgroundImage: `url(${Exemplos})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Exemplos de Sucesso e Boas Práticas
          </h2>
          <p className="text-lg">
            Na cidade de São Paulo, exemplos de sucesso e boas práticas em
            sustentabilidade e conservação ambiental são inspiradores
            testemunhos de como ações locais podem gerar impactos positivos em
            larga escala. Projetos inovadores e iniciativas comunitárias
            demonstram o potencial de transformação que reside na colaboração
            entre governos, empresas, organizações não governamentais e
            cidadãos. <br />
            Um exemplo emblemático é o Parque Linear Cantinho do Céu, localizado
            na zona sul da cidade. Este projeto de revitalização transformou uma
            área degradada em um espaço verde multifuncional, promovendo a
            conservação da biodiversidade, a proteção de recursos hídricos e a
            melhoria da qualidade de vida da população local. Além disso, o
            parque oferece oportunidades de lazer, educação ambiental e convívio
            comunitário. <br />
            Outro exemplo notável é o programa de coleta seletiva implantado em
            diversos bairros da cidade. Por meio da separação e reciclagem de
            resíduos sólidos, essa iniciativa contribui para a redução da
            quantidade de lixo destinado a aterros sanitários, a conservação de
            recursos naturais e a geração de empregos na cadeia produtiva da
            reciclagem. Além disso, promove a conscientização sobre a
            importância da gestão adequada dos resíduos e do consumo
            responsável. <br />
            Além desses exemplos, São Paulo também se destaca por seus projetos
            de mobilidade urbana sustentável, como a ampliação da rede de
            ciclovias e o incentivo ao uso do transporte público. Essas
            iniciativas visam reduzir a emissão de gases de efeito estufa,
            melhorar a qualidade do ar e proporcionar alternativas de
            deslocamento mais seguras e saudáveis para os cidadãos.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default ExemplosPage;
