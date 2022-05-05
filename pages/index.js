import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import Card from "../Components/Card";
import SearchField from "../Components/SearchField.jsx";
import { Pagination } from "@mui/material";

/*___________________________________________________________________*/

function Home(props) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const numofCards = 10;

  const searchApi = (api_name) => {
    setCurrentPage(1);

    setApiData(() =>
      props.data.filter(
        (api) =>
          api.API.toLowerCase().includes(api_name.toLowerCase()) ||
          api_name === ""
      )
    );
  };

  useEffect(() => searchApi(""), []);

  const indexOfLastCard = currentPage * numofCards;
  const indexOfFirstCard = indexOfLastCard - numofCards;
  const currentCards = apiData.slice(indexOfFirstCard, indexOfLastCard);

  const handleChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <main className="container mt-5 p-5 pb-0">
      <SearchField allData={props.data} searchApi={searchApi} />

      <div className="row justify-content-between gap-4">
        {currentCards.map((apiData, idx) => (
          <Card key={idx} apiData={apiData} />
        ))}
      </div>
      {currentCards.length < 1 && (
        <h4 className="text-white my-5 py-5 text-center">
          No API Found With This Name!
        </h4>
      )}

      <Pagination
        className="d-flex justify-content-center mt-5 mb-3 p-2 mx-auto rounded-pill pagina shadow-lg "
        style={{ width: "fit-content" }}
        count={props.data.length / numofCards}
        page={currentPage}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </main>
  );
}

/*___________________________________________________________________*/

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://AKASI:awesPz2IJOFLAa3l@akasi.dxn3c.mongodb.net/APIs?retryWrites=true&w=majority"
  );
  const db = client.db();
  const dataCollections = db.collection("apis");
  const apis = await dataCollections.find().toArray();
  client.close();

  return {
    props: {
      data: apis.map((api) => ({
        API: api.API,
        des: api.Description,
        link: api.Link,
        category: api.Category,
      })),
    },
  };
};

/*___________________________________________________________________*/

export default Home;
