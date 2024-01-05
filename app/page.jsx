import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex content-center flex-col ">
      <h1 className="mt-5 font-extrabold text-6xl text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-orange-500 text-center">AI-Powered Prompts</span>
      </h1>
      <p className="flex justify-center items-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create, and share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
