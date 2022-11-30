import listings from "../../utils/Listings";
import { useRouter } from "next/router";

function categoryDetails() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      <h1>This is {`${router.query.id}`} Page</h1>
    </div>
  );
}

export default categoryDetails;
