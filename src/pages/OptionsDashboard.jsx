import { Table } from "antd";
import { IoMdCalendar } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { GiFunnel } from "react-icons/gi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import { Footer } from "../components";
import optionsData from "../files/optionsData.json";
const tableData = optionsData.data;

const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    width: "15vw",
    render: (text) => (
      <div className="text-sm md:text-lg">
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "OI Trend",
    dataIndex: "oiTrend",
    key: "oiTrend",
    width: "15vw",
    render: (text) => (
      <div className="flex flex-row items-center justify-start gap-2 text-sm md:text-lg">
        {/* {true && <span className="text-blue-500">Agg. </span>} */}
        {text !== "Long Build Up" || text === "Long Cover" ? (
          <p className="text-red-500">{text}</p>
        ) : (
          <p className="text-green-500">{text}</p>
        )}
      </div>
    ),
  },
  {
    title: "Spot Price",
    dataIndex: "spotPrice",
    key: "spotPrice",
    width: "15vw",
    render: (_, { spotPrice }) => (
      <div className="flex flex-col text-sm md:text-lg">
        <div>
          <p className="">{spotPrice?.price}</p>
        </div>
        <div className="">
          {spotPrice?.change > 0 ? (
            <div className="flex items-center gap-1">
              <GoTriangleUp size="25px" color="green" />
              <p className="text-green-500">
                {Math.abs(spotPrice.change).toFixed(1)}%
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <GoTriangleDown size="25px" color="red" />
              <p className="text-red-500">
                {Math.abs(spotPrice.change).toFixed(1)}%
              </p>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Cum. Open Interest",
    key: "coi",
    dataIndex: "coi",
    width: "15vw",
    render: (_, { coi }) => (
      <div className="flex flex-col text-sm md:text-lg">
        <div>
          <p className="">{coi?.price}</p>
        </div>
        <div className="">
          {coi?.change > 0 ? (
            <div className="flex items-center gap-1">
              <GoTriangleUp size="25px" color="green" />
              <p className="text-green-500">
                {Math.abs(coi.change).toFixed(1)}%
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <GoTriangleDown size="25px" color="red" />
              <p className="text-red-500">{Math.abs(coi.change).toFixed(1)}%</p>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Quantity/Trades",
    key: "qut",
    dataIndex: "qut",
    width: "15vw",
    render: (text) => (
      <div className="text-sm md:text-lg">
        <p>{text}</p>
      </div>
    ),
  },
];

const titleFunction = () => {
  const today = new Date();
  const todayArray = today.toString().split(" ").slice(0, 4);
  const reqString = `${todayArray[0]}, ${todayArray[2]} ${todayArray[1]} ${todayArray[3]}`;
  return (
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-row items-center gap-2">
        <IoMdCalendar size={25} />
        <p className="font-bold text-lg">{reqString}</p>
      </div>
      <div className="flex items-center flex-row gap-4">
        <MdDownload size={25} />
        <GiFunnel size={25} />
      </div>
    </div>
  );
};

const dataSource = tableData.map((data, index) => ({
  key: index,
  symbol: data[1],
  oiTrend: data[6],
  spotPrice: {
    price: data[2].toFixed(1).toLocaleString("en-US"),
    change: data[5].toFixed(1),
  },
  coi: {
    price: data[0].toLocaleString("en-US"),
    change: data[3].toFixed(1),
  },
  qut: data[4].toFixed(1).toLocaleString("en-US"),
}));

const OptionsDashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center dark">
        <div className="gradient-02" />
        <Table
          className="mt-10"
          columns={columns}
          dataSource={dataSource}
          pagination={true}
          title={titleFunction}
        />
      </div>
      {/* <div className="gradient-03" /> */}
      {/* <div className="gradient-04" /> */}
      {/* <div className="gradient-05" /> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default OptionsDashboard;
