import { useParams } from "react-router-dom";

const SermonDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SermonDetails;
