import axios from "axios";
import { useState, useEffect } from "react";

import "./IntradayIndex.scss";
import { Footer } from "../../components";
// import tableData from "../../files/prevNifty.json";
// import tableData2 from "../../files/nifty.json";

const BASE_URL = "http://127.0.0.1:8000";

const IntradayIndex = () => {
  // const data = JSON.parse(tableData2);
  // const check = data[0];

  const [niftyData, setNiftyData] = useState("[]");
  const [prevNiftyData, setPrevNiftyData] = useState([]);

  const getNiftyData = async () => {
    const response = await axios.get(`${BASE_URL}/nifty`);
    setNiftyData(response.data);
    // console.log("Nifty Data", response.data);
  };

  const getPrevNiftyData = async () => {
    const response = await axios.get(`${BASE_URL}/previousnifty`);
    setPrevNiftyData(response.data);
    // console.log("Previous Nifty Data", response.data);
  };

  useEffect(() => {
    getNiftyData();
    getPrevNiftyData();
  }, []);

  const handleClick = () => {
    getNiftyData();
  };

  let data;
  let check;
  // let check = -2;
  // console.log(typeof data, JSON.parse(data));

  if (niftyData) {
    data = JSON.parse(niftyData);
    check = data[0];
  }

  return (
    <div className="">
      <div className="m-2 md:mx-10 mb-20 p-4 md:p-10 bg-[#294559] rounded-3xl shadow-2xl">
        <div className="mb-10 flex items-center justify-center md:justify-start">
          <p className="text-4xl font-extrabold tracking-tight text-white">
            Strategies
          </p>
        </div>
        <div className="flex items-center justify-center p-4 mb-5">
          {check == -2 ? (
            <p className="text-3xl font-bold tracking-wide">
              Market closed Today
            </p>
          ) : check == 0 ? (
            <p className="text-3xl font-bold tracking-wide">
              No Trades for Today till Now
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold tracking-wide mb-4">
                Sell {check == 1 ? "PE" : "CE"}
              </p>
              <table className="nifty__table">
                <thead>
                  <tr>
                    <th>Previous Day LowPrice</th>
                    <th>Previous Day HighPrice</th>
                    <th>Last Price</th>
                    <th>Open Price</th>
                    <th>Strike Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                    <td>{data[4]}</td>
                    <td>{data[5]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="gradient-03" />
        <div className="flex items-center justify-end">
          <button
            className="m-5 px-5 py-3 bg-cyan-700 font-bold tracking-wider text-lg rounded-lg"
            onClick={handleClick}
          >
            Fetch Data
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[90%] bg-[#1a232e] h-1 md:m-8 m-6" />
        </div>
        <div className="mb-10 flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Previous{" "}
          </p>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Recommendations
          </p>
        </div>
        <div className="flex justify-center items-center">
          <table className="prevNifty__table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Action</th>
                <th>Date</th>
                <th>Option Type</th>
                <th>Strike Price</th>
                <th>Instrument</th>
              </tr>
            </thead>
            <tbody>
              {prevNiftyData?.map((rowData, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>Sell</td>
                  <td>{rowData[0]}</td>
                  <td>{rowData[2]}</td>
                  <td>{rowData[1]}</td>
                  <td>NIFTY</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="gradient-05" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default IntradayIndex;
