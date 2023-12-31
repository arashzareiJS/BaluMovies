import React from "react";
import Image from "next/image";

// Icons
import * as Unicons from "@iconscout/react-unicons";

const MoviePage = ({ data }) => {
  const {
    _id,
    img,
    fa_name,
    fullname,
    genre,
    year_score,
    country,
    director,
    actors,
    time,
    synopsis,
    description,
  } = data;

  return (
    <div className="w-full mt-8 px-4">
      <div className="w-full flex flex-col md:flex-row gap-3">
        <Image
        width={1175}
        height={1763}
          src={`/images/${img}.jpg`}
          alt={fullname}
          className="w-full md:w-80 rounded-lg"
        />
        <div>
          <p className="text-xl text-white">{fullname}</p>
          <ul className="mt-7">
            <li className="listLi listDatils">
              <Unicons.UilSmile /> <span className="text-primary">ژانر :</span> {genre}
            </li>
            <li className="listLi listDatils">
              <Unicons.UilStar /> <span className="text-primary">امتیاز :</span> {year_score[0].score} <img src="/images/imdb.png" alt="imdb" className="w-7" />
            </li>
            <li className="listLi listDatils">
              <Unicons.UilClock /> <span className="text-primary">زمان :</span> {time} دقیقه 
            </li>
            <li className="listLi listDatils">
              <Unicons.UilCalender /> <span className="text-primary">سال انتشار :</span> {year_score[1].year}
            </li>
            <li className="listLi listDatils">
              <Unicons.UilFootball /> <span className="text-primary">محصول کشور :</span> {country}
            </li>
            <li className="listLi listDatils">
              <Unicons.UilUser /> <span className="text-primary">کارگردان :</span> {director}
            </li>
            <li className="listLi listDatils">
              <Unicons.UilUsersAlt /> <span className="text-primary">بازیگران :</span> {actors}
            </li>
          </ul>
        <div className="bg-dark text-white p-3 rounded-lg mt-3">
            <p className="leading-7"><span className="text-primary">خلاصه داستان : </span> {synopsis}</p>
        </div>
        </div>
      </div>
      <div className="bg-dark text-white p-3 rounded-lg mt-3 mb-10">
        <p className="leading-7"><span className="text-primary">درباره {fa_name} :</span> {description}</p>
      </div>
    </div>
  );
};

export default MoviePage;
