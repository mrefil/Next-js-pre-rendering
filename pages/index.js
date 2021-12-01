function HomePage(props) {
  const {products} = props;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return { props: {
    products: [{id: 'p1', title: 'Product 1'}],
  },
  // it will only work on production, refresh every 10 second
  revalidate: 10
};
}

export default HomePage;
