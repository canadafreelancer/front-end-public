import listings from "../../../utils/Listings";

const businessListings = listings.filter(
  (listing) => listing.category === "Business"
);
console.log(businessListings);

export function getStaticPaths() {
  const paths = businessListings.map(({ id }) => ({
    params: {
      id: `${id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const id = context.params.id;
  console.log("here", id);
}
