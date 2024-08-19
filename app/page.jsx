// https://www.traversymedia.com/products/next-js-from-scratch-2024/categories/2154793741/posts/2175322848

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Go To Properties</Link>
    </div>
  );
};

export default HomePage;
