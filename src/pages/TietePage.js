import React from "react";
import { Link } from "react-router-dom";
import TieteSP from "../assets/TieteSP.jpg";

export const TietePage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
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
            A revitalização do Rio Tietê é um empreendimento essencial para
            mitigar os desafios ambientais e sociais enfrentados em São Paulo.
            Ao longo dos anos, o Rio Tietê tem sido objeto de degradação devido
            à poluição industrial, esgoto não tratado e ocupação desordenada de
            suas margens. Essa degradação resultou em impactos ambientais
            significativos, como a morte de peixes, perda de biodiversidade e
            contaminação da água. <br />
            No entanto, projetos e iniciativas de revitalização estão em
            andamento para reverter esse cenário. Esses esforços visam melhorar
            a qualidade da água, restaurar ecossistemas naturais e promover o
            desenvolvimento sustentável das áreas ribeirinhas. Isso inclui a
            construção de estações de tratamento de esgoto, a remoção de
            resíduos sólidos e a criação de áreas verdes ao longo das margens do
            rio. <br />
            Além dos benefícios ambientais, a revitalização do Rio Tietê também
            tem o potencial de trazer impactos positivos para as comunidades
            locais. Ao recuperar a qualidade da água e o ambiente natural ao
            redor do rio, é possível criar espaços de lazer e recreação para os
            moradores, promovendo uma melhor qualidade de vida e bem-estar.{" "}
            <br />
            No entanto, é importante ressaltar que a revitalização do Rio Tietê
            é um processo complexo e de longo prazo que requer o envolvimento de
            múltiplos stakeholders, incluindo governos, empresas, ONGs e a
            sociedade civil. Somente com um esforço conjunto e comprometimento
            contínuo será possível transformar o Rio Tietê em um recurso valioso
            e sustentável para a cidade de São Paulo e suas comunidades.
          </p>
        </div>
      </div>
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default TietePage;
