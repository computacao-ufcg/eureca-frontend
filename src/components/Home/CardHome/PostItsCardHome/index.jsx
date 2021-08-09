import React from "react";

import "../style.css";
import "./style.css";

import TitleCardHome from "../TitleCardHome";

import Mask8 from "../../../../assets/new_home_assets/mask_8.svg";

import PostIt from "./PostIt";

const PostItsCardHome = () => {
  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='card-img-4'>
            <div className='mask8'>
              <img src={Mask8} alt='mask8' />
            </div>
            <div className='title-card-content'>
              <TitleCardHome title={"POST-IT"} />
            </div>
            <div className='summary-card-content2'>
              <div className='post-its'>
                <PostIt date={"11/01"} title={"Reunião do Eureca"} content={"Marcar reunião com alunos"} />
                <PostIt date={"03/02"} title={"Matrículas"} content={"Realizar Matrículas"} />
                <PostIt date={"28/02"} title={"Início das Aulas"} content={"Começo das aulas de SO"} />
                <PostIt date={"16/04"} title={"Trancamento"} content={"Último dia para trancamento"} />
                <PostIt date={"22/04"} title={"LOAC"} content={"Receber reclamação dos alunos sobre Elmar"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostItsCardHome;
