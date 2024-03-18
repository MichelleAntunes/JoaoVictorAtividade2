import React from "react";
import { Link } from "react-router-dom";
import AguaSP from "../assets/AguaSP.jpg";

export const ImportanciaPage = () => {
  return (
    <div className="pt-20 pb-20 w-screen flex flex-col items-center justify-center">
      <div className="divide-y-4 divide-slate-400/25 flex flex-col gap-6 md:flex-row items-center justify-center m-8 ">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Importância do Acesso à Água Potável
          </h2>
          <p className="text-lg">
            A importância do acesso à água potável em áreas urbanas como São
            Paulo é imensurável. A água é essencial para a vida humana,
            desempenhando um papel fundamental na saúde, higiene e bem-estar das
            pessoas. Além disso, a água potável é necessária para uma série de
            atividades diárias, incluindo preparo de alimentos, higiene pessoal
            e limpeza doméstica. <br />
            Em uma metrópole como São Paulo, onde milhões de pessoas residem, o
            acesso à água potável é crucial para garantir a qualidade de vida e
            prevenir doenças transmitidas pela água. Sem acesso adequado à água
            limpa e segura, as comunidades enfrentam sérios riscos à saúde, como
            doenças gastrointestinais, infecções e desnutrição. <br />
            Além disso, a disponibilidade de água potável também é essencial
            para o funcionamento adequado de setores-chave da economia, como a
            agricultura, indústria e turismo. Sem acesso suficiente à água de
            qualidade, esses setores podem sofrer impactos negativos
            significativos, afetando tanto a economia local quanto a qualidade
            de vida da população. <br />
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
      <Link to="/" className="mt-8 text-blue-500 hover:text-blue-700">
        Voltar à página principal
      </Link>
    </div>
  );
};

export default ImportanciaPage;
