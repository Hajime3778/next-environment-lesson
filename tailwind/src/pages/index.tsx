import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import { Layout } from 'src/components/layout';
//import resolveConfig from 'tailwindcss/resolveConfig';

export const Home = () => {
  const [isClosed, setClosed] = useState(false);
  const isStatic = useMediaQuery({
    query: '(min-width: 640px)',
  });
  return (
    <>
      <div className="flex bg-gray-100">
        {(isStatic || !isClosed) && (
          <aside aria-hidden={isClosed} className="bg-white w-64 min-h-screen flex flex-col">
            <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
              <span className="text-blue py-2">Application</span>
            </div>

            <div className="border-r py-4 flex-grow relative">
              <nav>
                <ul>
                  <li className="p-3">
                    <a> Home </a>
                  </li>
                  <li className="p-3">
                    <a> Profile </a>
                  </li>
                  <li className="p-3">
                    <a> Portfolio </a>
                  </li>
                  <li className="p-3">
                    <a> Contact </a>
                  </li>
                  <li className="p-3">
                    <a> About </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        )}

        <main className="flex-grow flex flex-col min-h-screen">
          <header className="bg-white border-b h-10 flex items-center justify-center">
            {!isStatic &&
              (isClosed ? (
                <button
                  className="w-10 p-1"
                  aria-label="Open menu"
                  title="Open menu"
                  onClick={() => {
                    return setClosed(false);
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              ) : (
                <button
                  className="w-10 p-1"
                  aria-label="Close menu"
                  title="Close menu"
                  onClick={() => {
                    return setClosed(true);
                  }}
                >
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              ))}

            <div className="flex flex-grow items-center justify-between px-3">
              <h1 className="text-lg">Home</h1>
              <button className="text-blue-700 underline">Log in</button>
            </div>
          </header>
        </main>
      </div>
    </>
  );

  // return (
  //   <Layout>
  //     <button
  //       className="btn-blue"
  //       onClick={() => {
  //         window.alert('Hello, World!');
  //       }}
  //     >
  //       Button
  //     </button>
  //   </Layout>
  // );
};

// eslint-disable-next-line import/no-default-export
export default Home;
