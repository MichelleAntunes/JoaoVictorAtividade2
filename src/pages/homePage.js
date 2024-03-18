import React from "react";

import ImpactosSP from "../assets/ImpactosSP.jpeg";
import DesafiosSP from "../assets/DesafiosSP.jpg";
import AguaSP from "../assets/AguaSP.jpg";
import TieteSP from "../assets/TieteSP.jpg";
import AcoesSP from "../assets/AcoesSP.jpeg";
import Exemplos from "../assets/Exemplos.jpeg";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" gap-4 divide-y-4 divide-slate-400/25 font-roboto font-medium flex flex-col mx-auto">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Impactos da Mudança Climática em São Paulo
          </h2>
          <p className="text-lg">
            Descrição dos efeitos das mudanças climáticas na cidade de São
            Paulo, como aumento das temperaturas, alterações nos padrões de
            chuva e eventos climáticos extremos. Consequências para a saúde
            pública, infraestrutura urbana e meio ambiente local.{" "}
            <Link
              to="/impactos"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${ImpactosSP})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>

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
            Análise dos problemas relacionados ao tratamento de esgoto, coleta
            de resíduos sólidos e poluição das águas na cidade. Impactos na
            qualidade de vida da população e nos ecossistemas locais.{" "}
            <Link
              to="/desafios"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Importância do Acesso à Água Potável
          </h2>
          <p className="text-lg">
            Discussão sobre a disponibilidade e distribuição de água potável em
            São Paulo. Necessidade de conservação e uso sustentável dos recursos
            hídricos para garantir o acesso universal à água de qualidade.{" "}
            <Link
              to="/importancia"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md "
          style={{
            backgroundImage: `url(${AguaSP})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div
          className="m-8 md:w-1/2 bg-cover bg-center bg-no-repeat bg-opacity-50 rounded-md shadow-xl"
          style={{
            backgroundImage: `url(${TieteSP})`,
            height: "30vh",
            width: "25vw",
          }}
        ></div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Revitalização do Rio Tietê
          </h2>
          <p className="text-lg">
            Histórico da degradação do Rio Tietê e seus impactos ambientais e
            sociais. Projetos e iniciativas em andamento para a revitalização do
            rio e melhoria de sua qualidade.{" "}
            <Link
              to="/tiete"
              className=" flex gap-4 text-blue-500 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Ações Individuais e Coletivas para a Sustentabilidade
          </h2>
          <p className="text-lg">
            Sugestões de práticas sustentáveis que os cidadãos podem adotar em
            seu dia a dia para reduzir o impacto ambiental e promover a
            sustentabilidade. Incentivo à participação em projetos comunitários
            e ações voluntárias voltadas para a conservação do meio ambiente e a
            melhoria da qualidade de vida na cidade.
            <Link
              to="/acoes"
              className="text-blue-500 flex gap-4 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
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
            Casos de sucesso de projetos de sustentabilidade, saneamento e
            revitalização urbana em São Paulo e em outras cidades do mundo.
            Lições aprendidas e insights para inspirar novas iniciativas e
            colaborações na comunidade.
            <Link
              to="exemplos"
              className="text-blue-500 flex gap-4 hover:text-blue-700"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
