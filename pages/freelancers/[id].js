import Image from "next/image";
import { MdReviews, MdOutlineWork, MdLocationOn } from "react-icons/md";
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/FreelancerDetails.module.css";
import listings from "../../utils/Listings";
import Layout from "../../Components/LayoutWrapper/Layout";
import FreelancerDetails from "../../Components/FreelancersListing/FreelancerDetails";

export const getStaticPaths = () => {
  const paths = listings.map((freelancer) => {
    return {
      params: {
        id: freelancer.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;
  const user = listings[id - 1];
  return {
    props: { user: user },
  };
};

function details({ user }) {
  return (
    <>
      <Layout>
        <FreelancerDetails user={user} />
      </Layout>
    </>
  );
}
export default details;
