<<<<<<< Updated upstream
=======
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

>>>>>>> Stashed changes
function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

<<<<<<< Updated upstream
export async function getStaticProps() {
  return { props: {
    products: [{id: 'p1', title: 'Product 1'}],
  },
};
=======
export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // if (data) {
  //   return {
  //     redirect: {
  //       destination: "/no-data",
  //     },
  //   };
  // }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    // it will only work on production, refresh every 10 second
    revalidate: 10,
  };
>>>>>>> Stashed changes
}

export default HomePage;
